const express = require('express');  //express imported
const app = express();             // an object of express created
const bodyParser = require('body-parser')   // body parser parses the body of request(the user data in it
app.use(bodyParser.json());                  //parses json in body
app.use(bodyParser.urlencoded({             // if you give data with url then it parses data there
             
    extended:true
}));
app.get('/random',function(req,res){
res.send(""+Math.floor(Math.random()*100));

})

app.post('/sayhello',function(req,res){
    res.send("hello"+req.body.username);
})

app.post('/mydata',function(req,res){

console.log("you entered:")
console.log(req.body.name)
console.log(req.body.age)
console.log(req.body.dept)


    res.json({                                  // sending a json response
        name:req.body.name,
         age:req.body.age,
         dep:req.body.dept

    })
})

app.listen(3000);
