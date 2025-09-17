const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

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

let allChat=[
    {
    from:"rotit",
    to:"shetty",
    msg:"i want to make indias most thriler film",
    created_at: new Date()
    },
    {
    from:"shrada",
    to:"ragni",
    msg:"can you teach me js",
    created_at: new Date()
    },{
    from:"kanhaiyan",
    to:"hrendra",
    msg:"bro can you give your bike",
    created_at: new Date()
    },{
    from:"ashish",
    to:"akash",
    msg:"hoes to study going",
    created_at: new Date()
    },{
    from:"kritika",
    to:"eve",
    msg:"where are you",
    created_at: new Date()
    },{
    from:"ajay",
    to:"rahul",
    msg:"you didnt give my money back",
    created_at: new Date()
    },
]
Chat.insertMany(allChat)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});