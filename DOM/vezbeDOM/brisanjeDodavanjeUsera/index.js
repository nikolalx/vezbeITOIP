const form = document.querySelector('form')

const komsijeContainer = document.querySelector('.komsije_container')

const inputIme = document.querySelector('.input_name')

const inputPrezime = document.querySelector('.input_prezime')

const inputGodine = document.querySelector('.input_years')

const spratnost = document.querySelector('#spratnost')

const submit = document.querySelector('#submit')

const komsije = [
    {
        ime: 'Radivoje',
        prezime: 'Stanojevic',
        godine: 55,
        sprat: 5
    },
    {
        ime: 'Danka',
        prezime: 'Mitrovic',
        godine: 65,
        sprat: 1
    },
    {
        ime: 'Dragutin',
        prezime: 'Topic',
        godine: 30,
        sprat: 3
    }
]

const renderujKomsije = (arr, container) => {

    arr.forEach((el, index) => {

        const divContainer = document.createElement('div')
        divContainer.style.display = 'flex'
        divContainer.style.flexDirection = 'column'
        divContainer.style.alignItems = 'center'

        const pIme = document.createElement('p')
        pIme.textContent = el.ime

        const pPrezime = document.createElement('p')
        pPrezime.textContent = el.prezime

        const pGodine = document.createElement('p')
        pGodine.textContent = el.godine

        const pSprat = document.createElement('p')
        pSprat.textContent = el.sprat

        const btn = document.createElement('button')
        btn.textContent = 'Obrisi'
        btn.classList.add('delete')
        btn.style.fontSize = '3rem'
        btn.style.color = '#FFF'
        btn.style.backgroundColor = '#000'
        btn.style.cursor = 'pointer'

        btn.addEventListener('click', () => {
            arr.splice(index, 1)
            container.textContent = ''
            renderujKomsije(arr, container)
            dodajKomsiju(arr, container)

        })

        divContainer.append(pIme, pPrezime, pGodine, pSprat, btn)
        container.appendChild(divContainer)
    })


}

renderujKomsije(komsije, komsijeContainer)
komsijeContainer.style.display = 'flex'
komsijeContainer.style.flexDirection = 'row'
komsijeContainer.style.columnGap = '2rem'
komsijeContainer.style.fontSize = '2.5rem'
komsijeContainer.style.justifyContent = 'space-around'

let spratnostZgrade = 10

for (let i = 0; i <= spratnostZgrade; i++) {
    const option = document.createElement('option')
    option.textContent = i
    spratnost.append(option)
}

const pushArray = (arr) => {
    let obj = {
        ime: inputIme.value,
        prezime: inputPrezime.value,
        godine: inputGodine.value,
        sprat: spratnost.value
    }

    komsijeContainer.textContent = ''

    arr.push(obj)
}

// const dodajKomsiju = (arr, container) => {

//     const divContainer = document.createElement('div')
//     divContainer.style.display = 'flex'
//     divContainer.style.flexDirection = 'column'
//     divContainer.style.alignItems = 'center'

//     const pIme = document.createElement('p')
//     pIme.textContent = inputIme.value

//     const pPrezime = document.createElement('p')
//     pPrezime.textContent = inputPrezime.value

//     const pGodine = document.createElement('p')
//     pGodine.textContent = inputGodine.value

//     const pSprat = document.createElement('p')
//     pSprat.textContent = spratnost.value

//     const btn = document.createElement('button')
//     btn.textContent = 'Obrisi'
//     btn.classList.add('delete')
//     btn.style.fontSize = '3rem'
//     btn.style.color = '#FFF'
//     btn.style.backgroundColor = '#000'
//     btn.style.cursor = 'pointer'

//     btn.addEventListener('click', () => {
//         arr.splice(-1, 1)
//         container.textContent = ''
//         renderujKomsije(arr, container)
//         dodajKomsiju(arr, container)
//     })

//     divContainer.append(pIme, pPrezime, pGodine, pSprat, btn)

//     arr += pIme, pPrezime, pGodine, pSprat, btn

//     container.append(divContainer)
// }

form.addEventListener('submit', (event) => {
    event.preventDefault()

    pushArray(komsije)

    renderujKomsije(komsije, komsijeContainer)

})