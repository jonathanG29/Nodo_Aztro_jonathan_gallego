const btncalcular = document.getElementById('btncalcular')

// rectangulo 
btncalcular.addEventListener('click', ()=>{
    
    let alt = parseInt(document.getElementById("alt").value);
    let base = parseInt(document.getElementById("bas").value);
    
    area = base * alt;
    perimetro = 2 * base + 2 * alt;
    diagonal = Math.sqrt(base * base + alt * alt);
    
    document.getElementById("areres").innerHTML = area
    document.getElementById("perires").innerHTML = perimetro
    document.getElementById("diares").innerHTML = diagonal
})

// circulo

const btncalcular2 = document.getElementById('btncalcular2')


btncalcular2 = addEventListener('click', ()=>{

let diametro = parseInt(document.getElementById("diametro").value)


const Pi = 3.14159;

radio = diametro / 2
areaCirculo = Pi * radio*radio
perimetro = 2*Pi*radio

document.getElementById("areares").innerHTML = areaCirculo
document.getElementById("perimres").innerHTML = perimetro
document.getElementById("radiores").innerHTML = radio


})



