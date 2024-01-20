use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Repo {
    pub name: String,
    pub description: Option<String>,
    pub html_url: String,
    pub language: Option<String>,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Owner {
    pub avatar_url: String,
    pub bio: String,
}
