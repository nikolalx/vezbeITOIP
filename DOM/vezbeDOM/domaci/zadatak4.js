// Napisati kod koji refaktorise tekst tako da posle svake tacke na kraju 
// recenice unese razmak za novu recenicu koja sledi.
// (opciono 1. Pokusajte da resite zadatak za sve interpunkcijske znake kojima terminisemo recenicu)
// (opciono 2. Razmislite kako biste napisali funkciju koja ce regulisati problem ukoliko se recenica zavrsava sa ...)

//s. s...s.h

const textInput = document.querySelector('#text')
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    let str = textInput.value
    let refText = ''
    let brojac = 0

    for(let i = 0; i < str.length; i++){
        refText += str.charAt(i)
        
        if(str.charAt(i) === '.' && str.charAt(i + 1) === '.')
            brojac +1

        if(str.charAt(i) === '.' && brojac === 2 && str.charAt(i + 1) !== '.')
            refText += ' '
            brojac = 0

        if(str.charAt(i) === '.' && str.charAt(i + 1) != '.' && brojac === 0)
            refText += ' '

        if(str.charAt(i) === '!' || str.charAt(i) === '?')
            refText += ' '
    }

    textInput.value = refText
})