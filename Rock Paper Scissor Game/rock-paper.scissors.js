let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

updateScoreElement();

/*
if(!score){
  score = {
    wins: 0,
    loses: 0,
    ties: 0
  };
}
*/
function playGame(playerMove){
  const computerMove = pickComputeMove();

  let result = ''; 

  if(playerMove === 'scissors'){
    if(computerMove === 'rock'){
      result = 'you lose.';
    }
    else if(computerMove === 'paper'){
      result = 'you win.'
    }
    else if(computerMove === 'scissors'){
      result = 'tie.';
    } 
  }
  
  else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
      result = 'you win.';
    }
    else if(computerMove === 'paper'){
      result = 'tie.';
    }
    else if(computerMove === 'scissors'){
      result = 'you lose.';
    }
  }

  else if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      result = 'tie.';
    }
    else if(computerMove === 'paper'){
      result = 'you lose.'
    }
    else if(computerMove === 'scissors'){
      result = 'you win.';
    }
  }

  if(result === 'you win.'){
    score.wins++;
  }
  else if(result === 'you lose.'){
    score.loses++;
  }
  else if(result === 'tie.'){
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  
  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `you 
  <img class="move-icon" src="images/${playerMove}-emoji.png">
  <img class="move-icon" src="images/${computerMove}-emoji.png">
   Computer`;

}

function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`;
}
function updateResult(){
  document.querySelector('.js-result')
    .innerHTML = result;
}

function pickComputeMove(){
  const randomNumber = Math.random();

  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  }
  else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors';
  }

  return computerMove;
}