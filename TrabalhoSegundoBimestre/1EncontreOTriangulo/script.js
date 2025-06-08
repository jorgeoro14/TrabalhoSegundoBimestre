let Lado1 = document.getElementById("Lado1");
let Lado2 = document.getElementById("Lado2");
let Lado3 = document.getElementById("Lado3");
let btCalcular = document.getElementById("btCallcular");
let PodeSer = document.getElementById("PodeSer");
let Tipo = document.getElementById("Tipo");
let SimTriangulo = "Sim! Essas podem ser medidas de um triângulo!";
let NaoTriangulo = "Não! Essas não podem ser medidas de um triângulo!";
let Equilatero = "Isso é um tiângulo equilátero.";
let Isosceles = "Isso é um triângulo isósceles.";
let Escaleno = "Isso é um triângulo Escaleno";
 
function verificarTriangulo(){
 //Variaveis
 let l1 = Number(Lado1.value);
 let l2 = Number(Lado2.value);
 let l3 = Number(Lado3.value);
 let l1l2 = l1 + l2;
 let l1l3 = l1 + l3;
 let l2l3 = l2 + l3;

 if (l1 > l1l2 || l2 > l1l2 || l3 > l1l2 || l1 > l1l3 || l2 > l1l3 || l3 > l1l3 || l1 > l2l3 || l2 > l2l3 || l3 > l2l3){
    PodeSer.textContent = NaoTriangulo;
    Tipo.textContent = NaoTriangulo
 } else {
    PodeSer.textContent = SimTriangulo;
    if (l1 === l2 && l1 === l3 && l3 === l2){
        Tipo.textContent = Equilatero;
    }else{
        if (l1 === l2 && l1 !== l3 || l2 === l3 && l2 !== l1 || l3 === l1 && l3 !== l2){
            Tipo.textContent = Isosceles;
        } else {
            if(l1 !== l2 && l2 !== l3 && l3 !== l1){
                Tipo.textContent = Escaleno;
            }
        }
    }
 }
}




function zerarInput(){
    Lado1.value = "";
    Lado2.value = "";
    Lado3.value = "";
}
