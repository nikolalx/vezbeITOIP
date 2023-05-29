// PUSH - dodaje element na kraj niza i vraca novu duzinu niza

// let niz = [1, 2, 3]
// console.log(niz.push(4), niz)

// POP - izbacuje poslednji element niza i vraca taj element

// let niz = [1, 2, 3]
// let poslednji = niz.pop()
// console.log(poslednji, niz)

// SHIFT - izbacuje element sa pocetka niza i vraca taj element

// let niz = [1, 2, 3]
// let prvi = niz.shift()
// console.log(prvi, niz)

// UNSHIFT - dodaje element na pocetak niza i vraca duzinu novog niza

// let niz = [1, 2, 3]
// console.log(niz.unshift(0), niz)

// SLICE - pravi isecak niza (novu kopiju, bez modifikacije postojeceg niza)

// let niz = [1, 2, 3] 
// console.log(niz.slice(1, 2)) // prvi broj ukazuje na START a drugi broj na END! NOT INCLUSIVE 

// SPLICE - brise element iz niza (modifikuje postojeci niz), i po potrebi menja na tim mestima prosledjene elemente

// let niz = [1, 2, 3]
// niz.splice(0, 2, 10, 11, 12, 13, 14) //ovo mora zasebno da se odradi izvan loga ako hoces da promenis nesto.
// console.log(niz)

// JOIN - metoda koja od niza elemenata kreira string koristeci separator kao parametar

// let niz = [1, 2, 3]
// console.log(niz.join(''))

// SOME - vraca true ukoliko je uslov lambda funkcije ispunjen bar za jedan element

// let niz = [1, 2, 3]
// console.log(niz.some(el => el % 5 === 0))

// EVERY - vraca true ukoliko je uslov lambda funkcije ispunjen za svaki element

// let niz = [1, 2, 3]
// console.log(niz.every(el => el % 5 === 0))

// REVERSE - obrce elemente u nizu

// let niz = [1, 2, 3]
// console.log(niz.reverse())

// FIND - trazi element u nizu i vraca ga ako postoji; u suprotnom vraca undefined

// let niz = [1, 2, 3]
// console.log(niz.find(broj => broj === 0))

// FINDINDEX - vraca poziciju elementa u nizu; ukoliko ne nadje element, vraca -1

// let niz = [1, 2, 3]
// console.log(niz.findIndex(el => el === 2))

// niz.splice(niz.findIndex(el => el === 2), 1)

// FOREACH - petlja koja prolazi kroz niz

// let niz = [1, 2, 3]
// niz.forEach((el, index) => {
//     // logika
// })

// FILTER - vraca elemente koji zadovoljavaju uslov u vidu niza

// let niz = [1, 2, 3]
// niz.filter(el => el > 10)

// MAP

// let niz = [1, 2, 3]
// niz.map(el => el ** 2)
// niz.map(el => {
//     let obj = {
//         ime: el.ime,
//         plata: el.plata
//     }

//     return obj
// })

// INCLUDES - proverava da li element postoji u nizu(vraca true ako postoji)

// let niz = [1, 2, 3]
// console.log(niz.includes(1))

// INDEXOF - vraca index elementa u nizu