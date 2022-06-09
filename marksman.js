
var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);
}
var posX = Math.round(Math.random() * 600);

var posY = Math.round(Math.random() * 400);
function movingTarget(){

    limpaTela();

    posX = Math.round(Math.random() * 600);

    posY = Math.round(Math.random() * 400);

    desenhaCirculo(posX, posY, 40, 'red');

    desenhaCirculo(posX, posY, 30, 'white');

    desenhaCirculo(posX, posY, 10, 'red');

    console.log(posX, posY);
}

function dispara(evento){

    var mouseX = evento.pageX - tela.offsetLeft;
    var mouseY = evento.pageY - tela.offsetTop;

    if(mouseX <= posX + 40 && mouseX >= posX - 40 && mouseY <= posY + 40 && mouseY >= posY - 40){
        alert("Você acertou");
    } else {
        alert("Você errou.");
    }
}
tela.onclick = dispara;

setInterval(movingTarget, 2000);
