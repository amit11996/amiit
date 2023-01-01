const express = require ('express');
const app =express();

const port=3000;

app.get('/', (req,res)=>{

    res.send("<h1>hello world</h1><h1>my name is amit</h1>")
});
app.listen(port);