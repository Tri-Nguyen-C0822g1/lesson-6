

function add() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = num1 + num2;
}
function sub() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = num1 - num2;
}
function mul() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = num1 * num2;
}
function div() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = num1 / num2;
}
