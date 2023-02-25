const addRowBtn = document.querySelector('#add');
const table = document.querySelector('table');


const tableData = [
    {id: 0,
    student_name: '',
    student_roll: '',
    subject: '',
    marks:'',
    marked_by:'',
    save: ''}
]

function createSaveButton(){
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.setAttribute('type', 'submit');
    saveBtn.classList.add('btn', 'save');
    return saveBtn;
}
function createInputField(){
    const inputField = document.createElement('input');
    // td.appendChild(inputField);
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('required', 'true');
    inputField.classList.add('input-field');
    return inputField;
    
}

function addDataToRow(row){
    let lastEntry = tableData.length - 1;
    const keys = Object.keys(tableData[lastEntry]);

    keys.forEach(function(key){
        const td = document.createElement('td');
        row.appendChild(td);
        if(key == 'id'){
        const lastIdValue = tableData[lastEntry].id;
        const idValue = lastIdValue+1;
        lastEntry = tableData.length - 1;
        tableData[lastEntry].id = idValue;
        td.textContent = idValue;
        td.setAttribute('id', 'id');
        }
        else if(key == 'save'){
        td.appendChild(createSaveButton());
        }
        else if(key=='student_name'){
        const input = createInputField();
        td.appendChild(input);
        input.setAttribute('id','name');
        }
        else if(key=='student_roll'){
        const input = createInputField();
        td.appendChild(input);
        input.setAttribute('id','roll');
        }
        else if(key=='subject'){
        const input = createInputField();
        td.appendChild(input);
        input.setAttribute('id','subject');
        }
        else if(key=='marks'){
        const input = createInputField();
        td.appendChild(input);
        input.setAttribute('id','marks');
        }
        else if(key=='marked_by'){
        const input = createInputField();
        td.appendChild(input);
        input.setAttribute('id','marked_by');
        }
    })
    
}

function createRow(){
    const row = document.createElement('tr');
    table.appendChild(row);
    addDataToRow(row);
    let lastSaveBtn = document.querySelectorAll('.save');
    const saveIndex = lastSaveBtn.length - 1;
    const saveButton = document.querySelectorAll('.save')[saveIndex];
    saveButton.addEventListener('click', saveData)
}



function saveData(){
    const name = document.querySelector('#name').value;
    const rollnum = document.querySelector('#roll').value;
    const subject = document.querySelector('#subject').value;
    const marks = document.querySelector('#marks').value;
    const markedBy = document.querySelector('#marked_by').value;
    const id = document.querySelector('#id').value;

    // add validations for all the data
    if((!name) || (!rollnum) || (!subject) || (!marks) || (!markedBy)) {
        alert('enter all the values, do not leave anything empty');
    }
    const intMarks = parseInt(marks);
    if(isNaN(marks)) alert('marks needs to be a number')
    if(!markedBy.includes('@')) alert('markedBy needs an email address');


}


addRowBtn.addEventListener('click', createRow)
