const scoreContainer = document.querySelector('.score');
const startContainer = document.querySelector('.start');
const gameContainer = document.querySelector('.game');

let carPosition = {
    x: 0, 
    y: 0
};

// to keep a track of what key the user has pressed, we can create a player object
let player = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowDown: false
};

function renderGame(milliseconds){ // the milliseconds here tells the time when it was called for the first time 
    const car = document.querySelector('.car')
    if(player.ArrowUp){
        carPosition.y += 5; 
    }
    if(player.ArrowDown){
        carPosition.y -= 5;
    }
    if(player.ArrowRight){
        carPosition.x -= 5;
    }
    if(player.ArrowLeft){
        carPosition.x += 5;
    }
    car.style.top = carPosition.y + 'px';
    car.style.left = carPosition.x + 'px';
    

    window.requestAnimationFrame(renderGame); // we want this animation to render infinitely using recurion until the game stops
}

function startGame(){
    // hide the start container
    startContainer.classList.add('hide');

    // let's add a car now
    const car = document.createElement('div');
    car.setAttribute('class', 'car');
    
    // we need this car to be inside the game container
    gameContainer.appendChild(car);

    // offset top tells the distance between the parent positioned element and same with the left.
    // this gives a reference of frame for us to use our keypad to control where it moves
    const carTop = car.offsetTop;
    const carLeft = car.offsetLeft;
    carPosition.x = carLeft;
    carPosition.y = carTop;

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

    window.requestAnimationFrame(renderGame);
}
function handleKeyUp(event){ // any event handler has an event object that has details about the event
    event.preventDefault(); // this is important because, the default value of a button in a browser can do something
    // to prevent the default action of the browser we can use the preventDefault function on the event.
    player[event.key] = true;
}
function handleKeyDown(event){
    event.preventDefault();
    player[event.key] = false;
}

document.addEventListener('keyup', handleKeyUp); // keyup is when any key is held down
document.addEventListener('keydown', handleKeyDown); // keydown is when a key is not held down
startContainer.addEventListener('click', startGame);