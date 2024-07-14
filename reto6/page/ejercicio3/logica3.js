const inputAchoPared = document.getElementById('anchoP');
const inputaltoPared = document.getElementById('altoP');

const inputAnchoLadrillo = document.getElementById('anchoL');
const inputAltoLadrillo = document.getElementById('altoL');

const resultAreaPared = document.getElementById('resAreaP');
const resultAreaLadrillo = document.getElementById('resAreaL');
const resultLadrillosTotales = document.getElementById('LadrillosTotales');

const BtnReiniciar = document.getElementById('reset')

function calcularAreaPared(anchopared, altoPared){
    const areapared = anchopared * altoPared

    return areapared
}


function calcularAreaLadrillo(anchoLadrillo, largoLadrillo){
    const areaLadrillo = anchoLadrillo * largoLadrillo
    return areaLadrillo
}

function calcularTotalLadrillos(areaPared, areaLadrillo){
    return Math.ceil(areaPared / areaLadrillo) 
}


document.getElementById('data-pared').addEventListener('submit', (e)=>{
    e.preventDefault();

    const anchopared = parseFloat(inputAchoPared.value)
    const altoPared = parseFloat(inputaltoPared.value)

    const areaPared = calcularAreaPared(anchopared, altoPared).toFixed(0);
    const resultAreapared = document.getElementById('resAreaP')
    
    resultAreapared.value = areaPared;
    
})

document.getElementById('data-ladrillo').addEventListener('submit', (e)=>{
    e.preventDefault();
    const anchoLadrillo = parseFloat(inputAnchoLadrillo.value);
    const largoLadrillo = parseFloat(inputAltoLadrillo.value);

    const areaLadrillo = calcularAreaLadrillo (anchoLadrillo, largoLadrillo).toFixed(0);

    const resultAreaLadrillo = document.getElementById('resAreaL')
    resultAreaLadrillo.value = areaLadrillo;
})

document.getElementById('btnCalcular').addEventListener('click', ()=>{
    
    const areaPared = parseFloat(resultAreaPared.value)
    const areaLadrillo = parseFloat(resultAreaLadrillo.value)

    if(!isNaN(areaPared) && !isNaN(areaLadrillo) && areaLadrillo > 0){
        const totalLadrillos = calcularTotalLadrillos(areaPared, areaLadrillo).toFixed(0);
        resultLadrillosTotales.value = totalLadrillos
    }else{
        alert('por favor, calcula primero las areas de la pared y del ladrillo');
    }

})

BtnReiniciar.addEventListener('click', () => {
    inputAchoPared.value = ''
    inputaltoPared.value = ''
    inputAnchoLadrillo.value = ''
    inputAltoLadrillo.value = ''
    resultAreaPared.value = ''
    resultAreaLadrillo.value = ''
    resultLadrillosTotales.value = ''
})