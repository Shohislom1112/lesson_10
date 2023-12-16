const todosDiv = document.querySelector(".cards.posts");
const spanHeading = document.querySelector(".heading1 span");

async function fetchPosts() {
  let id = JSON.parse(localStorage.getItem("userId"));
  spanHeading.innerHTML = id;
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    let filteredData = data.filter((ps) => ps.userId === id);
    displayPosts(filteredData);
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();

function fetchPosts(posts) {
  let str = "";

  posts.map((posts) => {
    str += `
      <div class='card-t'>
        <p>Title: ${posts.title}</p>
        <p>Body: ${posts.body} </p>
      </div>
    `;
  });

  postsDiv.innerHTML = str;
}
