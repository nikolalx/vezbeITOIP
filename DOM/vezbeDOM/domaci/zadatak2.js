// Napisati kod koji racuna faktorijel broja

const br = document.querySelector('#broj')

const resenje = document.querySelector('#resenje')

const btn = document.querySelector('#btn')

const faktorijel = () => {
    let rezultat = 1

    for(let i = 1; i <= +br.value; i++){
        rezultat *= i
    }

    resenje.value = rezultat
}

btn.addEventListener('click', () => {
    faktorijel()
})
