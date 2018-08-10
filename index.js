const app = "I don't do much.";


fetch('https://api.github.com/user/repos').
  then(res => res.json()).
  then(json => console.log(json))

  const token = 'efbc7cd073365ce4de9b7a3c41f22e2e747e662e'
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
