const express=require('express');
const app=express();
const port = 2200

app.use((req,res,next)=>{
    console.log('hi from middleware')
    next()
})



const workinTime = new Date();
const h=workinTime.getHours();

const workinDays = new Date();
const d=workinDays.getDay();


const midDate = function (req,res,next){
    console.log("req received at " + workinTime + h)
    console.log(" req received at " + workinDays + d )
    if (h>=5&&h<=17 && d>=0&&d<6 ) {
        return res.sendFile(__dirname+'/Home.html')
    } else {
        return res.send('The web application is only available during working hours (Monday to Friday,  from 9 to 17).')
    }
    
        next()
}
app.use("/reqTime",midDate)



app.get('/Home',(req,res)=>{
    res.sendFile(__dirname+'/Home.html')
})

app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname+'/Contact.html')
})

app.get('/Services',(req,res)=>{
    res.sendFile(__dirname+'/Services.html')
})









app.listen(port,(err)=>err?console.log(err):console.log(`server is running on ${port}`));