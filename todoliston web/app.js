let btn=document.querySelector("button");
let ipt=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=ipt.value;
    ul.appendChild(item);

    let dltbtn=document.createElement("button");
    dltbtn.innerText="delete";
    dltbtn.classList.add("delete");
    item.appendChild(dltbtn);
    ipt.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let item=event.target.parentElement;
        item.remove();
        console.log("Deleted")
    }
})
