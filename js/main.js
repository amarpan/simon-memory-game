let compChoices = [];
let playerChoices = [];
let playerTurn = false;
let pushStatus = false;
let livesLeft = 3;

btnTry.addEventListener("click",tryAgain)

btnPink.addEventListener("click", function(){
    clickColor("hotpink", "btnPink", "pink", compChoices, playerChoices)
});

//btnGreen.addEventListener("click", clickGreen);
btnGreen.addEventListener("click", function(){
    clickColor("limegreen", "btnGreen", "green", compChoices, playerChoices)
});

//btnBlue.addEventListener("click", clickBlue);
btnBlue.addEventListener("click", function(){
    clickColor("aqua", "btnBlue", "blue", compChoices, playerChoices)
});

//btnYellow.addEventListener("click", clickYellow);
btnYellow.addEventListener("click", function(){
    clickColor("yellow", "btnYellow", "yellow", compChoices, playerChoices)
});

btnNext.addEventListener("click", nextLevel);

btnStart.addEventListener("click",init);

btnCheck.addEventListener("click",checkAnswer);

function clickColor(shade, btnName, color, compArr, playerArr){
    document.getElementById(btnName).style.backgroundColor = shade;
    setTimeout(function(){
        document.getElementById(btnName).style.backgroundColor = "black";
    },300);
    if(playerTurn){
        playerArr.push(shade);
        console.log("playerChoices:",playerChoices)
        let ol = document.querySelector("ol");
        let li = document.createElement("li");
        li.innerHTML = color;
        ol.appendChild(li);
    }else if(!playerTurn && pushStatus){
        compArr.push(shade);
        console.log("compChoices:",compChoices)
    }
}

// function clickPink(){
//     document.getElementById("btnPink").style.backgroundColor = "pink";
//     setTimeout(function(){
//         document.getElementById("btnPink").style.backgroundColor = "black";
//     },300);
//     if(playerTurn){
//         playerChoices.push("pink");
//         console.log("playerChoices:",playerChoices)
//         let ol = document.querySelector("ol");
//         let li = document.createElement("li");
//         li.innerHTML = "pink"
//         ol.appendChild(li);
//     }else if(!playerTurn && pushStatus){
//         compChoices.push("pink");
//         console.log("compChoices:",compChoices)
//     }
// }

// function clickGreen(){
//     document.getElementById("btnGreen").style.backgroundColor = "limegreen";
//     setTimeout(function(){
//         document.getElementById("btnGreen").style.backgroundColor = "black";
//     },300);
//     if(playerTurn){ //&& pushStatus){
//         playerChoices.push("green");
//         console.log("playerChoices:",playerChoices)
//         let ol = document.querySelector("ol");
//         let li = document.createElement("li");
//         li.innerHTML = "green"
//         ol.appendChild(li);
//     // }else if(playerTurn && !pushStatus){
//     //     console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"playerChoices:",playerChoices)
//     }else if(!playerTurn && pushStatus){
//         compChoices.push("green");
//         console.log("compChoices:",compChoices)
//     }//else if(!playerTurn && !pushStatus){
//       //  console.log("compChoices:",compChoices)
//     //}
// }

// function clickBlue(){
//     document.getElementById("btnBlue").style.backgroundColor = "aqua";
//     setTimeout(function(){
//         document.getElementById("btnBlue").style.backgroundColor = "black";
//     },300);
//     if(playerTurn){ //&& pushStatus){
//         playerChoices.push("blue");
//         console.log("playerChoices:",playerChoices)
//         let ol = document.querySelector("ol");
//         let li = document.createElement("li");
//         li.innerHTML = "blue"
//         ol.appendChild(li);
//     // }else if(playerTurn && !pushStatus){
//     //     console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"playerChoices:",playerChoices)
//     }else if(!playerTurn && pushStatus){
//         compChoices.push("blue");
//         console.log("compChoices:",compChoices)
//     }//else if(!playerTurn && !pushStatus){
//         //console.log("compChoices:",compChoices)
//     //}
// }

// function clickYellow(){
//     document.getElementById("btnYellow").style.backgroundColor = "yellow";
//     setTimeout(function(){
//         document.getElementById("btnYellow").style.backgroundColor = "black";
//     },300);
//     if(playerTurn){ //&& pushStatus){
//         playerChoices.push("yellow");
//         console.log("playerChoices:",playerChoices)
//         let ol = document.querySelector("ol");
//         let li = document.createElement("li");
//         li.innerHTML = "yellow"
//         ol.appendChild(li);
//     // }else if(playerTurn && !pushStatus){
//     //     console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"playerChoices:",playerChoices)
//     }else if(!playerTurn && pushStatus){
//         compChoices.push("yellow");
//         console.log("compChoices:",compChoices)
//     }//else if(!playerTurn && !pushStatus){
//        // console.log("compChoices:",compChoices)
//     //}
// }

function genRandColor(){
    //let colors = ["hotpink", "limegreen", "aqua", "yellow"];
    let rand = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    //console.log("Rand:",rand, colors[rand]);
    console.log("rand:",rand)
    return rand;
}

function addCompChoice(){
    let next = genRandColor();
    pushStatus = true;
        if(next === 0){
            clickColor("hotpink", "btnPink", "pink", compChoices, playerChoices);
        }else if(next === 1){
            clickColor("limegreen", "btnGreen", "green", compChoices, playerChoices);
        }else if(next === 2){
            clickColor("aqua", "btnBlue", "blue", compChoices, playerChoices);
        }else{
            clickColor("yellow", "btnYellow", "yellow", compChoices, playerChoices);
        }
    playerTurn = true;
    console.log("playerTurn:",playerTurn);
    let turn = document.querySelector("#turn");
    turn.textContent = "PLAYER'S TURN"
    turn.style.color = "limegreen"
    
}

function addPlayerChoice(){

}

function init(){
    compChoices = [];
    playerChoices = [];
    compTurn();
}

function changeTurn(){
    playerTurn = !playerTurn;
    console.log("playerTurn:",playerTurn);
}

// compChoices.forEach(function(color){
//     console.log("Color",color)
// })

function compTurn(){
    let delay = 1500;
    document.querySelector("#turn").innerHTML = "COMPUTER'S TURN"
    document.querySelector("#turn").style.color = "red";
    for(let i = 0; i < compChoices.length;i++){
        if(compChoices[i] === "hotpink"){
            //console.log("pushStatus:",pushStatus)
            setTimeout(function(){
                clickColor("hotpink","btnPink", "pink", compChoices, playerChoices)
            },delay)
        }
        else if(compChoices[i] === "limegreen"){
            setTimeout(function(){
                clickColor("limegreen","btnGreen", "green", compChoices, playerChoices)
            },delay)
        }
        else if(compChoices[i] === "aqua"){
            setTimeout(function(){
                clickColor("aqua","btnBlue", "blue", compChoices, playerChoices)
            },delay)
        }else{
            setTimeout(function(){
                clickColor("yellow","btnYellow", "yellow", compChoices, playerChoices)
            },delay)
        }
        //console.log("Delay:",delay);
        delay = delay + 750;
    }
    //pushStatus = true;
    //delay = delay + 750;
    setTimeout(addCompChoice,delay);
}
    

function checkAnswer(){
    for(let i = 0; i < compChoices.length; i++){
        if(compChoices.length !== playerChoices.length){
            console.log("Lengths of compChoices and playerChoices don't match")
            document.querySelector("#status").innerHTML = "Wrong answer! Click 'try again' to use another life";
            break;
        }else if(compChoices[i] !== playerChoices[i]){
            console.log("Wrong match at Index:",i);
            document.querySelector("#status").innerHTML = "Wrong answer! Click 'try again' to use another life";
            break;
        }
        else if(i === compChoices.length - 1 && compChoices[i] === playerChoices[i]){
            console.log("Correct!");
            document.querySelector("#status").innerHTML = "Correct! Nice job! Click 'Next Level' to move on";
        }
    }
    //document.querySelector("#status").innerHTML = "Correct! Nice job! Click 'Next Level' to move on";
}

function nextLevel(){
    clearStatus();
    playerChoices = []
    console.log(playerChoices);
    let turn = document.querySelector("#turn");
    turn.textContent = "COMPUTER'S TURN"
    turn.style.color = "red"
    document.querySelector("ol").remove()
    let li = document.createElement("ol");
    //li.innerHTML = "Current Selection:"
    let aside = document.querySelector("#selectionParent");
    aside.appendChild(li);
    pushStatus = false;
    changeTurn()
    compTurn()
    //changeTurn()
}

function tryAgain(){
    livesLeft = livesLeft - 1;
    document.querySelector("#left").innerHTML = livesLeft;
    clearStatus();
    playerChoices = []
    console.log("playerChoice:",playerChoices)
    document.querySelector("ol").remove()
    let li = document.createElement("ol");
    let aside = document.querySelector("#selectionParent");
    aside.appendChild(li);
}

function removeTest(){
        document.querySelector("ol").remove()
        let li = document.createElement("ol");
        li.innerHTML = "Current Selection:"
        let aside = document.querySelector("aside");
        aside.appendChild(li);

    //document.querySelector("li").innerHTML = "";
}

function clearStatus(){
    document.querySelector("#status").innerHTML = "";
}