const body = document.body

const h1 = document.createElement('h1')
h1.textContent = 'Kreiranje Web Sajta'

const p = document.createElement('p')
p.innerHTML = '<b>Osnova svakog web sajta je njegov sadrzaj</b>'

const p1 = document.createElement('p')
p1.innerHTML = 'Lorem ipsum, <em>dolor sit amet consectetur adipisicing elit.</em> Omnis sunt optio necessitatibus ullam eaque ipsam. Veniam ad reiciendis obcaecati neque, officia tempore eius! Ducimus iure mollitia libero quis eum ipsa. <br> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis sunt optio necessitatibus ullam eaque ipsam. Veniam <strong>ad reiciendis obcaecati neque, </strong>officia tempore eius! Ducimus iure mollitia libero quis eum ipsa.'

const hr = document.createElement('hr')

const p2 = document.createElement('p')
p2.textContent = 'Websajtove danas kreiramo pomocu 3 nove tehnologije koje se medjusobno kombinuju'

const h2html = document.createElement('h2')
h2html.innerText = 'HTML - sadryaj'

const p3 = document.createElement('p')
p3.innerHTML = 'Ullam ea perferendis <i>aliquam vitae molestias optio harum nesciunt</i> quia ex nulla dolorum facere sint aspernatur natus temporibus eos quos, tenetur, in, commodi asperiores? Sit distinctio amet molestias laboriosam enim.'
p3.style.backroundColor = 'rgba(90, 00, 00, .5'

const h2css = document.createElement('h2')
h2css.innerText = 'CSS - izgled'

const p4 = document.createElement('p')
p4.innerHTML = '<b>Ullam ea perferendis aliquam vitae molestias optio harum</b> nesciunt quia ex nulla dolorum facere sint aspernatur natus temporibus eos quos, tenetur, in, commodi asperiores? Sit distinctio amet molestias laboriosam enim.'

const div = document.createElement('div')
div.style.display = 'flex'
div.style.justifyContent = 'center'

const img = document.createElement('img')
img.setAttribute('src', '../../../Responsive/resenje/slike/pic_3.jpg')  
img.alt = 'slika'
img.style.width = '300px'
img.style.height = '200px'

div.append(img)

const jsh2 = document.createElement('h2')
jsh2.innerText = 'JavaScript - interaktivnost'

const p5 = document.createElement('p')
p5.textContent = 'Websajtove danas kreiramo pomocu 3 nove tehnologije koje se medjusobno kombinuju'

const niz = ['jabuka', 'kruska', 'sljiva', 'malina', 'dunja', 'medovaca']

const ul = document.createElement('ul')

for(i = 0; i < niz.length; i++){
    const li = document.createElement('li')
    li.textContent = niz[i]
    ul.append(li)
}


body.append(h1, p, p1, hr, p2, h2html, ul, p3, h2css, p4, div, jsh2, p5)
