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

fetch("http://localhost:3000/users", configObj);
}
submitData(name,email)
