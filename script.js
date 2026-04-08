const emojis = [
    [0x1f610, 0x1f611],
    [0x1f3D1, 0x1f3D2],
    [0x1F4DD, 0x1F4C4],
    [0x1F61F, 0x1F61E],
    [0x1F63C, 0x1F63E],
    [0x270C, 0x1F91E],
    [0x1F918, 0x1F91F],
    [0x1F64D, 0x1F64E],
    [0x1F47C, 0x1F476],
    [0x1F508, 0x1F509],
    [0x1F30D, 0x1F30E],
    [0x1F512, 0x1F513],
    [0x1F519, 0x1F51A],
    [0x1F4EA, 0x1F4EB],
    [0x1F555, 0x1F55B],
    [0x1F699, 0x1F69C]
];

let set;
let odd;
let odd_place;
let score = 0;
let clicks = 0;

function updateStats(){
    document.getElementById('num').innerText = score.toString();
    document.getElementById('#').innerText = clicks.toString();
    if (score === 0){
        document.getElementById('percent').innerText = '0%';
    } else {
        document.getElementById('percent').innerText = `${Math.floor(score/clicks*100)}%`;
    }
}

function setup() {
    set = Math.floor(Math.random() * emojis.length);
    odd = Math.floor(Math.random() * 2);
    odd_place = Math.floor(Math.random() * 9) + 1;
    updateStats();

    for (let i = 1; i < 10; i++) {
        let btn = document.getElementById(`#${i}`)
        if (i === odd_place) {
            btn.innerText = String.fromCodePoint(emojis[set][odd]);
        } else if (odd === 1) {
            btn.innerText = String.fromCodePoint(emojis[set][0]);
        } else {
            btn.innerText = String.fromCodePoint(emojis[set][1]);
        }
    }
}

function check(id) {
    clicks++;
    if (id === odd_place) {
        document.getElementById('status').innerText = `${String.fromCodePoint(emojis[set][odd])} was correct! You made it to the next round.`;
        score++;
        setup();
    } else {
        document.getElementById('status').innerText = `Wrong one, try again!`;
    }
    updateStats();
}

setup();