// change the text content of something
var h1 = document.querySelector('h1')
h1.textContent = "Welcome to DOM manipulation";


// lets get the inner HTML
var HTML = document.querySelector('.container').innerHTML;
console.log(HTML);

// TASK - ADD A BUTTON TO CONTAINER DIV

// first get the container
var containerDiv = document.querySelector('.container');
console.log("containerDiv", containerDiv);

// now lets create a HTML element button which is a DOM object
var button = document.createElement('button'); // DOM object
button.textContent = "Click me";
button.style.color = "red";

// now let's add the  button the container div

containerDiv.appendChild(button);


// lets practice the above one more time
var containerPractice = document.querySelector('.container-practice');
var h3 = document.createElement('h3');
h3.textContent = "I am a H3 DOM Object";
containerPractice.appendChild(h3);

function addH3Text(parent, text){
    var element = document.createElement('h3');
    element.textContent = text;
    parent.appendChild(element);
}
addH3Text(containerPractice, "Hi Krishna");