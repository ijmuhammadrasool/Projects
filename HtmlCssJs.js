document.getElementById("titlet");
titlet.textContent = "Bye World";

function change() {

    let btnelement = document.getElementById('titletwo');
    let btn1 = document.getElementById('btn');

    if (btn1.value === 'Change') {
        (btn1.value = 'Changed');
        btn1.classList.add('button');
    }
    else {
        btn1.value = 'Change';
        btn1.classList.remove('button')
    }

    if (btnelement.innerHTML === 'Hello World') {
        btnelement.innerHTML = 'Bye World';
    }
    else {
        btnelement.innerHTML = 'Hello World';
    }
}

box1 = document.getElementById("num1");
box2 = document.getElementById("num2");
resulttwo = document.getElementById("result");

function add() {
    box1 = Number(box1.value);
    box2 = Number(box2.value);
    resulttwo.textContent = box1 + box2;
}
function subtract() {
    box1 = Number(box1.value);
    box2 = Number(box2.value);
    resulttwo.textContent = box1 - box2;
}
function multiply() {
    box1 = Number(box1.value);
    box2 = Number(box2.value);
    resulttwo.textContent = box1 * box2;
}
function divide() {
    box1 = Number(box1.value);
    box2 = Number(box2.value);
    resulttwo.textContent = box1 / box2;
}

let gnum = document.getElementById("gnum");
let result2 = document.getElementById("result1");
let tscore = document.getElementById("tscore")
let randomNumber = Math.floor(Math.random() * 10) + 1;
let score = 10;
let reset = document.getElementById("reset")

function check() {
    let enternum = gnum.value;

    if (randomNumber == enternum) {
        result2.textContent = "You Are The Win";
    }
    else if (score == 0) {
        result2.textContent = 'Game Over'
    }
    
    else if (gnum.value == "") {
        stopPropagation();
    }
    else {
        result2.textContent = "Wrong";
        score--;
        tscore.textContent = "Score:" + score;
        gnum.value = "";
    }
}

reset.onclick = function () {
    result2.textContent = "You are right/wrong";
    score = 10;
    tscore.textContent = "Score:" + score;
}

let name1 = document.getElementById("ready")

function update(event) {
    name1.textContent = event.target.textContent
}

function d(event) {
    event.target.remove()
}

let todoList = [];

function addtodo() {
    let textbox = document.querySelector('.type');
    let todo = textbox.value;
    textbox.value = '';
    todoList.push(todo);
}

//BackgroudColor Change Code

let colors = ['whitesmoke', 'lightblue', '#dd4b25', '#254bdd', '#e3c42f', 'white'];
let bg = document.getElementById("bgcrch");

bg.addEventListener("click", function () {
    let randomNumber1 = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber1];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

function enter1(event) {
    if (event.key === 'Enter') {
        check();
    }
}

function enter2(event) {
    if (event.key === 'Enter') {
        addtodo();
    }
}

let label = document.getElementById('label');
let dec = document.getElementById('dec');
let res = document.getElementById('res');
let inc = document.getElementById('inc');
let count = 0;

inc.onclick = function () {
    count++;
    label.textContent = count;
}

dec.onclick = function () {
    count--;
    label.textContent = count;
}

res.onclick = function () {
    count = 0;
    label.textContent = count;
}