const time1 = document.getElementById('tiempo1')
const time2 = document.getElementById('tiempo2')
const time3 = document.getElementById('tiempo3')
const time4 = document.getElementById('tiempo4')
const time5 = document.getElementById('tiempo5')
const Inputresultado = document.getElementById('Resultado')
const btnReiniciar = document.getElementById('btnreset')
const btncalcular = document.getElementById('btncalcular')


btncalcular.addEventListener('click', () =>{

    let tiempo1 = parseFloat(time1.value)
    let tiempo2 = parseFloat(time2.value)
    let tiempo3 = parseFloat(time3.value)
    let tiempo4 = parseFloat(time4.value)
    let tiempo5 = parseFloat(time5.value)

    let resultado = (tiempo1 + tiempo2 + tiempo3 + tiempo4 + tiempo5) / 5
    Inputresultado.value = `${resultado.toFixed(2)}`
})



btnReiniciar.addEventListener('click', () => {
    time1.value = ''
    time2.value = ''
    time3.value = ''
    time4.value = ''
    time5.value = ''
    Inputresultado.value = ''
})