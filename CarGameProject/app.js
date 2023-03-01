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

    // next we need to add the road-divider lines
    // at any given point, there are 4 lines present
    let top = 0;
    for(let i = 0; i < 4; i++){
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.top = top + 'px';
        gameContainer.appendChild(line);
        top += 150;
    }
}


startContainer.addEventListener('click', startGame);