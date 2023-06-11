//utvrditi da li je prost broj i reci to u paragrafu

const forma = document.querySelector('form')
const unos = document.querySelector('input')
const p = document.querySelector('p')

const prostostBroja = (cifre) => {

    for(let i = 2; i < Math.sqrt(cifre); i++){
        if(cifre % i == 0)
            return false
        
    }
    return true
}

forma.addEventListener('submit', (event) => {
    event.preventDefault()

    if(prostostBroja(+unos.value) == true) {
        p.textContent = 'Broj je prost'
        return
    }
        p.textContent = 'Broj nije prost'

})