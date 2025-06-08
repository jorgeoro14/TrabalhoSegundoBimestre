let Nivel = document.getElementById("Nivel");
let HorasAula = document.getElementById("HorasAula");
let btCalcular = document.getElementById("btCalcular"); 
let SalarioTotal = document.getElementById("SalarioTotal");
let mensagem = "R$";
let nivel1 = 12;
let nivel2 = 17;
let nivel3 = 25;

function calculoSalario(){
    let HorasAulaValue = Number(HorasAula.value);
    let NivelValue = Nivel.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    let calc1 = HorasAulaValue * 4 * nivel1;
    let calc2 = HorasAulaValue * 4 * nivel2;
    let calc3 = HorasAulaValue * 4 * nivel3;

    
    if(NivelValue === "nivel 1" || NivelValue === "nivel1" || NivelValue === "1"){
        SalarioTotal.textContent = mensagem + calc1.toFixed(2);
    } else {
        if(NivelValue === "nivel 2" || NivelValue === "nivel2" || NivelValue === "2"){
            SalarioTotal.textContent = mensagem + calc2.toFixed(2);
        } else {
            if(NivelValue === "nivel 3" || NivelValue === "nivel3" || NivelValue === "3"){
                SalarioTotal.textContent = mensagem + calc3.toFixed(2);
            } else {
                if(NivelValue !== "nivel 1" && NivelValue !== "nivel1" && NivelValue !== "1" && NivelValue !== "nivel 2" && NivelValue !== "nivel2" && NivelValue !== "2" && NivelValue !== "nivel 3" && NivelValue !== "nivel3" && NivelValue !== "3"){
                    SalarioTotal.textContent = "Nivel Inválido.";
                }
            }
        }
    }
}

function zerarInput (){
    Nivel.value = "";
    HorasAula.value = "";
}
