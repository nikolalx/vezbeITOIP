// Napisati kod koji racuna faktorijel broja

const br = document.querySelector('#broj')
const rezultat = document.querySelector('#resenje')

const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {

    let resenje = 1

    for(let i = 1; i <= br.value; i++){
        resenje *= i
    }

    rezultat.value = resenje
})