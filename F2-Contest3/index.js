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
    saveBtn.classList.add('btn', 'save');
    return saveBtn;
}

function addDataToRow(row){
    let lastEntry = tableData.length - 1;
    const keys = Object.keys(tableData[lastEntry]);
    keys.forEach(function(key){
        if(key == 'id'){
        const td = document.createElement('td');
        row.appendChild(td);
        const lastIdValue = tableData[lastEntry].id;
        const idValue = lastIdValue+1;
        lastEntry = tableData.length - 1;
        tableData[lastEntry].id = idValue;
        td.textContent = idValue;
        }
        else if(key == 'save'){
        const td = document.createElement('td');
        row.appendChild(td);
        td.appendChild(createSaveButton());
        }
        else{
        const td = document.createElement('td');
        row.appendChild(td);
        const inputField = document.createElement('input');
        td.appendChild(inputField);
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('required', 'true');
        inputField.classList.add('input-field');
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
    
}


addRowBtn.addEventListener('click', createRow)
