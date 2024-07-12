const inputBaseMayor = document.getElementById('baseMayor');
const inputbaseMenor = document.getElementById('baseMenor');
const inputaltura = document.getElementById('Altura');

function calcularAreaTrapecio(BaseMayor, baseMenor, altura) {
    return ((BaseMayor + baseMenor) * altura) / 2;
}

function calcularPesticida(area) {
    return area * 1.5;
}

function calcularPerimetroTrapecio(BaseMayor, baseMenor, altura) {
    const ladoOblicuo = Math.sqrt(Math.pow((BaseMayor - baseMenor) / 2, 2) + Math.pow(altura, 2));
    return BaseMayor + baseMenor + 2 * ladoOblicuo;
}

document.getElementById('data-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const baseMayor = parseFloat(inputBaseMayor.value);
    const baseMenor = parseFloat(inputbaseMenor.value);
    const altura = parseFloat(inputaltura.value);

    const areaTrapecio = calcularAreaTrapecio(baseMayor, baseMenor, altura).toFixed(2);
    const pesticida = calcularPesticida(areaTrapecio).toFixed(2);
    const perimetroTrapecio = calcularPerimetroTrapecio(baseMayor, baseMenor, altura).toFixed(2);

    const result_area = document.getElementById('resultadoArea');
    const result_perimetro = document.getElementById('resultadoPerimetro');
    const result_pesticida = document.getElementById('resultadoPesticida');

    result_area.value = areaTrapecio + " m²";
    result_perimetro.value = perimetroTrapecio + " m²";
    result_pesticida.value = pesticida + " l";
});
