const scoreContainer = document.querySelector('.score');
const startContainer = document.querySelector('.start');
const gameContainer = document.querySelector('.game');

function startGame(){
    startContainer.classList.add('hide');
}


startContainer.addEventListener('click', startGame);