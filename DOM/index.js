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

// EVENT LISTENERS
// we can listen to events as users interact with our site
// first get the element you want to listen to
var alertButton = document.querySelector('.alert');

// lets add a function that shows a prompt when its clicked
function alertPrompt(){
    alert("Here's your alert");
}

// now lets add an event listener to the button
// the event listener takes two functions, what event you are listening to
// then you can show a prompt
alertButton.addEventListener('click', alertPrompt); // we don't use () brackets in the alertPrompt function here because, we don't have to call the function ourself, JS will call it directly


// Q->  adding an element in between
// the syntax is parent.insertBefore(child)

//get the parent and child element first
var parentElement = document.getElementById('middle');
var child = document.getElementById('div1'); // to be inserted before which element

// lets create an element
var spanCreation = document.createElement('span');
spanCreation.textContent = "I am a DOM created Span";

// now lets add the child in between using 
parentElement.insertBefore(spanCreation, child);