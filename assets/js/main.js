function say_hi() {
    var name = document.getElementById('name').value;
    var html = 'Привет,' + name;
    document.getElementById('result').innerHTML = html;
}
document.getElementById('btn_hello').addEventListener('click', say_hi);


var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;

function nextSlide() {
    goToSlide(currentSlide+1);
}
function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');
next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};



function select(sender) {
    sender.classList.add("selected_bg");
}


function calcSum() {
    let num1, num2, result;
    num1 = document.getElementById('num1').value; 
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1 + num2;
    document.getElementById("result_calc").innerHTML = result;
}

function calcMin() {
    let num1, num2, result;
    num1 = document.getElementById('num1').value; 
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1 - num2;
    document.getElementById("result_calc").innerHTML = result;
}

function calcMulti() {
    let num1, num2, result;
    num1 = document.getElementById('num1').value; 
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1 * num2;
    document.getElementById("result_calc").innerHTML = result;
}

function calcDiv() {
    let num1, num2, result;
    num1 = document.getElementById('num1').value; 
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1 / num2;
    document.getElementById("result_calc").innerHTML = result;
}






