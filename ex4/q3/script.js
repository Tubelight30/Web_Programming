function calculateTotal() {
    const slider1 = parseInt(document.getElementById("slider1").value);
    const slider2 = parseInt(document.getElementById("slider2").value);
    const slider3 = parseInt(document.getElementById("slider3").value);
    const total = slider1 + slider2 + slider3;
    document.getElementById("totalOutput").value = total;
}

document.getElementById("slider1").oninput = function() {
    document.getElementById("output1").value = this.value;
    calculateTotal();
};
document.getElementById("slider2").oninput = function() {
    document.getElementById("output2").value = this.value;
    calculateTotal();
};
document.getElementById("slider3").oninput = function() {
    document.getElementById("output3").value = this.value;
    calculateTotal();
};