// Napisati kod koji ce racunati stepen broja. Unosi se osnova i eksponent.

const br = document.querySelector('#broj')
const ex = document.querySelector('#exponent')

const rezultat = document.querySelector('#resenje')

const btn = document.querySelector('#btn')

const stepenovanje = () => {

    let resenje = 1

    if(br.value === '' || ex.value === '')
        alert('drujkane...')

    for(let i = 0; i < +ex.value; i++){
        resenje *= +br.value
    } 

    rezultat.value = resenje
}

btn.addEventListener('click', () => {
    stepenovanje()
})