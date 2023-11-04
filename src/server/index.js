const app=require('express')();
const logger=require('../utils/logger');

app.use(logger);

app.get('/user/:userId/address',(req,res)=>{
    
    console.log("this is parameter",req.params);
    console.log("this is query parameter",req.query);
    console.log("this is body",req.body);
    res.send({
        userId:req.params.userId,
        message:"it will take the userId and we will take the address of the user"});
})
app.get('/user/:userId/group/:groupId/salary/:salaryId',(req,res)=>{
    
    console.log(req.headers);
    // console.log(req.header);
    res.send({
        userId:req.params.userId,
        groupId:req.params.groupId,
        message:"show the salary of a particular user of a specific group"});
})
app.get('/user/:userId/age/:age',(req,res)=>{
    
    console.log("this is the url part",req.url);
    res.send({
        userId:req.params.age,
        message:"show the age of the user"});
})
 app.get('/user/:userId/details/employee/:employeeId',(req,res)=>{
    
    console.log(req.cookies);
   res.send({
       userId:req.params.employeeId,
       message:"show the details of the user"});
})
app.get('/users',(req,res)=>{
    
    console.log(req.cookies);
   res.send({
       users:[
        {"0":{"name":"vivek"}},
        {"1":{"name":"vivek Raj "}},
        {"2":{"name":"vivek Srivastava"}},
        {"3":{"name":"ritik"}},
        {"4":{"name":"ritik raj"}}
    ]
       ,
       message:"show the details of the user"});
})

app.listen(8000,(req,res)=>{
    console.log("server is running on port 8000");
})





 

 
