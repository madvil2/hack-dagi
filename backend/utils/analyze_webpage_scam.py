import json
from bs4 import BeautifulSoup

from utils.API_calls import *


def get_webpage_content(url) :
    if not url.startswith("http"):
        url = "https://" + url
    response = requests.get(url)
    if response.status_code != 200:
        raise Exception("Error while fetching the webpage")
    else :
        soup = BeautifulSoup(response.content, 'html.parser')
        text = soup.get_text()
    return text

def analyse_webpage(url) :
    #extract text from html page : 
    print("Fetching webpage content from : ", url)
    txt = get_webpage_content(url).strip()
    #analyse content of the page using LLM : 
    print("===================\n\nGPT-4o analysis of the project : \n")
    prompt = "This text is the presentation webpage of a crypto project. Please extract all the relevant information : "
    res = corcel_api_cortext_chat(role="assistant", prompt=prompt, content=txt)
    analysis = json.loads(res)[0]["choices"][0]["delta"]["content"]
    print(analysis)
    return analysis

def analyse_scamicity(content):
    print("===================\n\nGPT-4o scam estimation :\n")
    prompt = "You are an professional invester in crypto assets. Here is some data about a crypto project. Analyse if you think it is a scam or a real promising project, and end with a conclusion."
    res = corcel_api_cortext_chat(role="assistant", prompt=prompt, content=content)
    #print(res)
    #print(json.loads(res))
    analysis = json.loads(res)[0]["choices"][0]["delta"]["content"]
    print(analysis)
    return analysis

def analyse_scamicity_jugement(content) :
    print("===================\n\nGPT-4o scam judgement :\n")
    prompt = "Based on this analysis and the conclusion, answer with the most appropriate word whether the project is a scam or not : [Scam, Highly Probable, Probable, Unlikely, Not a scam, Unknown, Not enough data, Not relevant, Shitcoin]"
    res = corcel_api_cortext_chat(role="assistant", prompt=prompt, content=content)
    analysis = json.loads(res)[0]["choices"][0]["delta"]["content"]
    print(analysis)
    return analysis