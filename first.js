let boxes = document.querySelectorAll(".box");
let wins = document.querySelector(".winner");
let reset = document.querySelector("#reset");
let turn = 0;

//winning patterns.
const patterns = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

//Printing X & O on boxes when clicked on it.
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if( turn%2 === 0)
        {
            box.innerText = "O";
            box.style.fontSize = '50px';
            turn++;
        }

        else
        {
            box.innerText = "X";
            box.style.fontSize = '50px';
            turn++;
        }
        box.disabled = true;
        tie();
        checkWinner();
    })
})

//Checking for winner.
function checkWinner()
{
    for( let pattern of patterns)
    {
        let value0 = boxes[pattern[0]].innerText;
        let value1 = boxes[pattern[1]].innerText;
        let value2 = boxes[pattern[2]].innerText;

        if(value0 != "" && value1 != "" && value2 != "")
        {
            if( value0 == value1 && value1 == value2)
            {
                if(value0 == "O")
                {
                    wins.innerText = "Congrats! Player-1 Wins!";
                }
                else
                {
                    wins.innerText = "Congrats! Player-2 Wins!";
                }
                disable();
            }
        }
    }
}

//Disabling the boxes after one player wins 
const disable = () =>{
    for( let box of boxes)
    {
        box.disabled = true;
    }
}

//Checking for Tie
const tie = () =>{
    for( let box of boxes)
    {
        if( box.innerText == "")
        {
            return;
        }
    }
    wins.innerText = "It's a Tie!";
}

//Resetting the game
reset.addEventListener("click", () =>{
    turn = 0;
    wins.innerText = "";
    for( let box of boxes)
    {
        box.innerText = "";
        box.disabled = false;
    }
})