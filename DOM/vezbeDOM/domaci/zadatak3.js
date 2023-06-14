const username = document.querySelector('#username')

const brt = document.querySelector('#btn')

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

btn.addEventListener('click', () =>{

    let postojnost = false

    korisnici.forEach(element => {
        if (element.user === username.value)
            postojnost = true        
    });

    if (postojnost == true) {
        username.style.borderColor = '#f00'
    } else{
        username.style.borderColor = '#0f0'
    }



})