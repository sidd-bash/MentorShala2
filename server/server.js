let express = require('express');
let app = express();
let mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.listen(5000,()=>{
    console.log('Server started at port 5000');
});


const mongoUrl = "mongodb+srv://bhardwajs20:freedomhasaprice@cluster0.kj0goph.mongodb.net/test"

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
}).then(()=>{
    console.log("Connected to database");
})
.catch((err)=>{console.log(e)});




app.post('/post',async (req,res)=>{
    console.log(req.body);
    const {data} = req.body;
    if(data=="Siddharth"){
        res.status(200).send({status:"ok"});
    }
});
require('./userDetails');

const User = mongoose.model('UserInfo');

app.post('/register',async(req,res)=>{
    const {uname,email,password} = req.body;
    try{
        await User.create({
            uname,
            email,
            password
        })
        res.status(200).send({status:"ok"});
    }
    catch(err){
        res.send({status:"error",error:err});
    }
});