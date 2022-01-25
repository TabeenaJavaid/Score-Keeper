const p1={
    score: 0,
    button:document.querySelector("#p1Button"),
    display:document.querySelector("#p1Display")
}

const p2 ={
    score:0,
    button:document.querySelector("#p2Button"),
    display:document.querySelector("#p2Display")
}





const resetbtn =document.querySelector("#reset");
let winningScoreSelect =document.querySelector("#winningScoreSelect")
let winningScore=3;
let isGameOver =false;


function scoreUpdates(player,opponent){
    if (!isGameOver){
        player.score+=1;
        if(player.score === winningScore){
            isGameOver=true;
            player.button.disabled=true;
           opponent.button.disabled=true
           player.display.classList.add("has-text-success");
           opponent.display.classList.add("has-text-danger")
    
        }
        
    player.display.textContent =player.score;
        }
    }






p1.button.addEventListener("click", function(){
  scoreUpdates(p1,p2)
})


p2.button.addEventListener("click", function(){
    scoreUpdates(p2,p1)
})





winningScoreSelect.addEventListener("change",function(){
    winningScore =parseInt(this.value);
    reset();
})

resetbtn.addEventListener("click",reset)


function reset(){
    isGameOver=0
    for(let p of [p1,p2]){
        p.score=0;
        p.display.textContent=0
        p.button.disabled =false;
        p.display.classList.remove("has-text-success","has-text-danger");
    }
}
