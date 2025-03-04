const container = document.createElement('div');
container.style.margin = "20px";
container.style.textAlign = 'center'



const timer = document.createElement('div');
timer.textContent = "00:00:00";
timer.style.fontSize = '24px';
timer.style.marginBottom = '10px';
container.appendChild(timer);


const startBtn = document.createElement('button');
startBtn.textContent = 'Start';
startBtn.style.margin = '5px';

const stopBtn = document.createElement('button');
stopBtn.textContent = "Stop";
stopBtn.style.margin = '5px';


const resetBtn = document.createElement('button');
resetBtn.textContent = "Reset";
resetBtn.style.margin = '5px'


let start = 0;
let curr = 0;
let timeInterval = 0;

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const millis = Math.floor(ms % 1000);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(millis).padStart(3, '0')}`;
}


startBtn.addEventListener('click',()=>{
    start = Date.now()-curr;
    timeInterval = setInterval(()=>{
        curr = Date.now() - start;
        timer.textContent = formatTime(curr);
    },10)
})

stopBtn.addEventListener('click',()=>{
    clearInterval(timeInterval);
})

resetBtn.addEventListener('click',()=>{
    clearInterval(timeInterval);
    timer.textContent = "00:00:00";
})


container.append(startBtn,stopBtn,resetBtn);
document.body.appendChild(container);




const dobInp = document.createElement('input');
dobInp.type = 'date';
dobInp.style.margin = '5px';
dobInp.style.padding = '20px';

const ageDisplay = document.createElement('div');
ageDisplay.style.fontSize = '18px';
ageDisplay.style.marginLeft = '20px';



dobInp.addEventListener('mouseover',()=>{
    const d = new Date();
    let inp = dobInp.valueAsDate;
    let value = d.getFullYear() - inp.getFullYear();
    if (d.getMonth() < inp.getMonth() || (d.getMonth() === inp.getMonth() && d.getDate() < inp.getDate())) {
        value--;
    }
    ageDisplay.textContent = `Age: ${value}`;
})

document.body.appendChild(dobInp);
document.body.appendChild(ageDisplay);


const textArea = document.createElement('textarea');
textArea.style.width = '300px';
textArea.style.height = '100px';
textArea.style.margin = '20px';


const counter = document.createElement('div');
counter.style.marginLeft = '20px';
counter.textContent = 'Characters typed: 0';


textArea.addEventListener('keydown', () => {
    const val = textArea.value.length;
    counter.textContent = `Characters typed: ${val}`;
});

document.body.appendChild(textArea);
document.body.appendChild(counter);