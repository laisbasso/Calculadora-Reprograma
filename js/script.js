var salarioMes = document.querySelector("#ganho-mes")
var horasDia = document.querySelector("#horas-dia")
var resposta = document.querySelector("#resposta") 

function calcularValorHora(){
    var horasTotais = horasDia.valueAsNumber * 22
    var valorHora = salarioMes.valueAsNumber / horasTotais

    resposta.textContent = "R$ " + valorHora.toFixed(2).replace('.', ',')
}