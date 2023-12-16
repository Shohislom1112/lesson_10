const todosDiv = document.querySelector(".cards.album");
const spanHeading = document.querySelector(".heading1 span");

async function fetchTodos() {
  let id = JSON.parse(localStorage.getItem("userId"));
  spanHeading.innerHTML = id;
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/album");
    let data = await res.json();
    let filteredData = data.filter((al) => al.userId === id);
    displayTodos(filteredData);
  } catch (error) {
    console.log(error);
  }
}

fetchAlbum();

function displayAlbum(album) {
  let str = "";

  album.map((album) => {
    str += `
      <div class='card'>
        <h2>Title: ${album.title}</h2>
        
      </div>
    `;
  });

  albumDiv.innerHTML = str;
}
