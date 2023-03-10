// TODO

//1. create an array with an object
//1.5 need to post the content of the form into the table
//2. default behaviour should be that issued book status is not returned
//3. need a JS library to output current date and time
//4. The status of the book should be editable
//5. A JS function that changes status of the books to be returned or not
//6. Change color on the status basis

bookNameInputElement = document.querySelector('#book-name');
issuedToInputElement = document.querySelector('#issued-to');
buttonElement = document.querySelector('#btn');
tableElement = document.querySelector('#main-table');

var arr = [
    {id: 0, book_name: "", issued_to:"", issued_time:"",status:""}
] 

function getCurrentDate(){
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const hour = String(now.getHours() % 12 || 12).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const meridiem = now.getHours() >= 12 ? 'PM' : 'AM';

    const formattedDate = `${day}/${month}/${year} at ${hour}:${minutes} ${meridiem}`;
    return formattedDate;

}

// when clicked, take info and add to array, then post to table
function addIntoTable(obj){
    //create table row
    var tr = document.createElement('tr');
    tableElement.appendChild(tr);

    // first lets get the keys in an array
    var keys = Object.keys(obj);
    keys.forEach(function (key){
        var td = document.createElement('td');
        if(key == "status"){
            td.setAttribute('contenteditable', 'true');
        }
        td.textContent = obj[key];
        tr.appendChild(td);
    })


}

function addIntoArray(event){
    event.preventDefault();
    
    bookName = bookNameInputElement.value;
    issuedTo = issuedToInputElement.value;
    if(bookName && issuedTo){
        var currentBookID = arr[arr.length - 1].id;
        arr.push({
        id: currentBookID+1,
        book_name: bookName,
        issued_to: issuedTo,
        issued_time: getCurrentDate(),
        status: "Not Returned"
    });
        addIntoTable(arr[arr.length - 1]);
        bookNameInputElement.value = "";
        issuedToInputElement.value = "";
    }
}
buttonElement.addEventListener('click', addIntoArray);
