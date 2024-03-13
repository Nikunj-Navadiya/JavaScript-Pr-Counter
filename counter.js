let counter = 0;
let int;
let flag = false;

function data() {
    document.getElementById('mgs').innerHTML = `Counter :- ${counter}`;
    counter++;
}

function start() {
    if (flag == false) {
        flag = true;
        int = setInterval(data, 1000);
    }
}

function stop() {
    flag = false;
    clearInterval(int);
}

function reset() {
    counter = 0;
    clearInterval(int);
    flag = false;
    start();
}
