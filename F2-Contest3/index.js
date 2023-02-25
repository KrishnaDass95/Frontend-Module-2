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
    saveBtn.innerText = 'Save';
    saveBtn.classList.add('btn');
}

function addDataToRow(row){
    const lastEntry = tableData.length - 1;
    const keys = Object.keys(tableData[lastEntry]);
    keys.forEach(function(key){
        const td = document.createElement('td');
        row.appendChild(td);
        const inputField = document.createElement('input');
        td.appendChild(inputField);
        inputField.setAttribute('type', 'text');
        inputField.classList.add('input-field');
    })
    

}

function createRow(){
    const row = document.createElement('tr');
    table.appendChild(row);
    addDataToRow(row);

}


addRowBtn.addEventListener('click', createRow)