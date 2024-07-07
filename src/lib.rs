//use near_sdk::json_types::U64;
use near_sdk::{env, near, AccountId, NearToken, PanicOnDefault, Promise};
use std::collections::*;
//const REQUIRED_GAS: Gas(10_000_000_000_000);

#[near(serializers = [json, borsh])]
#[derive(Clone)]

pub struct Contribution {
    pub contributor: AccountId,
    pub message: String,
    pub tag: String,
    pub impact: bool,
}

#[near(serializers = [json, borsh])]
#[derive(Clone)]
pub struct Project {
    pub tag: Option<String>,
    pub review: Option<String>,
    pub address: Option<String>,
    pub chain_id: Option<String>,
    pub contribution: Vec<Contribution>,
}

#[near(contract_state)]
#[derive(PanicOnDefault)]
pub struct Contract {
    pub hashmap: HashMap<String, Project>,
}

#[near]
impl Contract {
    
    #[private]
    #[init]
    pub fn init() -> Self {
        Self {
            hashmap: HashMap::new(),
        }
    }

    #[payable]
    pub fn insert_contribution(&mut self, key: String, msg: String, tag: String) {
        //Create an instance of contribution
        //let deposit = env::attached_deposit();

        let new_contribution = Contribution {
            contributor: env::predecessor_account_id(),
            message: msg,
            tag: tag,
            impact: true,
        };

        let old_project = self.hashmap.get(&key);
        match old_project {
            Some(old) => {
                let mut new_project = old.clone();
                new_project.contribution.push(new_contribution);
                self.hashmap.insert(key, new_project);
            },
            None => {
                let mut new_project = Project {
                    tag: None,
                    review: None,
                    address: None,
                    chain_id: None,
                    contribution: Vec::new(),
                };
                new_project.contribution.push(new_contribution);
                self.hashmap.insert(key, new_project);
            }
        }
    }

    #[private]
    pub fn update_project(&mut self, key:String, tag: String, review: String, address: String, chain_id: String)
    {
        let project = self.hashmap.get_mut(&key);

        match project {
            Some(n) => {
                n.tag = Some(tag);
                n.review = Some(review);
                n.address = Some(address);
                n.chain_id = Some(chain_id);
            },
            None => {},
        }
    }

    pub fn get_project(&self, key: String) -> Option<&Project> {
        let res = self.hashmap.get(&key);

        match res {
            Some(_n) => res,
            None => None
        }
    }

    pub fn get_contribution(&self, key: String) -> Option<&Vec<Contribution>> {
        let vec = self.hashmap.get(&key);
        let res : Option<&Vec<Contribution>>;

        match vec {
            Some(n) => res = Some(&(n.contribution)),
            None => res = None,
        }
        res
    }
}
