const user={
    name:"Sivanesh",
    age:7
};

fetch("http://localhost:4041",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(user)
    
})
.then(response=>response.json())
.then(data=>console.log(data))
.then(err=>console.err(err));