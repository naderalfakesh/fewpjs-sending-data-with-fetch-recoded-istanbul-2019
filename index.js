// Add your code here
function submitData(name,email){
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name ,
    email
  })
};

fetch("http://localhost:3000/users", configObj)
.then(resp => resp.json())
.then(data => console.log(data))
.catch(err => console.log(error));
}
