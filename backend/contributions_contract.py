"""from dotenv import load_dotenv
from py_near.account import Account
import asyncio
from py_near.dapps.core import NEAR


near_testnet_url = "https://rpc.testnet.near.org"


ACCOUNT_ID = "g10mv0.testnet"
PRIVATE_KEY = load_dotenv("NEAR_TESTNET_PRIVATE_KEY")

async def get_near_data():
   acc = Account(ACCOUNT_ID, PRIVATE_KEY)

   await acc.startup()
   print(await acc.get_balance() / NEAR)
   print(await acc.get_balance("naeba_net.testnet") / NEAR)

   tr = await acc.send_money("naeba_net.testnet", NEAR * 2)
   print(tr.transaction.hash)
   print(tr.logs)
"""

#command to call the contract method :
#near call --accountId naeba_net.testnet --deposit 1 --privateKey PRIVATE_KEY naeba_net.testnet insert_contribution '{"project": "Ethereum","msg" :"ok"}'

import requests
import base64
import json
import subprocess, sys
from dotenv import load_dotenv
import os

# NEAR RPC endpoint
url = "https://rpc.testnet.near.org"
load_dotenv()
near_private_key = os.getenv("NEAR_TESTNET_PRIVATE_KEY")

contrib_index = {} # index of the last known contributions by project name

def pretty_print(data):
    print(json.dumps(data, indent=4))

def send_near_post_request(url, params):
    # Send the HTTP POST request
    response = requests.post(url, json=params)
    # Check if the request was successful
    if response.status_code == 200:
        try:
            result_ascii = response.json()["result"]["result"]
            # Convert ASCII values to string
            json_string = ''.join(chr(i) for i in result_ascii)
            # Parse the JSON string
            data = json.loads(json_string)
            return data
        except Exception as e:
            print("Error : ", e)
            print(response.json())
            return response.json()
    else:
        raise(f"Failed to call contract method. Status code: {response.status_code}, Response: {response.text}")
        

def get_project_on_sc(project_name):
    account_id = "naeba_net_test.testnet"
    method_name = "get_project"

    # Request parameters
    params = {
        "request_type": "call_function",
        "finality": "final",
        "account_id": account_id,  # Replace with your account ID
        "method_name": method_name,  # Replace with your method name
        "args_base64": base64.b64encode(json.dumps({"key":project_name}).encode('utf-8')).decode('utf-8')  # Replace with your method arguments
    }
    print(params)
    # JSON-RPC payload
    payload = {
        "jsonrpc": "2.0",
        "id": "dontcare",
        "method": "query",
        "params": params
    }

    return send_near_post_request(url, payload)

def get_all_contributions(project_name):
    account_id = "naeba_net_test.testnet"
    method_name = "get_contribution"
    
    # Request parameters
    params = {
        "request_type": "call_function",
        "finality": "final",
        "account_id": account_id,  # Replace with your account ID
        "method_name": method_name,  # Replace with your method name
        "args_base64": base64.b64encode(json.dumps({"project":project_name}).encode('utf-8')).decode('utf-8')  # Replace with your method arguments
    }

    # JSON-RPC payload
    payload = {
        "jsonrpc": "2.0",
        "id": "dontcare",
        "method": "query",
        "params": params
    }

    return send_near_post_request(url, payload)

def get_changes():
    accounts_ids = ["naeba_net_test.testnet"]

    # Request parameters
    params = {
        "changes_type": "data_changes",
        "account_ids": accounts_ids,  # Replace with your account ID
        "key_prefix_base64": "",  # Use an empty string to return all state changes
        "finality": "final"  # Or use "block_id" and provide the block ID if needed
    }

    # JSON-RPC payload
    payload = {
        "jsonrpc": "2.0",
        "id": "dontcare",
        "method": "EXPERIMENTAL_changes",
        "params": params
    }

    # Send the HTTP POST request
    response = requests.post(url, json=payload)
    print(response.json())
    # Check if the request was successful
    if response.status_code == 200:
        result_ascii = response.json()["result"]
        # Convert ASCII values to string
        json_string = ''.join(chr(i) for i in result_ascii)
        # Parse the JSON string
        data = json.loads(json_string)
        return data
    else:
        raise(f"Failed to call contract method. Status code: {response.status_code}, Response: {response.text}")
        
    #pretty_print(send_near_post_request(url, payload))

def compare_contributions(all_contributions, project_name):
    if len(all_contributions) > contrib_index[project_name]:
        new_contributions = all_contributions[contrib_index[project_name]:]
        contrib_index[project_name] = len(all_contributions)
        return new_contributions
    
def concatenate_contrib(contributions):
    msg = ""
    for i in range(len(contributions)) :
        msg += i + contributions[i]["message"] + "\n"
    return msg

def send_transcation_near(method_name, args, account_id="naeba_net_test.testnet", contract_name = "naeba_net_test.testnet"):
    """This method sends a transaction to the NEAR blockchain using the NEAR CLI.
    It is done in the name of the oracle, and signed by it (with private key stored locally). """

    account_id = "naeba_net_test.testnet"
    contract_name = "naeba_net_test.testnet"
    method_name = method_name
    deposit = 1 if method_name == "insert_contribution" else 0
    if method_name == "insert_contribution":
        deposit_str = ""
    #command = f"near call --accountId {account_id} --deposit 1 --privateKey {near_private_key} {contract_name} {method_name} '{{\"project\": {project_name},\"msg\" :{msg}}}'"
    #command = f"near contract call-function as-transaction {contract_name} {method_name} json-args '{{\"project\":\"{project_name}\", \"msg\":\"{msg}\"}}' prepaid-gas '100.0 Tgas' attached-deposit '1 NEAR' sign-as {account_id} network-config testnet sign-with-legacy-keychain display"
    command = f"near contract call-function as-transaction {contract_name} {method_name} json-args '{args}' prepaid-gas '100.0 Tgas' attached-deposit '{deposit} NEAR' sign-as {account_id} network-config testnet sign-with-legacy-keychain send"
    print(command)
    try:
        subprocess.run(command, shell = True, executable="/bin/bash")
    except Exception as e:
        print(f"Error while sending the contribution to NEAR: {e}")


def broadcast_signed_transaction_to_near(signed_transaction):
    command = "near transaction send-signed-transaction " + signed_transaction + "network-config testnet send"
    subprocess.run(command, shell = True, executable="/bin/bash")

def update_project(args, account_id = "naeba_net_test.testnet"):
    method_name = "update_project"
    return send_transcation_near("update_project", args)

def set_summary_near(project_name, msg):
    pass
