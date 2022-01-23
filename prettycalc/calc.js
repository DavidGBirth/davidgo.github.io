const x = document.querySelector(".visor span");
let operation = '';
let a;
let b;

function press(number) {
    x.innerHTML += number;
}

function op(type) {
    a = parseInt(x.innerHTML);
    erase();
    operation = type;
}

function finish() {
    b = parseInt(x.innerHTML);
    erase();
    if (operation == 'add') {
        x.innerHTML = a + b;
        return;
    }
    if (operation == 'sub') {
        x.innerHTML = a - b;
        return;
    }
    if (operation == 'mult') {
        x.innerHTML = a * b;
        return;
    }
    if (operation == 'divide') {
        x.innerHTML = a / b;
        return;
    }
}

function erase() {
    x.innerHTML = '';
}