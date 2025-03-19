let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".newgame");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msg_container");


let turno=true;

const winningcond=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let player1=prompt("enter the first player  name");
let player2=prompt("enter the  second player  name");

const resetgame=()=>{
    turno=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgcontainer.classList.add("hide");
    }

}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if(turno){
            box.innerText="O"
            turno=false;
        }else{
            box.innerText="X"
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    })   
});

const showwinner=(winner) =>{
    if(winner==="O"){
        msg.innerText='congartulations!, '+ player1 +' won the game';
    }else{
        msg.innerText='congartulations!, '+ player2 +' won the game';
    }
    
    msgcontainer.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
}

const checkwinner = () => {
    for(let v of winningcond){
    
        let val1=boxes[v[0]].innerText;
        let val2=boxes[v[1]].innerText;
        let val3=boxes[v[2]].innerText;
        if(val1 !=""&&val2!=""&&val3!=""){

           
            if( val1===val2 && val2===val3){
    
                console.log("winner",val1);
                showwinner(val1);

            }

        }
    }

}
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);