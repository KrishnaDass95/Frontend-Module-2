const scoreContainer = document.querySelector('.score');
const startContainer = document.querySelector('.start');
const gameContainer = document.querySelector('.game');
const scoreDiv = document.createElement('div');
scoreContainer.appendChild(scoreDiv);
let score = 0;

let carPosition = {
    x: 0, 
    y: 0,
    speed: 10,
};

// to keep a track of what key the user has pressed, we can create a player object
let player = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};


function animateLines(){
    // get the line
    let lines = document.querySelectorAll('.line');
    console.log(lines);
    lines.forEach(line => {
        let top = line.offsetTop;
        if(line.offsetTop > 600){
            top = 0;
        }
        line.style.top = top + 20 + 'px';
    })
}

function renderGame(currentTime){ // the milliseconds here tells the time when it was called for the first time 
    animateLines();
    score++;
    scoreDiv.textContent = `Score: ${score}`;
    const car = document.querySelector('.car');
    const box = gameContainer.getBoundingClientRect(); // this function returns the dimensions of the game container box
    if(player.ArrowUp && carPosition.y > box.top - 150){
        carPosition.y -= carPosition.speed; 
        console.log(carPosition.y);
    }
    if(player.ArrowDown && carPosition.y < box.bottom-270){
        carPosition.y += carPosition.speed;
        // console.log(carPosition.y);
    }
    if(player.ArrowRight && carPosition.x < box.left - 40){
        carPosition.x += carPosition.speed;
    }
    if(player.ArrowLeft && carPosition.x > 0){
        carPosition.x -= carPosition.speed;
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
    console.log('carTop', carTop);
    console.log('carLeft', carLeft);

    // next we need to add the road-divider lines
    // at any given point, there are 4 lines present
    let top = 0;
    for(let i = 0; i < 4; i++){
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.top = top + 'px';
        gameContainer.appendChild(line);
        top += 120;
    }
    for(let i = 0; i < 3; i++){
        let enemy = document.createElement('div');
        enemy.classList.add('enemy');
        enemy.style.top = Math.floor((Math.random() * 400)) + 'px';
        enemy.style.left = Math.floor((Math.random() * 400)) + 'px';
        gameContainer.appendChild(enemy);
        // we need to drop the enemy downx
        let enemies = document.querySelectorAll('.enemy');
        enemies.forEach(enemyCar => {
            enemyCar.style.top += 10;
        })
    }
    

    window.requestAnimationFrame(renderGame);

    
}
function handleKeyUp(event){ // any event handler has an event object that has details about the event
    event.preventDefault(); // this is important because, the default value of a button in a browser can do something
    // to prevent the default action of the browser we can use the preventDefault function on the event.
    player[event.key] = false;
}
function handleKeyDown(event){
    event.preventDefault();
    player[event.key] = true;
}


// all event listeners below
document.addEventListener('keyup', handleKeyUp); // keyup is when a pressed key is released
document.addEventListener('keydown', handleKeyDown); // keydown is first pressed down
startContainer.addEventListener('click', startGame);