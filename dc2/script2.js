let user1 = 'Elmaddin';
let user2 = 'Nurlan';
let user3 = 'Leyla';
let user4 = 'Ramo';
let user5 = 'Mitri';

let user;
let qurban;
let dc;



function oyna() {
    let num = Math.floor(Math.random() * 5);
    let num2 = Math.floor(Math.random() * 5);
    let num3 = Math.floor(Math.random() * 5);

    if (player == 0) {
        user = user1;
    } else if (player == 1) {
        user = user2;
    } else if (player == 2) {
        user = user3;
    } else if (player == 3) {
        user = user4;
    } else {
        user = user5;
    }

    if (num2 == 0) {
        qurban = user1;
    } else if (num2 == 1) {
        qurban = user2;
    } else if (num2 == 2) {
        qurban = user3;
    } else if (num2 == 3) {
        qurban = user4;
    } else {
        qurban = user5;
    }

    if (num3 == 0) {
        dc = 'Dogruluq'
    } else {
        dc = 'Cesaret';
    }

    document.getElementById('dc').innerHTML = `${user} qalib geldi. ${qurban} qurban olaraq ${dc} oyunu oynayacaq.`;
}