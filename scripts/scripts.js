var canvas;
var ctx;

let tuning = [];

function init() {
    canvas = document.getElementById('c');
    ctx = canvas.getContext('2d');

    for(i = 0; i < 7; i++) {
        tuning[i] = 'nat';
    }

    drawTuning();
}

function checkButtons() {
    note = document.querySelector('input[name="d"]:checked').value;
    tuning [0] = note;

    note = document.querySelector('input[name="c"]:checked').value;
    tuning [1] = note;
    
    note = document.querySelector('input[name="b"]:checked').value;
    tuning [2] = note;

    note = document.querySelector('input[name="e"]:checked').value;
    tuning [3] = note;

    note = document.querySelector('input[name="f"]:checked').value;
    tuning [4] = note;

    note = document.querySelector('input[name="g"]:checked').value;
    tuning [5] = note;

    note = document.querySelector('input[name="a"]:checked').value;
    tuning [6] = note;

    drawTuning()
}

function drawTuning() {
    ctx.clearRect(0, 0, 600, 200);

    ctx.fillRect(20, 100, 560, 7)
    ctx.fillRect(255, 10, 6, 180)

    x = 50;
    for(i = 0; i < tuning.length; i++) {
        if(tuning[i] == 'nat') {
            ctx.fillRect(x, 73, 20, 60);
            x += 80;
        } else if(tuning[i] == 'flat') {
            ctx.fillRect(x, 40, 20, 50);
            x += 80;
        } else if(tuning[i] == 'sharp') {
            ctx.fillRect(x, 118, 20, 50);
            x += 80;
        }
    }
}

function tuningToString() {
    notes = ['D', 'B', 'C', 'E', 'F', 'G', 'A'];

    for(i = 0; i < tuning.length; i++) {
        if(tuning[i] == 'sharp') {
            notes[i] += '#';
        } else if (tuning[i] == 'flat') {
            notes[i] += 'b';
        }
    }

    result = '';

    for(i = 0; i < tuning.length; i++) {
        result += notes[i];
    }

    return result;
}

function download() {
    anchor = document.createElement('a');

    anchor.href = canvas.toDataURL('image/png');
    anchor.download = tuningToString();
    anchor.click();
}