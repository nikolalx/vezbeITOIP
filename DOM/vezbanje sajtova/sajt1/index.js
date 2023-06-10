const body = document.body

const h1 = document.createElement('h1')
h1.innerText = 'Dan na Plazi'

const p = document.createElement('p')
p.innerHTML ='<b>Lorem ipsum lorem lorem lorem</b> lkfakmkfskmf kasfmk kmfs mkl fsk mmkmlamkf k mmm klfmslml mlmalmflkml mlkml mlml <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullam, odit ab accusamus! Error excepturi non numquam in voluptate ea. Maxime. <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullam, odit ab accusamus! Error excepturi non numquam in voluptate ea. Maxime. <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullam, odit ab accusamus! Error excepturi non numquam in voluptate ea. Maxime. '

const p1 = document.createElement('p')
p1.innerHTML = '<i>Lorem ipsum dolor sit amet consectetur</i>, adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullam'

const h2 = document.createElement('h2')
h2.textContent = 'Vozovi'

const p2 = document.createElement('p')
p2.innerHTML = '<mark>Lorem ipsum dolor sit amet consectetur,</mark> adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullam'

const p3 = document.createElement('p')
p3.textContent = 'Lorem ipsum dolor sit amet consectetur.'

const ul = document.createElement('ul')

const li = document.createElement('li')
li.textContent = 'Bla Bla Bla'

const li1 = document.createElement('li')
li1.textContent = 'Bla Bla Bla'

const li2 = document.createElement('li')
li2.textContent = 'Bla Bla Bla'

ul.append(li, li1, li2)

const p4 = document.createElement('p')
p4.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullamLorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullamLorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullam'

const hr = document.createElement('hr')
hr.innerHTML = '<hr>'

const div = document.createElement('div')
div.style.display = 'flex'
div.style.justifyContent = 'center'

const img = document.createElement('img')
img.src = '../../../Responsive/resenje/slike/pic_2.png'
img.alt = 'neka slika'
img.style.width = '300px'
img.style.height = '200px'


div.appendChild(img)

const p5 = document.createElement('p')
p5.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullamLorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullamLorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullam'

const p6 = document.createElement('p')
p6.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. <i>Nesciunt rerum itaque quam autem</i> delectus iusto tempora saepe aliquam ullamLorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullamLorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rerum itaque quam autem delectus iusto tempora saepe aliquam ullam'

p6.style.color = '#F00'
p6.style.backgroundColor = '#00F'

const a = document.createElement('a')
a.setAttribute('href', '#')
a.textContent = 'klikni me!'
a.style.color = '#F00'
a.style.textDecoration = 'none'

body.append(h1, p, p1, h2, p2, p3, ul, p4, hr, div, p5, p6, a)