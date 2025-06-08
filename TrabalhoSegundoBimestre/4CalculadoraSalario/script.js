let salario = document.getElementById("salario");
let cargo = document.getElementById("cargo");
let btCalcular = document.getElementById("btCalcular"); 
let salarioantigo = document.getElementById("salarioantigo");
let salarionovo = document.getElementById("salarionovo");
let diferenca = document.getElementById("diferenca");
let mensagem = " reais";
let c101 = 0.1;
let c102 = 0.2;
let c103 = 0.3;

function calculoTotal(){
    let salariovalue = Number(salario.value);
    let cargovalue = Number(cargo.value);

    if (cargovalue === 101){
        let diferencavalue = salariovalue * 0.1;
        let salarionovovalue = salariovalue * 1.1;
        
        salarioantigo.textContent = salariovalue + mensagem;
        salarionovo.textContent = salarionovovalue + mensagem;
        diferenca.textContent = diferencavalue + mensagem;
    } else{
        if (cargovalue === 102){
            let diferencavalue = salariovalue * 0.2;
            let salarionovovalue = salariovalue * 1.2;

            salarioantigo.textContent = salariovalue.toFixed(2) + mensagem;
            salarionovo.textContent = salarionovovalue.toFixed(2) + mensagem;
            diferenca.textContent = diferencavalue.toFixed(2) + mensagem;
        } else {
            if(cargovalue === 103){
            let diferencavalue = salariovalue * 0.3;
            let salarionovovalue = salariovalue * 1.3;

            salarioantigo.textContent = salariovalue.toFixed(2) + mensagem;
            salarionovo.textContent = salarionovovalue.toFixed(2) + mensagem;
            diferenca.textContent = diferencavalue.toFixed(2) + mensagem;
        } else {
            let diferencavalue = salariovalue * 0.4;
            let salarionovovalue = salariovalue * 1.4;

            salarioantigo.textContent = salariovalue.toFixed(2) + mensagem;
            salarionovo.textContent = salarionovovalue.toFixed(2) + mensagem;
            diferenca.textContent = diferencavalue.toFixed(2) + mensagem;
        }
    }
}
}
function zerarInput(){
    salario.value = "";
    cargo.value = "";
}