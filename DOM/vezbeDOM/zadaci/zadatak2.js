// ----- Napisati f-ju koja za uneti broj okrece cifre u broju. Rezultat ispisuje u novom inputu. (4532 -> 2354)
// Napisati f-ju koja iz textarea uzima tekst i posle svake tacke ubacuje space ako on nedostaje.
// Napisati f-ju koja iz stringa uklanja sve sto se nalazi u zagradama. Rezultat ispisuje u paragrafu.

const btn = document.querySelector('button')
const unos = document.querySelector('#broj')
const rezultat = document.querySelector('#resenje')

const obrnator = (jbro) => {

    return jbro.split("").reverse().join("")
}

btn.addEventListener('click', () => {

    if(unos.value == ''){
    alert('Unesite br')
    return
}

 rezultat.value = obrnator(unos.value)

})