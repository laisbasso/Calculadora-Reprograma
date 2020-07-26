var valorHora = document.querySelector("#valor-hora")
var horasProjeto = document.querySelector("#horas-projeto")
var resposta = document.querySelector("#resposta")

function calcular(){
    var calculo = valorHora.valueAsNumber * horasProjeto.valueAsNumber

    resposta.textContent = "R$ " + calculo.toFixed(2).replace('.', ',')
}