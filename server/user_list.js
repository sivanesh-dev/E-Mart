const express=require("express");
const app=express();
const port = 10000;
let user=[   
     {"id":1,"name": "John","age": 30,"city": "New York"},
     {"id":2,"name": "Siva","age": 30,"city": "New York"},
]

app.get('/', (req, res) => {
    res.send(user);
});
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

app.post('/submit', (req, res) => {
    res.send(`Hello ${req.body.fname} ${req.body.lname}`);
});