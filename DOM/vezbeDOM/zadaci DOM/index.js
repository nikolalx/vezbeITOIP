// const forma = document.querySelector('form')
// const unos = document.querySelector('#broj')
// const rezultat = document.querySelector('.rezultat')


// Napisati f-ju koja iz forme kupi broj i proverava da li je broj prost. Rezultat funkcije se ispisuje u paragrafu.

function prostBroj(unos){
    let prost = false

    for(let i = 2; i < Math.sqrt(+unos); i++){
        if(+unos % i === 0){
            prost = true
        }
    }
    if(prost){
        console.log(`${unos} nije prost broj`);
    } else{
        console.log(`${unos} je prost br`);
    }
    
}

console.log(prostBroj(1231));

// forma.addEventListener('submit',(event) => {
// event.preventDefault()

// if(unos.value == ''){
//     alert('Pogresan Unos')
// }

// })