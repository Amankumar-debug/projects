let btn=document.querySelector("button");
let ipt=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=ipt.value;
    ul.appendChild(item);

    // Create done button
    let donebtn=document.createElement("button");
    donebtn.innerText="done";
    donebtn.classList.add("done-btn");
    item.appendChild(donebtn);

    // Create delete button
    let dltbtn=document.createElement("button");
    dltbtn.innerText="delete";
    dltbtn.classList.add("delete");
    item.appendChild(dltbtn);
    ipt.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.classList.contains("done-btn")){
        // Mark as done - toggle the done class
        let item=event.target.parentElement;
        item.classList.toggle("done");
        console.log("Marked as done")
    } else if(event.target.classList.contains("delete")){
        // Delete the task
        let item=event.target.parentElement;
        item.remove();
        console.log("Deleted")
    }
})
