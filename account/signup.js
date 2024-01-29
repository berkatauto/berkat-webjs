import {API} from '../api/api.js';

function signup() {
  var fullname = document.getElementById("fullname").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var role = "user"

  var data = {
    fullname: fullname,
    username: username,
    password: password,
    role: role
  }
  fetch(API.signup, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => {
    return response.json()
  })
  .catch((error) => {
    console.log(error)
  })
}