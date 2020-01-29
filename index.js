// Add your code here
function submitData(name,email){
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: "nader",
    email: "nader@nader.com"
  })
};

fetch("http://localhost:3000/users", configObj);
}
