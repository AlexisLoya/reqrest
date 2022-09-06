const url = "https://reqres.in/api/";
fetch(url + "users?page=1")
  .then((response) => response.json())
  .then((userList) => {
    userList.data.forEach((user) => {
      let card = document.getElementById("cards");
      card.innerHTML += `
      <div class="col-md-3 col-12 col-sm-6 mt-4" style="width: 18rem">
      <img
      src='${user.avatar}'
      class="card-img-top"
      alt="user image"
    />
    <div class="card-body border">
      <h4 class="card-title">${user.first_name}</h4>
      <h5 class="card-title">${user.last_name}</h5>
      <p class="card-text">${user.email}</p>
    </div>
        </div>
   
    `;
    });
  })
  .catch((err) => console.log(err));

async function saveUser() {
  const urlPost = url + "register";
  const data = {
    email: "eve.holt@reqres.in",
    password: "pistol",
  };
  const response = await fetch(urlPost, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((user) => {
      console.log(user.id);
      alert(`User Added\nUser token: ${user.token}`)
    });
}
