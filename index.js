const express=require("express");
const app= express();
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//connection
main()
.then(()=>{
    console.log("connection succes");
})
.catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//all chats
app.get("/chats", async(req,res)=>{
    let chats= await Chat.find();
    res.render("allChats.ejs", { chats});
})

//new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})
//create route
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat= new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date()
    });
    newChat.save()
    .then(()=>{
        console.log("new chat added");
    })
    .catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats")
})

//edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chat= await Chat.findById(id);
    res.render("edit.ejs",{ chat});
})
//update route
app.put("/chats/:id",async(req,res)=>{
       let {id}=req.params;
       let {msg:newmsg}=req.body;
       let updatedmsg=  await Chat.findByIdAndUpdate(id,{msg:newmsg},{runValidator:true, new: true});
       console.log(updatedmsg);
       res.redirect("/chats");
})

//delete route
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})

app.listen(8080,()=>{
    console.log("server listen on poar 8080");
})
//shema
// const userSchema= new mongoose.Schema({
//     name:String,
//     email:String,
//     age:Number,
// });

//model
// const User= mongoose.model("User", userSchema);

//delete
// User.findOneAndDelete({name:"pawan"})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOneAndUpdate({name:"Aman"},{age:25},{new:true})
// .then((res)=>{
//     console.log(res.name);
// })
// .catch((err)=>{
//     console.log(err);
// });

//update
// User.updateMany({age:{$gte:21}},{age:20})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// User.updateOne({age:{$gt:23}},{age:20})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


//find
// User.findById("68c998bd549a924e72d7627e")
// .then((res)=>{
//     console.log(res);
// });
// User.find({age:{$gt:22}})
// .then((res)=>{
//     console.log(res);
// });
// User.find({})
// .then((res)=>{
//     console.log(res);
// });
// User.find({age:{$gt:22}})
// .then((res)=>{
//     console.log(res);
// });

//insert many
// User.insertMany([
//     {name:"pawan",email:"pawan@yahoo.com",age:22},
//     {name:"harendra",email:"harendra@gmail.com",age:25},
//     {name:"kanhaiyan",email:"Ashish@yahoo.com",age:20},
// ]).then((res)=>{
//     console.log(res);
// });

//insert one
// const user1= new User({
//     name:"Aman",
//     email:"aman@gmail.com",
//     age:21,
// });
// const user2= new User({
//     name:"ashish",
//     email:"ashish@gmail.com",
//     age:23,
// });
// user2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });