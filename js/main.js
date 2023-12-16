const usersDiv = document.querySelector(".cards.users");

async function fetchUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    displayUsers(data);
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();

function displayUsers(users) {
  let str = "";

  users.map((user) => {
    str += `
      <div class='card'>
      <p>Email: ${user.email}</p>
      <p>Web-site: ${user.website}</h2>
      <p>Address: ${user.address}</p>
      <p>Phone: ${user.phone}</p>
      <a href="/pages/posts.html" onclick="getTodos(${user.id})">Posts</a>
      <a href="/pages/todos.html" onclick="getTodos(${user.id})">Todos</a>
      <a href="/pages/album.html" onclick="getTodos(${user.id})">Album</a>
        
      </div>
    `;
  });

  usersDiv.innerHTML = str;
}

function getTodos(id) {
  localStorage.setItem("userId", JSON.stringify(id));
}
