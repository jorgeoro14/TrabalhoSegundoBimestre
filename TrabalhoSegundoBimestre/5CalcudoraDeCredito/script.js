let SaldoMedio = document.getElementById("SaldoMedio");
let btCalcular = document.getElementById("btCalcular");
let Saldo = document.getElementById("Saldo");
let Credito = document.getElementById("Credito");

function resultadoSaldo(){
    let SaldoValue = Number(SaldoMedio.value);
    
    Saldo.textContent = "Seu saldo medio é de " + SaldoValue + " reais";
}

function valorCredito(){
    let SaldoValue = Number(SaldoMedio.value);
    let CalcCredito1 = SaldoValue * 0.2;
    let CalcCredito2 = SaldoValue * 0.3;
    let CalcCredito3 = SaldoValue * 0.4;
    let MensagemCredito = "Você tem direito a "
    let mensagemCredito2 = " reais de crédito"

    if (SaldoValue <= 200){
        Credito.textContent = "Você não tem direito a crédito";
    } else {
        if (SaldoValue >= 201 && SaldoValue <= 400){
            Credito.textContent = MensagemCredito + CalcCredito1 + mensagemCredito2;
        } else {
            if (SaldoValue >= 401 && SaldoValue <= 600){
                Credito.textContent = MensagemCredito + CalcCredito2 + mensagemCredito2;
            } else {
                if (SaldoValue >= 601){
                    Credito.textContent = MensagemCredito + CalcCredito3 + mensagemCredito2;
                }
            }
        }
    }
}

btCalcular.onclick = function(){
    resultadoSaldo(); valorCredito();
}