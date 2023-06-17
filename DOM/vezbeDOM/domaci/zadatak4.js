// Napisati kod koji refaktorise tekst tako da posle svake tacke na kraju 
// recenice unese razmak za novu recenicu koja sledi.
// (opciono 1. Pokusajte da resite zadatak za sve interpunkcijske znake kojima terminisemo recenicu)
// (opciono 2. Razmislite kako biste napisali funkciju koja ce regulisati problem ukoliko se recenica zavrsava sa ...)

//s. s...s.h

const text = document.querySelector('#text')

const btn = document.querySelector('#btn')

const refaktorisi = () => {
    poveznik = text.value
    let str = ''

    for(let i = 0; i < poveznik.length; i++){
        str += text.textContent.charAt(i)
        if(text.textContent.charAt(i) === '.' && text.textContent.charAt(i + 1) != '.' && text.textContent.charAt(i - 1) != '.')
            str += ' '
        
        if(text.textContent.charAt(i) === '.' && text.textContent.charAt(i - 2) === '.' && text.textContent.charAt(i - 1) === '.')
            str += ' '

        if(text.textContent.charAt(i) === '?' || text.textContent.charAt(i) === '!')
            str += ' '
    }

    text.textContent = str
}

btn.addEventListener('click', () => {
    refaktorisi()
})