const express = require('express');
require('dotenv').config();

const app = express();
const port = 4000;

const github = {
    "login": "MaheshKumarrG",
    "id": 174448123,
    "node_id": "U_kgDOCmXd-w",
    "avatar_url": "https://avatars.githubusercontent.com/u/174448123?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/MaheshKumarrG",
    "html_url": "https://github.com/MaheshKumarrG",
    "followers_url": "https://api.github.com/users/MaheshKumarrG/followers",
    "following_url": "https://api.github.com/users/MaheshKumarrG/following{/other_user}",
    "gists_url": "https://api.github.com/users/MaheshKumarrG/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/MaheshKumarrG/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/MaheshKumarrG/subscriptions",
    "organizations_url": "https://api.github.com/users/MaheshKumarrG/orgs",
    "repos_url": "https://api.github.com/users/MaheshKumarrG/repos",
    "events_url": "https://api.github.com/users/MaheshKumarrG/events{/privacy}",
    "received_events_url": "https://api.github.com/users/MaheshKumarrG/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2024-07-02T12:23:48Z",
    "updated_at": "2025-02-09T14:24:25Z"
}
app.get('/github', (req, res) => {
    res.json(github);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/login', (req, res) => {
    res.send('<h1>In login page</h1>')
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});