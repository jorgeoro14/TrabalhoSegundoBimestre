let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let btCalcular = document.getElementById("btCallcular");
let valorIMC = document.getElementById("valorIMC");
let classificacaoIMC = document.getElementById("classificacaoIMC");
 
function valorEClassificacaoIMC(){
    let pesovalue = Number(peso.value);
    let alturavalue = Number(altura.value);
    let calculoIMC = pesovalue / (alturavalue * alturavalue);

    valorIMC.textContent = calculoIMC
        if(calculoIMC < 18.5){
            classificacaoIMC.textContent = "Abaixo do Peso";
        } else {
            if (calculoIMC >= 18.5 && calculoIMC <= 24.9){
                classificacaoIMC.textContent = "Peso Normal";
            } else {
                if(calculoIMC >= 25 && calculoIMC <=29.9){
                    classificacaoIMC.textContent = "Sobrepeso";
                } else {
                    if(calculoIMC >= 30 && calculoIMC <= 34.9){
                        classificacaoIMC.textContent = "Obesidade Grau 1";
                    } else {
                        if (calculoIMC >= 35 && calculoIMC <= 39.9){
                            classificacaoIMC.textContent = "Obesidade Grau 2";
                        } else {
                            if (calculoIMC >= 40){
                                classificacaoIMC.textContent = "Obesidade Grau 3";
                            }
                        }
                    }
                }
            }
        }
}



function zerarInput(){
    peso.value = "";
    altura.value = "";
}
