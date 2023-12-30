const express = require('express')
const app = express()
require('dotenv').config()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const githubData = {
  "login": "SultanIndian007",
  "id": 96176706,
  "node_id": "U_kgDOBbuKQg",
  "avatar_url": "https://avatars.githubusercontent.com/u/96176706?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SultanIndian007",
  "html_url": "https://github.com/SultanIndian007",
  "followers_url": "https://api.github.com/users/SultanIndian007/followers",
  "following_url": "https://api.github.com/users/SultanIndian007/following{/other_user}",
  "gists_url": "https://api.github.com/users/SultanIndian007/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SultanIndian007/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SultanIndian007/subscriptions",
  "organizations_url": "https://api.github.com/users/SultanIndian007/orgs",
  "repos_url": "https://api.github.com/users/SultanIndian007/repos",
  "events_url": "https://api.github.com/users/SultanIndian007/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SultanIndian007/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Aman Tiwari",
  "company": "Thakur College of Engineering and Technology",
  "blog": "https://www.linkedin.com/in/aman-tiwari-603245200/",
  "location": "Mumbai, India",
  "email": null,
  "hireable": null,
  "bio": "Budding Full Stack Dev",
  "twitter_username": "Aman53736842",
  "public_repos": 24,
  "public_gists": 0,
  "followers": 4,
  "following": 20,
  "created_at": "2021-12-15T10:04:32Z",
  "updated_at": "2023-12-30T18:28:43Z"
  }


app.get('/github', (req,res) => {
  res.json(githubData)
})
app.get('/twitter',(req,res) =>{
    res.send('oopsie')
})

app.get('/login', (req,res) =>{
    res.send('<h1>login kr chomu</h1>')
})

app.get('/chai', (req,res) =>{
    res.send('<h2>youtube.com</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})