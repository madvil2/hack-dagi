
import re
from utils.API_calls import *

chainbase_url = "https://api.chainbase.online"


def parse_contract_address(content):
    """This function is used to extract the contract address from the content of a webpage."""
    contract_address = re.search(r'0x[a-fA-F0-9]{40}', content)
    if contract_address:
        return contract_address.group()
    else:
        return None
    


def get_total_supply(contract_address, chain_id=1) : 
    url = chainbase_url + "/v1/token/metadata"
    querystring = {"chain_id":chain_id,"contract_address":contract_address}

    res = send_chainbase_request("GET", url, params=querystring)
    if res.status_code == 200 :
        data = res.json()["data"]
        total_supply = int(data['total_supply'])
        decimals = int(data['decimals'])
        return total_supply / (10 ** decimals)
    else :
        raise Exception("Request failed", res.text)


def get_top_holder_balance(contract_address, chain_id=1, limit=1) :
    url = chainbase_url + "/v1/token/top-holders"
    querystring = {"chain_id":1,"contract_address":contract_address,"limit":limit}
    res = send_chainbase_request("GET", url, params=querystring)
    if res.status_code == 200 :
        data = res.json()["data"]
        if limit == 1 :
            return int(round(float(data[0]['amount'])))
        else : 
            sum_balance = 0
            for holder_i in range(limit) :
                sum_balance += int(round(float(holder_i['amount'])))
            return sum_balance
    else :
        raise Exception("Request failed : get top holder(s) balance")
    

def hodler_centralization(contract_address, top_holders=1) : 
    top_holder_balance = get_top_holder_balance(contract_address)
    total_supply = get_total_supply(contract_address)
    holding_percentage = (top_holder_balance / total_supply) * 100
    return holding_percentage

def collect_onchain_data(contract_address) :
    total_supply = get_total_supply(contract_address)
    top1_hodler_centralization = hodler_centralization(contract_address, 1)
    #top10_hodler_centralization = hodler_centralization(contract_address, top_holders=10)
    msg = """Additional important on-chain data regarding the smart contract: \n
    - Total Supply : {total_supply} \n
    - Holding centralization : The top holder holds {holding_percentage} of the total supply. \n
    """.format(total_supply=total_supply, holding_percentage=hodler_centralization)
    #The top 10 holders hold {top_10_holders_percentage} of the total supply. \n
    return msg
