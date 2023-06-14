// Nasisati kod koji ce izlistati na stranici sve zaposlene iz dole navedenog niza.
// (opciono: Napraviti input polje u koje korisnik moze da unese prvo inputSlovo imena 
// na koje zeli da mu se izlistaju zaposleni.)

const inputSlovo = document.querySelector('#ime')

const btn = document.querySelector('#btn')

const body = document.body

const divIspis = document.createElement('div')

divIspis.classList.add('row')

body.appendChild(divIspis)

let zaposleni = [
    {
        ime: 'Nikola',
        prezime: 'Tijanic',
        zanimanje: 'Frontend developer',
        iskustvo: 3,
        plata: 2500
    },
    {
        ime: 'Marko',
        prezime: 'Markovic',
        zanimanje: 'Project menadzer',
        iskustvo: 7,
        plata: 1800
    },
    {
        ime: 'Jana',
        prezime: 'Jovanovic',
        zanimanje: 'HR rekruter',
        iskustvo: 2,
        plata: 1000
    },
    {
        ime: 'Nikola',
        prezime: 'Tijanic',
        zanimanje: 'Frontend developer',
        iskustvo: 3,
        plata: 2500
    },
    {
        ime: 'Marko',
        prezime: 'Markovic',
        zanimanje: 'Project menadzer',
        iskustvo: 7,
        plata: 1800
    },
    {
        ime: 'Jana',
        prezime: 'Jovanovic',
        zanimanje: 'HR rekruter',
        iskustvo: 2,
        plata: 1000
    }
]


    zaposleni.forEach(radnik => {
        
        const divRadnik = document.createElement('div')
        divRadnik.classList.add('item')
        divRadnik.style.textAlign='center'

        const pIme = document.createElement('p')
        pIme.textContent = radnik.ime

        const pPrezime = document.createElement('p')
        pPrezime.textContent = radnik.prezime

        const pZanimanje = document.createElement('p')
        pZanimanje.textContent = radnik.zanimanje

        const pIskustvo = document.createElement('p')
        pIskustvo.textContent = radnik.iskustvo

        const pPlata = document.createElement('p')
        pPlata.textContent = radnik.plata

        divRadnik.append(pIme, pPrezime, pZanimanje, pIskustvo, pPlata)

        divIspis.append(divRadnik)
    });

   



btn.addEventListener('click', () => {

    let naSlovo = zaposleni.filter((radnik) => {
        return radnik.ime.charAt(0) === inputSlovo.textContent
    })

    const pNaSlovo = document.createElement('p')
    pNaSlovo.textContent = naSlovo

    divIspis.append(pNaSlovo)
})