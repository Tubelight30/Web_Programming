const newline = document.createElement('br');
const table = document.createElement("table");
table.style.border = "1px solid black";
table.style.margin = "20px 0";
table.style.borderCollapse = "collapse";

for(let i = 0;i<3;i++){
    const row = document.createElement("tr");
    for(let j = 0;j<3;j++){
        const cell = document.createElement('td');
        cell.textContent = `${i} ${j}`;
        cell.style.border = "1px solid black"
        cell.style.padding = '8px';
        row.appendChild(cell);
    }
    table.appendChild(row);
}
document.body.appendChild(table);



const button  = document.createElement("button");
button.textContent = 'Hello';
button.style.backgroundColor = "red";
button.style.color = "white";
button.style.padding = '10px 20px';
button.style.margin = '10px';

button.addEventListener('mouseover', ()=>{
    button.style.backgroundColor = 'green';
})

document.body.appendChild(button);  



const textBox = document.createElement("input");
textBox.style.backgroundColor = 'green';
textBox.style.color = 'black';
textBox.style.padding = '8px';
textBox.style.margin = '10px';

textBox.addEventListener('focus',()=>{
    textBox.style.backgroundColor = "yellow";
})
textBox.addEventListener('change',()=>{
    alert(`Hello ${textBox.value}`);
})

document.body.appendChild(textBox);



const inputField = document.createElement('input');
inputField.type = 'text';
inputField.style.margin = '10px';

const addButton = document.createElement('button');
addButton.textContent = 'Add to List';
addButton.style.margin = '10px';

const list = document.createElement('ul');

addButton.addEventListener('dblclick',()=>{
    const item = document.createElement('li');
    item.textContent = `${inputField.value}`;
    list.appendChild(item);
})

document.body.appendChild(newline);
document.body.appendChild(inputField);
document.body.appendChild(addButton);
document.body.appendChild(list);



const inputfield = document.createElement('input');
inputfield.type = 'text';
inputfield.style.margin = '10px';

const outputfield = document.createElement('input');
outputfield.type = 'text';
outputfield.readOnly = true;
outputfield.style.margin = '10px';

let count = 0;
inputfield.addEventListener('keydown',()=>{
    count++;
    outputfield.value = count;
})

document.body.appendChild(inputfield);
document.body.appendChild(outputfield);
