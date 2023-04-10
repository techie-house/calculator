function buttonClick(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "0";
}

function calculateResult() {
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}