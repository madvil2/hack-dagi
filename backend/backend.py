from flask import Flask, jsonify, request

from API_calls import *
from analyze_webpage_scam import *
from on_chain_data import *
from contributions_contract import *

app = Flask(__name__)


@app.route('/')
def home():
    return "Hello on NAEBA.NET endpoint."

@app.route('/api/scam_data/scam_addresses', methods=['GET'])    
def get_scam_addresses() :
    with open('scam_addresses.json') as f:
        scam_addresses = json.load(f)
        return jsonify(scam_addresses)
    
@app.route('/api/scam_data/scam_address/<string:address_id>', methods=['GET'])
def is_scam_address(address_id) :
    with open('scam_database/scamsniffer_all.json') as f:
        scam_addresses = json.load(f)["address"]
        if address_id in scam_addresses:
            return jsonify({"address_id": address_id, "is_scam": True}), 200
        else:
            return jsonify({"address_id": address_id, "is_scam": False}), 200
        
#@app.route('/api/scam_data/scam_domain/<string:domain_id>', methods=['GET'])
def is_scam_domain(domain_id) :
    with open('scam_database/scamsniffer_all.json') as f:
        scam_domains = json.load(f)["domains"]
        if domain_id in scam_domains:
            return True
        else:
            return False


@app.route('/api/scam_data/isThisAScam', methods=['POST'])
def is_this_a_scam() :
    """This API endpoint is used to check if a domain is a scam or not. 
    It runs the analysis. 
    It first checks if the domain is in the scam database.
    If not, it fetches the content of the webpage and analyses it using GPT-4o.
    Based on the descritpion done by GPT-4o, it asks GPT-4o to analyse at what level the project seems to be a scam (=scamicity), then it asks again GPT-4o to judge the project in one word among [[True, Highly Probable, Probable, Unlikely, False, Unknown, Not enough data, Not relevant, Shitcoin]"""
    #Note : when I say "gpt-4o", it seems to be actually "cortex-ultra". I don't know this model.
    domain = request.args.get('domain', default=None, type=str)
    if domain is None:
        return jsonify({"error": "No domain provided"}), 400
    if is_scam_domain(domain) :
        return jsonify({"is_scam": True, "justification" : "Address is known as a scam"}), 200
    else:
        txt_page_analysis = analyse_webpage("https://" + domain)
        txt_scamicity = analyse_scamicity(txt_page_analysis)
        response_scam = analyse_scamicity_jugement(txt_scamicity)
        return jsonify({"domain": domain, "is_scam": response_scam, "justification" : txt_scamicity, "project_description:" : txt_page_analysis}), 200
    

@app.route('/api/near/broadcast_transaction', methods=['POST'])
def broadcast_signed_transaction(signed_transaction) :
    signed_transaction = request.args.get('signed_transaction', default=None, type=str)
    if signed_transaction is None:
        return jsonify({"error": "No signed_transaction provided"}), 400
    broadcast_signed_transaction_to_near(signed_transaction)


@app.route('/api/near/new_contribution', methods=['POST'])
def new_contribution_near() :
    """This API endpoint is used to tell the backend server that there are new contributions on the smart contract.
    The backend server will then fetch the new contributions and call Galadriel on these."""

    # Get the project name and the contribution message from the url
    project_name = request.args.get('project_name', default=None, type=str)
    if project_name is None:
        return jsonify({"error": "No project_name provided"}), 400
    contrib_msg = request.args.get('contribution', default=None, type=str)
    if contrib_msg is None:
        return jsonify({"error": "No contribution message provided"}), 400
    
    # Send the contribution to the smart contract
    param = f"{{\"project_name\": \"{project_name}\", \"msg\": \"{contrib_msg}\"}}"
    send_transcation_near("insert_contribution", param)
    """
    all = get_all_contributions(project_name)
    new = compare_contributions(all, project_name)
    if len(new) > 0 :
        concatenate_contrib(all)
        call_galadriel(project_name, contribution)
    """
    return jsonify({"project_name": project_name, "new_contributions": res}), 200

@app.route('/api/near/get_project/<string:project_name>', methods=['GET'])
def get_project(project_name) :
    res = get_project_on_sc(project_name)
    return jsonify(res), 200

def test_update_project() :
    args = f"{{\"key\": \"Ethereum\", \"address\": \"Silversquare\", \"review\": \"acceptable\", \"chain_id\": \"1\", \"tag\":\"no scan\"}}"
    update_project(args)

@app.route('/api/test', methods=['GET'])
def test() :
    return jsonify({"hello": "world"})

if __name__ == '__main__':
    app.run(debug=True)
