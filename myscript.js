function add() {
    let num1 = parseFloat(document.getElementById("num_1").value);
    let num2 = parseFloat(document.getElementById("num_2").value);
    let ans = num1 + num2;
    document.getElementById('answer').innerHTML = "Answer is: " + ans;
}

function sub() {
    let num1 = parseFloat(document.getElementById("num_1").value);
    let num2 = parseFloat(document.getElementById("num_2").value);
    let ans = num1 - num2;
    document.getElementById('answer').innerHTML = "Answer is: " + ans;
}

function div() {
    let num1 = parseFloat(document.getElementById("num_1").value);
    let num2 = parseFloat(document.getElementById("num_2").value);
    let ans = num1 / num2;
    document.getElementById('answer').innerHTML = "Answer is: " + ans;
}

function mul() {
    let num1 = parseFloat(document.getElementById("num_1").value);
    let num2 = parseFloat(document.getElementById("num_2").value);
    let ans = num1 * num2;
    document.getElementById('answer').innerHTML = "Answer is: " + ans;
}
