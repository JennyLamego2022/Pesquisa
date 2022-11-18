let pegaResultado = document.querySelector("#resultado")
let pegaNumero1= document.querySelector("#numero1")
let pegaNumero2= document.querySelector("#numero2")
let pegaNumero3= document.querySelector("#numero3")
let pegaNumero4= document.querySelector("#numero4")
let pegaNumero5= document.querySelector("#numero5")



pegaNumero1.addEventListener('click', ()=>{
    pegaResultado.innerHTML = `Nota  ${pegaNumero1.value} escolhida. Se estiver correta, favor ENVIAR sua pesquisa.`
  })
pegaNumero2.addEventListener('click', ()=>{
    pegaResultado.innerHTML = `Nota  ${pegaNumero2.value} escolhida. Se estiver correta, favor ENVIAR sua pesquisa.`
})
pegaNumero3.addEventListener('click', ()=>{
    pegaResultado.innerHTML = `Nota  ${pegaNumero3.value} escolhida. Se estiver correta, favor ENVIAR sua pesquisa.`
})
pegaNumero4.addEventListener('click', ()=>{
    pegaResultado.innerHTML = `Nota  ${pegaNumero4.value} escolhida. Se estiver correta, favor ENVIAR sua pesquisa.`
})
pegaNumero5.addEventListener('click', ()=>{
    pegaResultado.innerHTML = `Nota ${pegaNumero5.value} escolhida. Se estiver correta, favor ENVIAR sua pesquisa.`
})








