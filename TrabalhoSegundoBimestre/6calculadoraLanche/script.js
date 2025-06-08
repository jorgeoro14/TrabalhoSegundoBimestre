let codigo = document.getElementById("codigo");
let quantidade = document.getElementById("quantidade");
let btCalcular = document.getElementById("btCalcular"); 
let ValorTotal = document.getElementById("ValorTotal");
let mensagem = " reais";

function calculoTotal(){
    let codigovalue = Number(codigo.value);
    let quantidadevalue = Number(quantidade.value);
    let calc1 = quantidadevalue * 11;
    let calc2 = quantidadevalue * 8.5;
    let calc3 = quantidadevalue * 8;
    let calc4 = quantidadevalue * 9;
    let calc5 = quantidadevalue * 10;
    let calc6 = quantidadevalue * 4.5;

    if (codigovalue === 1){
        ValorTotal.textContent = calc1.toFixed(2) + mensagem;
    } else {
        if (codigovalue === 2){
            ValorTotal.textContent = calc2.toFixed(2) + mensagem;
        } else {
            if (codigovalue === 3){
                ValorTotal.textContent = calc3.toFixed(2) + mensagem;
            } else{
                if (codigovalue === 4){
                ValorTotal.textContent = calc4.toFixed(2) + mensagem;
            } else{
                if (codigovalue === 5){
                ValorTotal.textContent = calc5.toFixed(2) + mensagem;
            } else {
                if (codigovalue === 6){
                ValorTotal.textContent = calc6.toFixed(2) + mensagem;
            } if (codigovalue !== 1 && codigovalue !== 2 && codigovalue !== 3 && codigovalue !== 4 && codigovalue !== 5 && codigovalue !== 6){
                ValorTotal.textContent = "Código inválido."
            }
            }
            }
            }
        }
    }

}