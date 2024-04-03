// Add your code here
function submitData(name,email){
const newdata =  {
    name:name,
    email:email
}
const configuredData ={
    method:'POST',
   headers:{
   "COntent-Type": "application/json","Accept":"application/json"
   },
   body: JSON.stringify(newdata)
};

return fetch("http://localhost:3000/users",configuredData)
    .then(res=>res.json())
    .then(data=>{
        document.body.innerHTML += `<p>User ID: ${data.id}</p>`;
    })
    .catch(function(error){
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
}
submitData("beuce","beuce@hotmail.com")