Arquivo criado para salvas anotações de estudo das funções de JavaScript que foram experimentadas nesse projeto. 

Muitas não deram certo, porém ainda estão em estudo para utilização correta.

Ainda estudando sobre localStorage e input do value de um HTML em outro HTML do mesmo projeto.

_____________________________________________________________________________________
//let enviar = document.querySelector("#enviar")

//var select = document.getElementById(resultado);

//document.getElementById("enviar").onclick = function(){

  //  var value = select.value
   // if (value == 1)
     //   pegaNumero1.addEventListener('click', ()=>{
       // pegaResultado.innerHTML = `A nota escolhida foi  ${pegaNumero1.value}`
    //})
//}


//enviar.addEventListener("click", myFunction);

//function myFunction(){
  //  document.getElementById("nota").innerHTML = `A nota escolhida foi ${pegaNumero1}`
//}
________________________________________________________________________________________
//const enviarResultado = document.getElementById("enviar")
//const notas = document.querySelectorAll(".nota")
//const atualRating = document.getElementById("notas")
//let salvar = 
___________________________________________________________________________________
//function salvar() {
  //  localStorage.info = document.getElementById("numero1").value;
    
    //localStorage.info = notas.value;
//}

//function enviar() {
    
      //  document.getElementById("resultado").value = localStorage.info;
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
  //  }

____________________________________________________________________________________
    //var arr = [];

   // function salvar() {
     //   if(localStorage.meuArr){
     //       arr = JSON.parse(localStorage.getItem('meuArr');)
     //   }
 //   }
///
   // let novoItem = document.getElementById("numero2").value;
   //     arr.push(novoItem);
  //      document.getElementById("numero2").value = "";
    //    localStorage.meuArr = JSON.stringify(arr);

_______________________________________________________________________________________

//ESTUDO
//var input = document.querySelector("#numero1");
//var texto = input.value;
//let pegaresultado = document.querySelector("#resultado")
//console.log(texto);


//pegaNumero2.addEventListener('click', ()=>{
  //pegaResultado.innerHTML = ` a nota  ${pegaNumero2.value}`
//})


 //mostraResultado = () =>{
  //pegaresultado.innerHTML= `a nota ${texto}`
  //console.log(mostraResultado);
//}

____________________________________________________________________________________
function gohome(){
    window.location='form1.html';
}
function save(){
    window.localStorage.setItem('campo1', $('#campo1').val());
}
function load(){
    $('#campo2').val(window.localStorage.getItem('campo1'));
}
function erase(){
    window.localStorage.removeItem('campo1');
}