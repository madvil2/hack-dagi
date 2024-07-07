# Backend of dAGI House Hackathon Web3 detector

This directory contains the code of the backend server for our Hackthon project. 
It should be run indepently from the rest of the repositories. 

### Configuration 
Create a `.env` file. Add the following private keys : 

```python
CHAINBASE_API_KEY = "your-chainbase-api-key" #premium plan recommended (> 2 calls per second)
CORCEL_API_KEY = "your-corcel-api-key"

NEAR_TESTNET_PRIVATE_KEY = "ed25519:near_testnet_api_key" 
```

#### Create a Virtual Environment
Set up a virtual environment to manage dependencies:
```
python -m venv venv 
```

Activate the virtual environment:
```bash
source venv/bin/activate
```



#### Install the required librairies

```bash
pip install -r requirements.txt
```

### Run the server

Run the Flask app using the following command:


```
python backend.py
```
You should see output indicating that the server is running, such as:

```
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: xxx-xxx-xxx
```

### Network configuration
Do the appropriate adaptation to make it accessible from the Internet if you don't want the app to run from `localhost`. 