document.addEventListener('DOMContentLoaded', () => {
    const showRectangulo = document.getElementById('show-rectangulo');
    const showCirculo = document.getElementById('show-circulo');
    const rectanguloContainer = document.getElementById('rectangulo');
    const circuloContainer = document.getElementById('circulo');

    showRectangulo.addEventListener('click', () => {
        rectanguloContainer.classList.add('active');
        circuloContainer.classList.remove('active');
    });

    showCirculo.addEventListener('click', () => {
        circuloContainer.classList.add('active');
        rectanguloContainer.classList.remove('active');
    });
});


// Rectángulo
const btncalcular = document.getElementById('btncalcular');
const inputBase = document.getElementById('base');
const inputAltura = document.getElementById('altura');

const inputArea = document.getElementById('areres');
const inputPerimetro = document.getElementById('perimetro');
const inputDiametro = document.getElementById('diares');

btncalcular.addEventListener('click', () => {
    let base = parseFloat(inputBase.value);
    let altura = parseFloat(inputAltura.value);
    
    let area = base * altura;
    inputArea.value = `${area.toFixed(2)}`;

    let perimetro = 2 * base + 2 * altura;
    inputPerimetro.value = `${perimetro.toFixed(2)}`;

    let diagonal = Math.sqrt(base * base + altura * altura);
    inputDiametro.value = `${diagonal.toFixed(2)}`;
});

// Círculo
const btncalcular2 = document.getElementById('btncalcular2');
const inputDiametroCirculo = document.getElementById('diametro');

const inputAreaCirculo = document.getElementById('areaCirculo');
const inputPerimetroCirculo = document.getElementById('perimCirculo');
const inputRadio = document.getElementById('Radio');

btncalcular2.addEventListener('click', () => {
    let diametro = parseFloat(inputDiametroCirculo.value);
    const Pi = 3.14;

    let radio = diametro / 2;
    inputRadio.value = `${radio.toFixed(2)}`;

    let areaCirculo = Pi * radio * radio;
    inputAreaCirculo.value = `${areaCirculo.toFixed(2)}`;

    let perimetro = 2 * Pi * radio;
    inputPerimetroCirculo.value = `${perimetro.toFixed(2)}`;
});
