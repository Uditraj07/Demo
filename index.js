let ul = document.createElement("ul");
let body = document.querySelector("body");
body.appendChild(ul);

function fun(event) {
  event.preventDefault();

  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let obj = {
    name: name,
    email: email,
    phone: phone
  };

  let resObj = JSON.stringify(obj);
  localStorage.setItem(email, resObj);

  let res = JSON.parse(localStorage.getItem(email));

  let li = document.createElement("li");
  let text = res.name + "-" + res.email + "-" + res.phone;
  let testnode = document.createTextNode(text);
  li.appendChild(testnode);
  ul.appendChild(li);
}
