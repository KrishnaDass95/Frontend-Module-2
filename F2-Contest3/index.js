const addRowBtn = document.querySelector('#add');
const table = document.querySelector('table');

const tableData = [
    {id: 0,
    student_name: '',
    student_roll: '',
    subject: '',
    marks:'',
    marked_by:'',
    save: createSaveButton()}
]

function createSaveButton(){
    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Save';
    saveBtn.classList.add('btn');
}

function addDataToRow(row){
    // a loop, that will go through the tableData, go to the last index
    // and then add that data to the table row
    

}

function createRow(){
    const row = document.createElement('tr');
    table.appendChild(row);
    addDataToRow(row);

}


addRowBtn.addEventListener('click', createRow)