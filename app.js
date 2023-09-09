const boton = document.getElementById('boton');
const parraf = document.getElementById('color')

function generaCoAleHexade(){
    let digitos = '0123456789ABCDEF'
    let colorEX = '#'
    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16)
        colorEX += digitos[indiceAleatorio]
        
    }
    return colorEX
}

boton.addEventListener('click', function cambioColor(){
    let newcolor = generaCoAleHexade();
    parraf.textContent = newcolor
    document.body.style.backgroundColor = newcolor
})