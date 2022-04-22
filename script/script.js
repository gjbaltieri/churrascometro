//carne - 400gr por pessoa + de 6 horas = 650gr

//cerveja - 1200 ml por pessoa + 6 horas = 2000ml

//refri - 1000ml/pessoa + 6 horas = 1500ml

//crinças = 0,5 pessoas

function calcular () {
        console.log ("Calculando...")
        let inputAdultos = document.getElementById("adultos");
        let inputCrianças = document.getElementById("criancas");
        let inputHoras = document.getElementById("duracao");
        let resultado = document.getElementById("resultado");
    
        let adultos = inputAdultos.value;
        let crianças = inputCrianças.value;
        let horas = inputHoras.value;
        

        let totalCarne = (carne(horas) * adultos + (carne(horas) * crianças / 2)) / 1000;
        let totalCerveja = (latasCerveja (horas) * adultos) / 355;
        let totalBebidas = (petsBebidas (horas) * adultos + (petsBebidas(horas) * crianças / 2)) / 2000;



        resultado.innerHTML = `<p> ${totalCarne}kg de Carne </p>`
        resultado.innerHTML += `<p> ${Math.ceil(totalCerveja)} latas de cerveja </p>`
        resultado.innerHTML += `<p> ${Math.ceil(totalBebidas)} pets de 2l de refrigerante </p>`

};


function carne (horas) {
if (horas >=6) {
    return 650
} 
else {return 400}
};

function latasCerveja (horas) {
if (horas >=6) {return 2000
}
else {return 1200}
};

function petsBebidas(horas) {
if (horas >=6) {return 1500
} 
else {return 1000}
};









