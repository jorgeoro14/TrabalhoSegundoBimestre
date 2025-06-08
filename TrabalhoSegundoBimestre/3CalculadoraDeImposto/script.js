let valor = document.getElementById("valor");
let ano = document.getElementById("ano");
let btCalcular = document.getElementById("btCalcular");
let valorImposto = document.getElementById("valorImposto");
let reais = "reais";

function valorEClassificacaoIMC(){
    let valorvalue = Number(valor.value);
    let anovalue = Number(ano.value);
    
    if (anovalue < 1990){
        let calculoAntigos = valorvalue * 0.01;
        valorImposto.textContent = calculoAntigos + reais;
    } else {
        let calculosNovos = valorvalue * 0.015;
        valorImposto.textContent = calculosNovos + reais;
    } 
}



function zerarInput(){
    peso.value = "";
    altura.value = "";
}
