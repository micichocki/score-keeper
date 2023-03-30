let p1 = document.querySelector(".player-1");
let p2 = document.querySelector(".player-2");
let reset = document.querySelector(".reset");

let p1score = document.querySelector(".player-1-score");
let p2score = document.querySelector(".player-2-score");

let winningNumber = document.querySelector(".winningNumber");
let winningValue=3;

let dropdownItems = document.querySelectorAll(".dropdown-item");
let dropdownButton = document.querySelector(".dropdown-toggle");

for(let dropItem of dropdownItems){
    dropItem.addEventListener("click",function(e){
       
        e.preventDefault();
        newWinningValue=parseInt(dropItem.innerText);
        winningNumber.innerText=newWinningValue;
        winningValue=newWinningValue;
       
    })
}

function p1ClickEvent(event) {
    event.preventDefault();
    let currentScore = parseInt(p1score.innerText);
    currentScore += 1;
    p1score.innerText = currentScore;
    if (currentScore >= winningValue) {
      p1score.classList.toggle("winner-color");
      p2score.classList.toggle("loser-color");
      afterWinning();
    }
    dropdownButton.classList.add("disabled");
  }
  
  function p2ClickEvent(event) {
    event.preventDefault();
    let currentScore = parseInt(p2score.innerText);
    currentScore += 1;
    p2score.innerText = currentScore;
    if (currentScore >= winningValue ) {
      p2score.classList.toggle("winner-color");
      p1score.classList.toggle("loser-color");
      afterWinning();
    }
    dropdownButton.classList.add("disabled");

  }

function afterWinning(){
    p1.classList.toggle("disabled");
    p2.classList.toggle("disabled");
    p1.removeEventListener("click",p1ClickEvent);
    p2.removeEventListener("click",p2ClickEvent);
}

p1.addEventListener("click",p1ClickEvent);
p2.addEventListener("click",p2ClickEvent);

reset.addEventListener("click",function(e){
    p1score.innerText="0";
    p2score.innerText="0";
    p1score.classList.remove("winner-color","loser-color");
    p2score.classList.remove("winner-color","loser-color");
    p1.classList.remove("disabled");
    p2.classList.remove("disabled");
    dropdownButton.classList.remove("disabled");
    
    p1.addEventListener("click",p1ClickEvent);
    p2.addEventListener("click",p2ClickEvent);  
})

