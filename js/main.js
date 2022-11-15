let pegaResultado = document.querySelector("#resultado")
let pegaNumero1= document.querySelector("#numero1")
let pegaNumero2= document.querySelector("#numero2")
let pegaNumero3= document.querySelector("#numero3")
let pegaNumero4= document.querySelector("#numero4")
let pegaNumero5= document.querySelector("#numero5")





pegaNumero1.addEventListener('click', ()=>{
    pegaResultado.innerHTML = 'A nota escolhida foi  ${pegaNumero1.value}'
})
