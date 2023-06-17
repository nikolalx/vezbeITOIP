// Napisati skriptu koja pravi x paragrafa. Svaki paran paragraf ima 30 reci lorem ipsum, a svaki treci ima zelenu boju pozadine.
// (Moze se koristiti dugme ili putem Entera, kako god je lakse)

const kolicinaParagrafa = document.querySelector('#kolicinaParagrafa')

const btn = document.querySelector('#btn')

const ispis = document.createElement('div')
ispis.classList.add('paragraphs')

const body = document.body

const generisanjeParagrafa = () => {

    let x = kolicinaParagrafa.value

    for (let i = 1; i <= x; i++) {

        let container = document.createElement('div')
        let p = document.createElement('p')
        p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vitae error id, eos amet illum libero? A mollitia nam modi quae assumenda ea dicta aspernatur placeat? Omnis, nihil. Amet, quod.'

        if(i % 3 === 0) 
            container.style.backgroundColor = '#0F0'
        
        container.append(p)
        ispis.append(container)

    

    body.append(ispis)

}
}

btn.addEventListener('click', () => {
    generisanjeParagrafa()

})

document.addEventListener('keypress', (event) => {

    let keyCode = event.keyCode ? event.keyCode : event.which;
    if(keyCode === 13){
        btn.click()
    }
})