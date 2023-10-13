fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => console.log(JSON.stringify(data)));