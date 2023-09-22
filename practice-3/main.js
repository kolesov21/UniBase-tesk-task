async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
}

function handlePromise(posts){
  posts.then((data) => {
    
    let filteredData = data;
    fillTable(filteredData);

    let sorted = false;
    let sortParameter = '';

    const table = document.querySelector('.table');
    const thead = table.querySelector('thead');

    thead.addEventListener('click', function(event){

      if (sortParameter !== event.target.id){
        sorted = false;
        sortParameter = event.target.id;
      }

      if (sortParameter === 'userId' || sortParameter ==='id'){
        if (!sorted){
          filteredData.sort((postA, postB) => postA[sortParameter] - postB[sortParameter]);
          sorted = true;
        }else{
          filteredData.sort((postA, postB) => postB[sortParameter] - postA[sortParameter]);
          sorted = false;
        }
      }else{
        if (!sorted){
          filteredData.sort((postA, postB) => (postA[sortParameter].localeCompare(postB[sortParameter])));
          sorted = true;
        }else{
          filteredData.sort((postA, postB) => (postB[sortParameter].localeCompare(postA[sortParameter])));
          sorted = false;
        }
      }
      fillTable(filteredData);
    })

    const search = document.querySelector('.input');

    search.addEventListener('input', function(){
      if (search.value.length >= 3){
        filteredData = data.filter(post => Object.values(post).some(val => val.toString().includes(search.value)));
        fillTable(filteredData);
      }else{
        filteredData = data;
        fillTable(filteredData);
      }
    });
  });
}

function fillTable(posts){
  const table = document.querySelector('.table');
  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';
  
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

handlePromise(getPosts());