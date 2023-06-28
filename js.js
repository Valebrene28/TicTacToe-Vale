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
const turnoplayer = () => `Turno del jugador ${maquina}`;
let jugador1 = "&#10084";
let maquina = "&#9733";

function ram0() {
  for (let index = 0; index < 30; index++) {
    let valoR1 = Math.floor(Math.random() * 8);
    if (valoR1 != 1) {
      return valoR1;
    }
  }
}

function ram1() {
  for (let index = 1; index < 30; index++) {
    let valoR1 = Math.floor(Math.random() * 8);

    if (valoR1 != 1) {
      return valoR1;
    }
  }
}

function ram2() {
  for (let index = 2; index < 30; index++) {
    let valoR1 = Math.floor(Math.random() * 8);

    if (valoR1 != 2) {
      return valoR1;
    }
  }
}

function ram3() {
  for (let index = 2; index < 30; index++) {
    let valoR1 = Math.floor(Math.random() * 8);

    if (valoR1 != 2) {
      return valoR1;
    }
  }
}

function ram4() {
  for (let index = 2; index < 30; index++) {
    let valoR1 = Math.floor(Math.random() * 8);

    if (valoR1 != 2) {
      return valoR1;
    }
  }
}

function ram5() {
  for (let index = 2; index < 30; index++) {
    let valoR1 = Math.floor(Math.random() * 8);

    if (valoR1 != 2) {
      return valoR1;
    }
  }
}

function ram6() {
  for (let index = 2; index < 30; index++) {
    let valoR1 = Math.floor(Math.random() * 8);

    if (valoR1 != 2) {
      return valoR1;
    }
  }
}

function ram7() {
  for (let index = 2; index < 30; index++) {
    let valoR1 = Math.floor(Math.random() * 8);

    if (valoR1 != 2) {
      return valoR1;
    }
  }
}

function ram8() {
  for (let index = 2; index < 30; index++) {
    let valoR1 = Math.floor(Math.random() * 8);

    if (valoR1 != 2) {
      return valoR1;
    }
  }
}

function main() {
  mostrarTurno(turnoplayer());
}

function mostrarTurno(message) {
  mostrarTexto.innerHTML = message;
}
function camposjugador1() {
  campoC[0].addEventListener("click", () => {
    campoC[0].innerHTML = jugador1;

    let valoR = Math.floor(Math.random() * 8);
    let blanco = campoC[0].textContent;
    if (blanco[0] != "") {
      setTimeout(() => {
        if (valoR != 0) {
          campoC[valoR].innerHTML = maquina;
        } else {
          alert("soy un cero pero me van a cambiar");
          let vali = ram0();
          campoC[vali].innerHTML = maquina;
        }
      }, 1500);
    }
  });
  campoC[1].addEventListener("click", () => {
    campoC[1].innerHTML = jugador1;

    let valoR = Math.floor(Math.random() * 8);
    let blanco = campoC[1].textContent;
    if (blanco[1] != "") {
      setTimeout(() => {
        if (valoR != 1) {
          campoC[valoR].innerHTML = maquina;
        } else {
          alert("soy un uno pero me van a cambiar");
          let vali = ram1();
          campoC[vali].innerHTML = maquina;
        }
      }, 1500);
    }
  });
  campoC[2].addEventListener("click", () => {
    campoC[2].innerHTML = jugador1;
    let valoR = Math.floor(Math.random() * 8);
    let blanco = campoC[2].textContent;
    if (blanco[2] != "") {
      setTimeout(() => {
        if (valoR != 2) {
          campoC[valoR].innerHTML = maquina;
        } else {
          alert("soy un dos pero me van a cambiar");
          let vali = ram2();
          campoC[vali].innerHTML = maquina;
        }
      }, 1500);
    }
  });
  campoC[3].addEventListener("click", () => {
    campoC[3].innerHTML = jugador1;

    let valoR = Math.floor(Math.random() * 8);
    let blanco = campoC[3].textContent;
    if (blanco[3] != "") {
      setTimeout(() => {
        if (valoR != 3) {
          campoC[valoR].innerHTML = maquina;
        } else {
          alert("soy un tres pero me van a cambiar");
          let vali = ram3();
          campoC[vali].innerHTML = maquina;
        }
      }, 1500);
    }
  });
  campoC[4].addEventListener("click", () => {
    campoC[4].innerHTML = jugador1;
    let valoR = Math.floor(Math.random() * 8);
    let blanco = campoC[4].textContent;
    if (blanco[4] != "") {
      setTimeout(() => {
        if (valoR != 4) {
          campoC[valoR].innerHTML = maquina;
        } else {
          alert("soy un cuatro pero me van a cambiar");
          let vali = ram4();
          campoC[vali].innerHTML = maquina;
        }
      }, 1500);
    }
  });
  campoC[5].addEventListener("click", () => {
    campoC[5].innerHTML = jugador1;

    let valoR = Math.floor(Math.random() * 8);
    let blanco = campoC[5].textContent;
    if (blanco[5] != "") {
      setTimeout(() => {
        if (valoR != 5) {
          campoC[valoR].innerHTML = maquina;
        } else {
          alert("soy un cinco pero me van a cambiar");
          let vali = ram5();
          campoC[vali].innerHTML = maquina;
        }
      }, 1500);
    }
  });
  campoC[6].addEventListener("click", () => {
    campoC[6].innerHTML = jugador1;

    let valoR = Math.floor(Math.random() * 8);
    let blanco = campoC[6].textContent;
    if (blanco[6] != "") {
      setTimeout(() => {
        if (valoR != 6) {
          campoC[valoR].innerHTML = maquina;
        } else {
          alert("soy un seis pero me van a cambiar");
          let vali = ram6();
          campoC[vali].innerHTML = maquina;
        }
      }, 1500);
    }
  });
  campoC[7].addEventListener("click", () => {
    campoC[7].innerHTML = jugador1;

    let valoR = Math.floor(Math.random() * 8);
    let blanco = campoC[7].textContent;
    if (blanco[7] != "") {
      setTimeout(() => {
        if (valoR != 7) {
          campoC[valoR].innerHTML = maquina;
        } else {
          alert("soy un siete pero me van a cambiar");
          let vali = ram7();
          campoC[vali].innerHTML = maquina;
        }
      }, 1500);
    }
  });
  campoC[8].addEventListener("click", () => {
    campoC[8].innerHTML = jugador1;

    let valoR = Math.floor(Math.random() * 8);
    let blanco = campoC[8].textContent;
    if (blanco[8] != "") {
      setTimeout(() => {
        if (valoR != 8) {
          campoC[valoR].innerHTML = maquina;
        } else {
          alert("soy un ocho pero me van a cambiar");
          let vali = ram8();
          campoC[vali].innerHTML = maquina;
        }
      }, 1500);
    }
  });
}

// function cambiarJugador() {
//   jugador1 = jugador1 === "&#9733" ? "&#10084" : "&#9733";
//   mostrarTurno(turnoplayer());
// }

camposjugador1();
// cambiarJugador();


main();
