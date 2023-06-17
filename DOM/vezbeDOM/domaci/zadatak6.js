// Nasisati kod koji ce izlistati na stranici sve zaposlene iz dole navedenog niza.
// (opciono: Napraviti input polje u koje korisnik moze da unese prvo inputSlovo imena 
// na koje zeli da mu se izlistaju zaposleni.)

const inputName = document.querySelector('#ime')

const btn = document.querySelector('#btn')

const body = document.body

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

const ispis = document.createElement('div')
ispis.classList.add('row')

ispis.style.display = 'flex'
ispis.style.flexDirection = 'column'
ispis.style.alignItems = 'center'
ispis.style.rowGap = '1rem'
body.appendChild(ispis)

// function prvoSlovo(radnik) {

//     radnik.filter(el => el.ime.charAt(0) === inputName.value)

//     return 

// }


 zaposleni.forEach(radnik => {

        let radnici = document.createElement('div')
        radnici.classList.add('item')

        let pIme = document.createElement('p')
        pIme.textContent = radnik.ime

        let pPrezime = document.createElement('p')
        pPrezime.textContent = radnik.prezime

        let pZanimanje = document.createElement('p')
        pZanimanje.textContent = radnik.zanimanje

        let pIskustvo = document.createElement('p')
        pIskustvo = radnik.iskustvo

        let pPlata = document.createElement('p')
        pPlata = radnik.plata

        radnici.append(pIme, pPrezime, pZanimanje, pIskustvo, pPlata)
        ispis.appendChild(radnici)

        radnici.style.width = '100px'

    // if(radnik.ime.charAt(0) === inputName.value)

    //     let radnici = document.createElement('div')
    //     radnici.classList.add('item')

    //     let pIme = document.createElement('p')
    //     pIme.textContent = radnik.ime

    //     let pPrezime = document.createElement('p')
    //     pPrezime.textContent = radnik.prezime

    //     let pZanimanje = document.createElement('p')
    //     pZanimanje.textContent = radnik.zanimanje

    //     let pIskustvo = document.createElement('p')
    //     pIskustvo = radnik.iskustvo

    //     let pPlata = document.createElement('p')
    //     pPlata = radnik.plata

    //     radnici.append(pIme, pPrezime, pZanimanje, pIskustvo, pPlata)
    //     ispis.appendChild(radnici)

    //     radnici.style.width = '100px'



});


btn.addEventListener('click', () => {

    while(ispis.hasChildNodes()){
        ispis.removeChild(ispis.firstChild)
    }

    setTimeout(() => {
        let arr = zaposleni.filter(el => el.ime.charAt(0) === inputName.value)


        arr.forEach(radnik  => {
            let radnici = document.createElement('div')
            radnici.classList.add('item')
    
            let pIme = document.createElement('p')
            pIme.textContent = radnik.ime
    
            let pPrezime = document.createElement('p')
            pPrezime.textContent = radnik.prezime
    
            let pZanimanje = document.createElement('p')
            pZanimanje.textContent = radnik.zanimanje
    
            let pIskustvo = document.createElement('p')
            pIskustvo = radnik.iskustvo
    
            let pPlata = document.createElement('p')
            pPlata = radnik.plata
    
            radnici.append(pIme, pPrezime, pZanimanje, pIskustvo, pPlata)
            ispis.appendChild(radnici)
    
            radnici.style.width = '100px'
        })
    
    }, 500);

})



