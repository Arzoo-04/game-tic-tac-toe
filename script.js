let music = new Audio("failure.wav")
let audioturn = new Audio("click.wav")
let over = new Audio("gameOver.wav")
let turn = "X"
let gameOver = false
const changeTurn = ()=>{
    return turn==="X"?"0":"X"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 0, 51, 0],
        [3, 4, 5, 0, 61, 0],
        [6, 7, 8, 0, 71, 0],
        [0, 3, 6, -10, 61, 90],
        [1, 4, 7, 0, 61, 90],
        [2, 5, 8, 10, 61, 90],
        [0, 4, 8, 0, 61, 45],
        [2, 4, 6, 0, 61, 135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== ''){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            gameOver = true;
            over.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            // document.querySelector('.line').style.transform = `translate( ${e[3]}vw, ${e[4]}vw) rotate( ${e[5]}deg)`
            // document.querySelector('.line').style.width = '30vw';
        }
    })
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

let reset = document.getElementById('reset');
reset.addEventListener("click", ()=>{
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
        turn = "X"
        gameOver = false
        // document.querySelector('.line').style.width = '0vw';
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

    })
})