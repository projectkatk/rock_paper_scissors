var canvas = document.getElementById('confetti');
var jsConfetti = new JSConfetti({ canvas });
var body = document.querySelector('body');
var player = document.querySelector('.player img');
var bot = document.querySelector('.bot img');
var button = document.querySelector('button');

var playerScore = 0;
var botScore = 0;

var choice = {
  1: 'Rock',
  2: 'Paper',
  3: 'Scissors'
};

button.addEventListener('click', () => {
  startGame();
})

var reset = function() {
  location.reload();
}

var chosen = function (playerAnswer, botAnswer) {
  if (playerAnswer === botAnswer) {
    console.log(playerAnswer, botAnswer)
    alert(`Draw!!! 😏  You: ${choice[playerAnswer]}, Bot: ${choice[botAnswer]}`)
    startGame();
  } else {
    if((playerAnswer - botAnswer === 1) || (playerAnswer - botAnswer === -2)) {
      playerScore++;
      if(playerScore === 2) {
        alert(`You won the set!!! Congrats!! 🎉🎉 
        Your Score: ${playerScore}, Bot Score: ${botScore}
        You: ${choice[playerAnswer]}, Bot: ${choice[botAnswer]}`)
        player.style.transform = 'scale(4) translateX(25%) translateY(10%)';
        player.style.zIndex = '1';
        bot.style.zIndex = '0';        
        if(!jsConfetti.addConfetti()) jsConfetti.addConfetti();
        setTimeout(() => {
          confirm();
        }, 3000);
      } else {
        alert(`You Win! 
        You Score: ${playerScore}, Bot Score: ${botScore}
        You: ${choice[playerAnswer]}, Bot: ${choice[botAnswer]}`);
        startGame();
      }
    } else if((botAnswer - playerAnswer === 1) || (botAnswer - playerAnswer === -2)) {
      botScore++;
      if(botScore === 2) {
        alert(`Bot won the set!! 😭😭 
        Your Score: ${playerScore}, Bot Score: ${botScore}
        You: ${choice[playerAnswer]}, Bot: ${choice[botAnswer]}`);
        bot.style.transform = 'scale(4) translateX(-25%) translateY(10%)';
        bot.style.zIndex = '1';
        player.style.zIndex = '0';
        if(!jsConfetti.addConfetti()) jsConfetti.addConfetti();
        setTimeout(() => {
          confirm();
        }, 3000);
        
      } else {
        alert(`Bot Wins! 
        Bot Score: ${botScore}, Your Score: ${playerScore}
        You: ${choice[playerAnswer]}, Bot: ${choice[botAnswer]}`)
        startGame();
      }      
    }      
  }
}
var startGame = function() {
  var playerAnswer = parseInt(prompt('Type in 1 for Rock, 2 for Paper, 3 for Scissors.'));
  var botAnswer = Math.floor(Math.random()*3 + 1);  
  bot.style.transform = 'scale(1)';
  player.style.transform = 'scale(1)';

  if(playerAnswer === null || isNaN(playerAnswer) || playerAnswer === undefined || playerAnswer > 3) {
    alert("Enter the correct answer!!!!! 1 for Rock, 2 for Paper, and 3 for Scissors!!!!!");
    startGame();
  } else {
    chosen(playerAnswer, botAnswer);
  }
}

var confirm = function() {
  var askToPlayAgain = prompt('Play Again? 1 for Yes, 2 for No');
  if(askToPlayAgain === "1") {
    playerScore = 0;
    botScore = 0;
    bot.style.transform = 'scale(1) translateX(0) translateY(0)';
    player.style.transform = 'scale(1) translateX(0) translateY(0)';
    setTimeout(() => {      
      startGame();
    }, 100);
  } else {
    reset();
  }
}