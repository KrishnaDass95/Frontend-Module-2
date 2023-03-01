const scoreContainer = document.querySelector('.score');
const startContainer = document.querySelector('.start');
const gameContainer = document.querySelector('.game');

function startGame(){
    // hide the start container
    startContainer.classList.add('hide');

    // let's add a car now
    const car = document.createElement('div');
    car.setAttribute('class', 'car');

    // we need this car to be inside the game container
    gameContainer.appendChild(car);
}


startContainer.addEventListener('click', startGame);