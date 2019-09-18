//this is my first game
var scores,roundScore,activePlayer;
scores=[0,0];
roundScore=0;
activePlayer=1;
var p='your Turn';
var x=0;
x=document.getElementById('score-1').value;
document.getElementById('score-1').value=0;
document.getElementById('current-score-1').value=0;
document.getElementById('score-2').value=0;
document.getElementById('current-score-2').value=0;
console.log(x);
function play(){
    //window.location.reload();
   var dice=Math.floor(Math.random()*6)+1;
   var diceDom=document.querySelector('.dice');
   diceDom.src='dice-'+dice+'.png';
   if(dice!==1)
   {
    roundScore +=dice;
    document.querySelector('#current-score-' + activePlayer).value=roundScore;
   }
else{
    //change player
    scores[activePlayer-1] +=roundScore;
    console.log("player-"+activePlayer +'==>'+scores[activePlayer-1]);
    if(scores[activePlayer-1]>='100'){
        console.log('congrets you won the match===player'+activePlayer);
        document.getElementById('win').innerHTML='Congrats Player '+ activePlayer +' won the match.';
        document.getElementById('play').disabled=true;
        scores=[0,0];
        roundScore=0;
    }
    document.querySelector('#score-' + activePlayer).value=scores[activePlayer-1];
    activePlayer === 1 ? activePlayer = 2 : activePlayer=1;
    roundScore=0;
    document.getElementById('current-score-1').value=0;
    document.getElementById('current-score-2').value=0;
    document.getElementById('1turn').classList.toggle('turn');
    document.getElementById('2turn').classList.toggle('turn');
}
}
function newGame(){
    window.location.reload();
}






