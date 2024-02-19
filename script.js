let user1 = prompt('1-ci oyuncunun adi: ');
let user2 = prompt('2-ci oyuncunun adi: ');
let user3 = prompt('3-cu oyuncunun adi: ');
let user4 = prompt('4-cu oyuncunun adi: ');
let user5 = prompt('5-ci oyuncunun adi: ');

function oyna() {
    
let player;
let dc;
let qurban;


let reqem = Math.floor(Math.random() * 5) + 1;
let reqem2 = Math.floor(Math.random() * 2) + 1;
let reqem3 = Math.floor(Math.random() * 5) + 1;

if (reqem == 1) {
    player = user1;
} else if (reqem == 2) {
    player = user2;
} else if (reqem == 3) {
    player = user3;
} else if (reqem == 4) {
    player = user4;
}else {
    player = user5;
}

if (reqem3 == 1) {
    qurban = user1;
} else if (reqem3 == 2) {
    qurban = user2;
} else if (reqem3 == 3) {
    qurban = user3;
} else if (reqem3 == 4) {
    qurban = user4;
}else {
    qurban = user5;
}

if (reqem2 == 1) {
    dc = 'Dogruluq';
} else {
    dc = 'Cesaret';
}

document.getElementById('players').innerHTML = `Bu oyunda ${user1}, ${user2}, ${user3}, ${user4}, ve ${user5}, istirak edirler`;
document.getElementById('dc').innerHTML = `Oyuncu ${player}, Bu oyunda qurbaniniz ${qurban} oldu! Bu oyunda qurban ${dc} oyununda olacaq.`;
}

let player;
let dc;
let qurban;


let reqem = Math.floor(Math.random() * 5) + 1;
let reqem2 = Math.floor(Math.random() * 5) + 1;
let reqem3 = Math.floor(Math.random() * 5) + 1;

if (reqem == 1) {
    player = user1;
} else if (reqem == 2) {
    player = user2;
} else if (reqem == 3) {
    player = user3;
} else if (reqem == 4) {
    player = user4;
}else {
    player = user5;
}

if (reqem3 == 1) {
    qurban = user1;
} else if (reqem3 == 2) {
    qurban = user2;
} else if (reqem3 == 3) {
    qurban = user3;
} else if (reqem3 == 4) {
    qurban = user4;
}else {
    qurban = user5;
}

if (reqem2 == 1) {
    dc = 'Dogruluq';
} else {
    dc = 'Cesaret';
}

document.getElementById('players').innerHTML = `Bu oyunda ${user1}, ${user2}, ${user3}, ${user4}, ve ${user5}, istirak edirler`;
document.getElementById('dc').innerHTML = `Oyuncu ${player}, Qurbaninizi secin! Bu oyunda qurbaniniz ${qurban} oldu! Bu oyunda qurban ${dc} oyununda olacaq.`;