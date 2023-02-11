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

// now lets create a button which is a DOM object
var button = document.createElement('button'); // DOM object
button.textContent = "Click me";

// now let's add the  button the container div

containerDiv.appendChild(button);


