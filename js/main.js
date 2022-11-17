let pegaResultado = document.querySelector("#resultado")
let pegaNumero1= document.querySelector("#numero1")
let pegaNumero2= document.querySelector("#numero2")
let pegaNumero3= document.querySelector("#numero3")
let pegaNumero4= document.querySelector("#numero4")
let pegaNumero5= document.querySelector("#numero5")



pegaNumero1.addEventListener('click', ()=>{
    pegaResultado.innerHTML = `a nota  ${pegaNumero1.value}`
  })
pegaNumero2.addEventListener('click', ()=>{
  pegaResultado.innerHTML = `a nota  ${pegaNumero2.value}`
})
pegaNumero3.addEventListener('click', ()=>{
    pegaResultado.innerHTML = `a nota  ${pegaNumero3.value}`
})
pegaNumero4.addEventListener('click', ()=>{
  pegaResultado.innerHTML = `a nota  ${pegaNumero4.value}`
})
pegaNumero5.addEventListener('click', ()=>{
 pegaResultado.innerHTML = `a nota ${pegaNumero5.value}`
})





