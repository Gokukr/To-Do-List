const express=require("express");
const parser=require("body-parser");
const app=express();

var new_tasks=["wakeup","clg","home","repeat"];


app.set('view engine','ejs');
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('public'));




app.get("/",function(req,res)
{
    //res.send("hello there!");
    var today=new Date();
    
    var ans={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-UK",ans);
    
    
    res.render('list',{daytype:day,nexttask:new_tasks});
    //console.log(daytype);

    
    
});
app.post("/",function(req,res)
{
    //res.sendFile(__dirname+"/views/list.ejs");
    var new_task=req.body.newtask;
    new_tasks.push(new_task);
    res.redirect("/");
    
})






app.listen("5500",function(req,res)
{
    console.log("the server is running");
})