import subprocess, sys

from dotenv import load_dotenv
import os

load_dotenv()
galadriel_agent_address = os.getenv("QUICKSTART_CONTRACT_ADDRESS")
command = "export QUICKSTART_CONTRACT_ADDRESS="+galadriel_agent_address

def call_galadriel_contract():
    command = "npm run simpleChat"
    subprocess.run(command, shell=True, executable="/bin/bash")

