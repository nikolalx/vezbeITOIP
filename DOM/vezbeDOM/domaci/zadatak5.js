// Napisati kod koji za uneti broj vraca broj sa ciframa u obrnutom redosledu.

const inputNumber = document.querySelector('#broj')

const output = document.querySelector('#resenje')

const btn = document.querySelector('#btn')

const reverse = () => {
    // output.value = inputNumber.value.split('').reverse().join('')

    let broj = inputNumber.value
    let resenje = 0
    let cifra 

    while (broj > 0) {
        cifra = broj % 10
        resenje = resenje * 10 + cifra
        broj = Math.floor(broj / 10)
    
    output.value = resenje
    }

    }

btn.addEventListener('click', () => {
    reverse()
})