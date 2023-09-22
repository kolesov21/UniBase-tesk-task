async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  fillTable(posts);
}

function fillTable(posts){
  const table = document.querySelector('.table');
  const tbody = table.querySelector('tbody');
  
  posts.forEach(post => {
    const row = document.createElement('tr');

    const cellUserId = document.createElement('td');
    cellUserId.textContent = post.userId;
    row.appendChild(cellUserId);

    const cellId = document.createElement('td');
    cellId.textContent = post.id;
    row.appendChild(cellId);

    const cellTitle = document.createElement('td');
    cellTitle.textContent = post.title;
    row.appendChild(cellTitle);

    const cellBody = document.createElement('td');
    cellBody.textContent = post.body;
    row.appendChild(cellBody);

    tbody.appendChild(row);
  });
}

getPosts();