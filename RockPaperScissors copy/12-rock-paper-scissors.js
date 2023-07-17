const score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    loss: 0,
    tie: 0
 };

  updateScoreElement();

  let isAutoPlaying = false;
  let intervalId;
 

   function autoPlay(){
      if(!isAutoPlaying){
     intervalId =  setInterval (function(){
         const playerMove =  pickComputerMover();
         playeGame(playerMove);
      },1000);
      isAutoPlaying = true;
     }
     else{
      clearInterval(intervalId);
      isAutoPlaying = false;
  }
 

  }
  
  
 function pickComputerMover() {
    const randomNumber = Math.random();
    let comuterMove = '';
    if (randomNumber > 0 && randomNumber < 1 / 3) {
       comuterMove = 'Rock';
    } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
       comuterMove = 'Paper';
    }
    else if (randomNumber > 2 / 3 && randomNumber < 1) {
       comuterMove = 'Scissors';
    }
    return comuterMove;
 }



 function playeGame(playerMove) {

    const comuterMove = pickComputerMover();
    let result = '';

    if (playerMove === 'Rock') {
       if (comuterMove === 'Rock') {
          result = 'Tie';
       } else if (comuterMove === 'Paper') {
          result = 'You Loss';
       } else if (comuterMove === 'Scissors') {
          result = 'You Win';
       }
    }
    else if (playerMove === 'Paper') {

       if (comuterMove === 'Rock') {
          result = 'You Win';
       } else if (comuterMove === 'Paper') {
          result = 'Tie';
       } else if (comuterMove === 'Scissors') {
          result = 'You Loss';
       }
    }
    else if (playerMove === 'Scissors') {
       if (comuterMove === 'Rock') {
          result = 'You Loss';
       } else if (comuterMove === 'Paper') {
          result = 'You Win';
       } else if (comuterMove === 'Scissors') {
          result = 'Tie';
       }
    }
    if (result === 'You Win') {

       score.win += 1;
    }
    else if (result === 'You Loss') {
       score.loss += 1;
    }
    else if (result === 'Tie') {
       score.tie += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    
   document.querySelector('.js-result').innerHTML = result;

   document.querySelector('.js-moves').innerHTML = 
    
   `You
    <img src="image/${playerMove}-emoji.png" class="move-icon" alt="">
    <img src="image/${comuterMove}-emoji.png" class="move-icon" alt="">
    Computer`;
    
 }

 function updateScoreElement(){
   document.querySelector('.js-score')
   .innerHTML = `Loss :${score.loss} - Win : ${score.win} - Tie : ${score.tie}`;

 }