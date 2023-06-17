// Napisati kod koji za unetog usera u input proverava da li on vec postoji u nizu. Ukoliko postoji, 
// polje obojiti u crveno, u suprotnom zelenom bojom.

const ime = document.querySelector('#username')

const btn = document.querySelector('#btn')

let korisnici = [
    {
        user: 'gamer',
        pass: '123'
    },
    {
        user: 'ucenik22',
        pass: 'istorija2022'
    },
    {
        user: 'user',
        pass: 'pass'
    }
]

const korisnik = () => {

    let postoji = false

    korisnici.forEach(element => {
        if (ime.value === element.user)
            postoji = true

        if(postoji)
        ime.style.border = '2px solid #F00'
        else 
        ime.style.border = '2px solid #0F0'
    });
}

btn.addEventListener('click', () => {
    korisnik()
})