let elem = document.getElementById('text_text');
let progress = document.getElementById('progress_value');
let errors = document.getElementById('errors_value');
let start = document.getElementById('start');
let times = document.getElementById('time_value');

let done_count = 0;
let errors_count = 0;
let all = 0;

let characters = 0;

let timer;
let time = 60;

var check = 0;
var x;

function connect() {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://baconipsum.com/api/?type=all-meat&paras=1&format=text", false);
    xhr.send();

    x = xhr.responseText;

    xhr.onload = console.log(xhr.responseText);

    elem.innerHTML = x;

    x = x.split('');

    console.log(x);
}

function keyup() {
    document.addEventListener('keyup', press);
}

function press(e) {
    if (e.key == 'Shift' || e.key == 'Alt' || e.key == 'Enter') {
        console.log('Система');
    } else if (e.key == x[check]) {
        done_count++; all++; characters++;
        x.splice(0,1);
        x = x.join('');
        elem.innerHTML = x;
        x = x.split('');
        console.log(x);
        progress.innerHTML = Math.round((done_count/all)*100);
        errors.innerHTML = errors_count;
    } else {
        errors_count++; all++; characters++;
        progress.innerHTML = Math.round((done_count/all)*100);
        errors.innerHTML = errors_count;
        if (errors_count > (x.length/30)) {
            let fail = confirm('Вы проиграли! Начните заного! Ваша скорость: ' + characters + ' CPM');
            if (fail) {
                location.reload();
            } else {
                location.reload();
        }
    }
}
    if (done_count == x.length) {
        alert('Вы выйграли! Ваша скорость: ' + characters + ' CPM');
        let win = confirm('Хотите поиграть еще?');
        if (win) {
            location.reload();
        }
    }
}

function time_count() {
    times.innerHTML = time;
    time--;
    if (time < 0) {
        clearTimeout(timer);
        x.length = 5;
    } else {
        timer = setTimeout(time_count, 1000);
    }
}

function startgame(e) {
    if (e.key == 'Enter') {
        connect();
        start.style.display = "none";
        keyup();
        time_count();
    } if (e.key != 'Enter') {
        location.reload();
    }
}

document.addEventListener('keydown', startgame, {
    once: true
})
