const mostrarTexto = document.getElementById("notificacion");
let campoC = document.getElementsByClassName("game-cells");
Win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
ganadorJ = () => `El jugador ${jugadorRandom} ha ganado`;
turnoplayer = () => `Turno del jugador ${maquina}`;
let jugador1 = "&#10084";
let maquina = "&#9733";

let valoR = Math.floor(Math.random() * 8);

function main() {
  mostrarTurno(turnoplayer());
}

function mostrarTurno(message) {
  mostrarTexto.innerHTML = message;
}
function camposjugador1() {
  campoC[0].addEventListener("click", function () {
    campoC[0].innerHTML = jugador1;

    setTimeout(() => {
      campoC[valoR].innerHTML = maquina;
    }, 1500);
  });
  campoC[1].addEventListener("click", function () {
    campoC[1].innerHTML = jugador1;
    setTimeout(() => {
      campoC[valoR].innerHTML = maquina;
    }, 1500);
  });
  campoC[2].addEventListener("click", function () {
    campoC[2].innerHTML = jugador1;
    setTimeout(() => {
      campoC[valoR].innerHTML = maquina;
    }, 1500);
  });
  campoC[3].addEventListener("click", function () {
    campoC[3].innerHTML = jugador1;
    setTimeout(() => {
      campoC[valoR].innerHTML = maquina;
    }, 1500);
  });
  campoC[4].addEventListener("click", function () {
    campoC[4].innerHTML = jugador1;
    setTimeout(() => {
      campoC[valoR].innerHTML = maquina;
    }, 1500);
  });
  campoC[5].addEventListener("click", function () {
    campoC[5].innerHTML = jugador1;
    setTimeout(() => {
      campoC[valoR].innerHTML = maquina;
    }, 1500);
  });
  campoC[6].addEventListener("click", function () {
    campoC[6].innerHTML = jugador1;
    setTimeout(() => {
      campoC[valoR].innerHTML = maquina;
    }, 1500);
  });
  campoC[7].addEventListener("click", function () {
    campoC[7].innerHTML = jugador1;
    setTimeout(() => {
      campoC[valoR].innerHTML = maquina;
    }, 1500);
  });
  campoC[8].addEventListener("click", function () {
    campoC[8].innerHTML = jugador1;
    setTimeout(() => {
      campoC[valoR].innerHTML = maquina;
    }, 1500);
  });
}

camposjugador1();
camposmaquina();
main();
