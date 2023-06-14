// Napisati kod koji za uneti broj vraca broj sa ciframa u obrnutom redosledu.

const br = document.querySelector('#broj')

const rezultat = document.querySelector('#resenje')

const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {


    let cifra
    let result = 0
    let broj = br.value

    while (broj > 0) {
        cifra = broj % 10
        result = result * 10 + cifra
        broj = Math.floor(broj / 10)
    }

    let str = ''
    for(let i = br.value.length - 1; i >= 0; i--){
        str += br.value.charAt(i)
    }
    rezultat.value = str
})