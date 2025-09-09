let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["yello","red","green","purple"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game start");
        started=true;
    }
    levelup();
})

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}
function levelup(){
    userseq=[];

    level++;
    h2.innerText=`Level ${level}`;
     let randidx=Math.floor(Math.random()*3);
     let randcol=btns[randidx];
     let randbtn=document.querySelector(`.${randcol}`);
     gameseq.push(randcol);
     console.log(gameseq);
    gameflash(randbtn);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}

function checkAns(idx){
    if(gameseq[idx]===userseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game over! your score is <b>${level}</b><br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor="white"; 
        },150);
        reset();
    }
}
function btnpress(){
    // console.log(this);
     let btn=this;
     userflash(btn);
     let usercol=btn.getAttribute("id");
     userseq.push(usercol);
    //  console.log(usercol);

     checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started==false;
    level=0;
    gameseq=[];
    userseq=[];
}