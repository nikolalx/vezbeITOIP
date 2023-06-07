// kamen papir makaze, korisnik protiv kompa. Korisnik treba da ukuca svoj odabir

function korisnikovOdabir(string) {

    string = string.toLowerCase()

    let komp = Math.ceil(Math.random() * 3)

    let kompOdabir = ''

    if (komp === 1) {
        kompOdabir += 'kamen'
    } else if (komp === 2) {
        kompOdabir += 'papir'
    } else {
        kompOdabir += 'makaze'
    }

    return [string, kompOdabir]
}

function igra(korisnikovOdabir) {

    korisnik = korisnikovOdabir[0]

    kompjuter = korisnikovOdabir[1]


    if (korisnik === 'kamen' && kompjuter === 'makaze' || korisnik === 'papir' && kompjuter === 'kamen' || korisnik === 'makaze' && kompjuter === 'papir') {
        return `Korisnik je pobedio ${korisnik} je jace od ${kompjuter}`
    } else if (korisnik === kompjuter) {
        return `Nereseno ${korisnik}, ${kompjuter}`
    } else {
        return `Komp je pobedio ${kompjuter} je jace od ${korisnik}`
    }

}
console.log(igra(korisnikovOdabir('Kamen')));