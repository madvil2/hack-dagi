from dotenv import load_dotenv
import requests 
import os


load_dotenv()  # Load environment variables from .env file
chainbase_API_key = os.getenv("CHAINBASE_API_KEY", "")
corcel_api_key = os.getenv("CORCEL_API_KEY", "")

corcel_url = "https://api.corcel.io"

def send_chainbase_request(method, url, params) :
    headers = {"x-api-key": chainbase_API_key}
    response = requests.request(method, url, headers=headers, params=params)
    return response

def send_corcel_request(method, url, params) :
    headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "Authorization": corcel_api_key
    }
    response = requests.post(url, json=params, headers=headers)
    return response.text

def corcel_api_cortext_chat(role, prompt, content):
    url = corcel_url + "/v1/text/cortext/chat"
    payload = {
        "model": "cortext-ultra",
        "stream": False,
        "top_p": 1,
        "temperature": 0.0001,
        "max_tokens": 4096,
        "messages": [
            {
                "role": role,
                "content": prompt + content
            }
        ]
    }
    return send_corcel_request("POST", url, payload)
