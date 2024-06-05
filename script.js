let boxes = document.querySelectorAll(".box");
let reset = document.getElementsByClassName("reset");
let win = document.querySelectorAll(".win");
let count = 0;

let turnO = true;

let winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () => {
    for(let pattern of winningPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if (pos1Val === pos2Val && pos1Val === pos3Val){
                disabledBoxes();
                win.forEach((win) => {
                    win.innerText = `Player ${pos1Val} wins!`;
                });
                return;
            }
        }
    }
    
    if (count === 9) {
        win.forEach((win) => {
            win.innerText = `Draw`;
        });
    }
};


const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    win.forEach((win)=>{
        win.innerText = "";
    });
}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            turnO=false;
            box.innerHTML = "X";
            box.classList.add("red");
        }else{
            turnO=true;
            box.innerHTML = "O";
            box.classList.add("blue");
        }
        box.disabled = true;
        count = count+1;
        console.log(count);
        checkWinner();
    });
});

reset[0].addEventListener("click",resetGame);