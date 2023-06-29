const mostrarTexto = document.getElementById("notificacion");
let campoC = document.getElementsByClassName("game-cells");
    CellVacias = ["", "", "", "", "", "", "", "", ""];
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
var maquina = "&#9733";





function ram0() {
 for (let index = 0; index < campoC.length; index++) {
   if (campoC[index].textContent==="") {
    
  }

  
 }

 let newF= encontrarV()


 
 campoC[newF].innerHTML=maquina

 
}

function encontrarV(){
  let celdasVacias= []
  for (let index = 0; index < campoC.length; index++) {
    if (campoC[index].textContent==="") {
     
      celdasVacias.push(index)
    }

    
  }

 

  let newR = Math.floor(Math.random() *celdasVacias.length)
  
  return celdasVacias[newR]
}



function main() {
  mostrarTurno(turnoplayer());
}

function mostrarTurno() {

  const mostrarTexto = document.getElementById("notificacion");
}









function camposjugador1() {



  campoC[0].addEventListener("click", () => {
    campoC[0].innerHTML = jugador1;
         
    setTimeout(() => {

      ram0() 

    }, 1500)


    })
    












  campoC[1].addEventListener("click", () => {
    campoC[1].innerHTML = jugador1;

    setTimeout(() => {

      ram0() 

    }, 1500)
   


  });






  campoC[2].addEventListener("click", () => {
    campoC[2].innerHTML = jugador1;



    setTimeout(() => {

      ram0() 

    }, 1500)


  });

  campoC[3].addEventListener("click", () => {
    campoC[3].innerHTML = jugador1;

   
    setTimeout(() => {

      ram0() 

    }, 1500)
  });



  campoC[4].addEventListener("click", () => {
    campoC[4].innerHTML = jugador1;



    setTimeout(() => {

      ram0() 

    }, 1500)



  });


  campoC[5].addEventListener("click", () => {
    campoC[5].innerHTML = jugador1;
    setTimeout(() => {

      ram0() 

    }, 1500)
   


  });


  campoC[6].addEventListener("click", () => {
    campoC[6].innerHTML = jugador1;
    setTimeout(() => {

      ram0() 

    }, 1500)

    


  });

  
  campoC[7].addEventListener("click", () => {
    campoC[7].innerHTML = jugador1;

    setTimeout(() => {

      ram0() 

    }, 1500)


  });


  campoC[8].addEventListener("click", () => {
    campoC[8].innerHTML = jugador1;


    setTimeout(() => {

      ram0() 

    }, 1500)


  });
}





function validacionGanadora() {
  let rondaGanada= false
  for (let i = 0; i < Win.length; i++) {
    let condicionGanadora=Win[i]
    let posicion1=CellVacias[condicionGanadora[0]],
     posicion2=CellVacias[condicionGanadora[1]],
     posicion3=CellVacias[condicionGanadora[2]]

     if (posicion1==='' || posicion2==='' || posicion3==='') {
      continue;
     }
     if (posicion1===posicion2 && posicion2===posicion3) {
      rondaGanada=true
      break
     }
  }
  if (rondaGanada){
    mostrarTurno(ganadorJ())
}
}
function cambiarJugador() {
  maquina = (maquina === "&#10084") ? "&#9733" : "&#10084";
  mostrarTurno(turnoplayer());
}
mostrarTurno()
validacionGanadora()
camposjugador1();
main();
