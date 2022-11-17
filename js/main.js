let pegaResultado = document.querySelector("#resultado")
let pegaNumero1= document.querySelector("#numero1")
//let pegaNumero2= document.querySelector("#numero2")
//let pegaNumero3= document.querySelector("#numero3")
//let pegaNumero4= document.querySelector("#numero4")
//let pegaNumero5= document.querySelector("#numero5")
//let enviar = document.querySelector("#enviar")



//var select = document.getElementById(resultado);

//document.getElementById("enviar").onclick = function(){

  //  var value = select.value
   // if (value == 1)
     //   pegaNumero1.addEventListener('click', ()=>{
       // pegaResultado.innerHTML = `A nota escolhida foi  ${pegaNumero1.value}`
    //})
//}



//pegaNumero2.addEventListener('click', ()=>{
  //  pegaResultado.innerHTML = `A nota escolhida foi  ${pegaNumero2.value}`
//})
//pegaNumero3.addEventListener('click', ()=>{
  //  pegaResultado.innerHTML = `A nota escolhida foi  ${pegaNumero3.value}`
//})
//pegaNumero4.addEventListener('click', ()=>{
  //  pegaResultado.innerHTML = `A nota escolhida foi  ${pegaNumero4.value}`
//})
//pegaNumero5.addEventListener('click', ()=>{
 // pegaResultado.innerHTML = `A nota escolhida foi  ${pegaNumero5.value}`
//})


//enviar.addEventListener("click", myFunction);

//function myFunction(){
  //  document.getElementById("nota").innerHTML = `A nota escolhida foi ${pegaNumero1}`
//}

//const enviarResultado = document.getElementById("enviar")
//const notas = document.querySelectorAll(".nota")
//const atualRating = document.getElementById("notas")
//let salvar = 

function salvar() {
    localStorage.info = document.getElementById("numero1").value;
    
    //localStorage.info = notas.value;
}

function enviar() {
    
        document.getElementById("numero1").value = localStorage.info;
       // notas.forEach((nota) => {
         // nota.addEventListener("click", () => {
           // console.log(nota.innerHTML)
         // })
       // })

     //  pegaNumero1.addEventListener('click', ()=>{
      //pegaResultado.innerHTML = pegaNumero1.innerHTML
       // pegaResultado.innerHTML = `A nota escolhida foi  ${pegaNumero1.value}`
        //console.log("numero1".innerHTML)
     // })
    }



