const express=require("express");
const cookieParser=require("cookie-parser");
const app=express();
app.use(cookieParser());


const port=3000;
 app.get('/',(req,res)=>{
   let numVisit=parseInt(req.cookies.numVisit)||0;
   const lastVisit=req.cookies.lastVisit||'this is the first time you are using the website';
   numVisit+=1;

   const date= new Date();
   const currentTime=date.toString();

   res.cookie('numVisit',numVisit,{maxAge:10000});
   res.cookie('lastVisit',currentTime,{maxAge:10000});

   if(numVisit===1){
     res.send(`<h1>Welcome to the website</h1><p>It is your first time that you are here.</p>`);
   }else{
     res.send(`<h1>Hello!</h1>
      <p>This is the ${numVisit} time that you are visiting my webpage.</p>
      <p>Last time you visited my webpage on: ${lastVisit}</p>`);
   }
 });
 app.listen(port,()=>{
   console.log(`Server is running on http://localhost:${port}`);
 });
