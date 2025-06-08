let valorProduto = document.getElementById("valorProduto");
let formaPagamento = document.getElementById("formaPagamento");
let btCalcular = document.getElementById("btCalcular"); 
let ValorTotal = document.getElementById("ValorTotal");
let mensagem = " reais";
let a = 0.9;
let b = 0.85;
let c = 1.0;
let d = 1.10;

function calculoTotal(){
    let valorProdutovalue = Number(valorProduto.value);
    let formaPagamentovalue = formaPagamento.value;
    let calcA = valorProdutovalue * a;
    let calcB = valorProdutovalue * b;
    let calcC = valorProdutovalue * c;
    let calcD = valorProdutovalue * d;
    
    if(formaPagamentovalue === "a" || formaPagamentovalue === "A"){
        ValorTotal.textContent = calcA.toFixed(2);
    } else {
        if(formaPagamentovalue === "b" || formaPagamentovalue === "B"){
            ValorTotal.textContent = calcB.toFixed(2);
        } else {
            if(formaPagamentovalue === "c" || formaPagamentovalue === "C"){
                ValorTotal.textContent = calcC.toFixed(2);
            } else {
                if(formaPagamentovalue === "d" || formaPagamentovalue === "D"){
                    ValorTotal.textContent = calcD.toFixed(2);
                } else {
                    if(formaPagamentovalue !== "a" && formaPagamentovalue !== "A" && formaPagamentovalue !== "b" && formaPagamentovalue !== "B" && formaPagamentovalue !== "c" && formaPagamentovalue !== "C" && formaPagamentovalue !== "d" && formaPagamentovalue !== "D"){
                        ValorTotal.textContent = "Forma de Pagamento Inválida.";
                    }
                }
            }
        }
    }
}
function zerarInput (){
    valorProduto.value = "";
    formaPagamento.value = "";
}
