let todo=[];
let req=prompt("Please enter your reqest");
while(true){
    if(req=="quite"){
           console.log("quitting");
           break;
    }else if(req=="list"){
        console.log("-------------");
        for(let i=0;i<=todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------");
    }else if(req=="add"){
        let task=prompt("enter your task to add in list");
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let idx=prompt("enter idx for delete");
        todo.splice(idx,1);
        console.log("task deleted")
    }else{
        console.log("please your choice from below items")
    }

req=prompt("Please enter your reqest");
}