function oppendvalue(value) {
    document.getElementById("display").value += value;
}

function cleardisplay() {
    document.getElementById("display").value = "";
}

function calculator() {
    try {
        let display = document.getElementById("display");

        if (display.value.trim() === "") {
            return;
        }

        display.value = eval(display.value);
    } catch {
        alert("Try again");
    }
}
