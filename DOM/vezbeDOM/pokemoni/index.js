// 1. Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)
// 	* Име
//     * Врста
//     * Способности (низ способности покемона)
//     * Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))

//     Даље, направити низ од ових објеката

//     ```
//     пикачу:
// 	име: пикачу
//     врста: електрични
//     способности: Статички електрицитет,...
// 	карактеристике: напад: 55, одбрана: 30, брзина: 90
//     ```


//     ```
// 	[<...>,...]
//     ```



// 5. За дати html направити скрипту која:
// 	```
// 	    <div class="wrapper">
// 			<button id="prikaz">PRIKAZI POKEMONE</button>
// 			<button id="pobednik">PRIKAZI NAJJACEG POKEMONA</button>
// 		</div>
// 	```

// 	*На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :

//     ```
// 	    <div>
//             <p>Opis pokemona</p>
//             <img src="slika odgovarajućeg pokemona">
//         </div>
//     ```

// 	*На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад (користити већ написану функцију иѕ 4. задатка) по истом формату.

const btn1 = document.querySelector('#btn1')

const reset = document.querySelector('#reset')

const body = document.body

let sposobnost = document.createElement('div')
sposobnost.classList.add('column')

body.append(sposobnost)


let pokemoni = [
    {
        ime: "Pikachu",
        vrsta: "elektricni",
        sposobnosti: ["elektricni_udar", "visestruka_munja"],
        karakteristike: {
            napad: 50,
            odbrana: 30,
            brzina: 90
        },
        slikaUrl: "./pictures/Pikachu.png"
    },
    {
        ime: "Blastoise",
        vrsta: "vodeni",
        sposobnosti: ["vodeni_top", "tornado"],
        karakteristike: {
            napad: 60,
            odbrana: 40,
            brzina: 35
        },
        slikaUrl: "./pictures/Blastoise.png"
    },
    {
        ime: "Totodile",
        vrsta: "vodeni",
        sposobnosti: ["vodeni_top", "vodena_kugla"],
        karakteristike: {
            napad: 40,
            odbrana: 30,
            brzina: 80
        },
        slikaUrl: "./pictures/Totodile.png"
    },
    {
        ime: "Charizard",
        vrsta: "vatreni",
        sposobnosti: ["vatrena_kugla", "vatreni_vrtlog", "udarac_krilom"],
        karakteristike: {
            napad: 80,
            odbrana: 60,
            brzina: 30
        },
        slikaUrl: "./pictures/Charizard.png"
    }
]

// 2. Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

const izlistajSposobnost = () => {

    pokemoni.forEach(pokemon => {

        let listaSposobnosti = document.createElement('div')
        listaSposobnosti.classList.add('row')

        let pSposobnosti = document.createElement('p')
        pSposobnosti.textContent = pokemon.sposobnosti

        listaSposobnosti.append(pSposobnosti)
        sposobnost.append(listaSposobnosti)

    });
}

btn1.addEventListener('click', () => {
    izlistajSposobnost()
})

reset.addEventListener('click', () => {
    while (sposobnost.hasChildNodes()) {
        sposobnost.removeChild(sposobnost.childNodes[0])
        
    }

    while (izlistajPoBrzini.hasChildNodes()) {
        izlistajPoBrzini.removeChild(izlistajPoBrzini.childNodes[0])
    }

    pokemoni = pokemoni
})

// 3. Сортирати покемоне по брзини, растуће.

let izlistajPoBrzini = document.createElement('div')

body.append(izlistajPoBrzini)

const btn2 = document.querySelector('#btn2')

function sort(array) {
    return array.sort((p1, p2) => (p1.karakteristike.brzina < p2.karakteristike.brzina) ? 1 : (p1.karakteristike.brzina > p2.karakteristike.brzina) ? -1 : 0);
}

const izbaciPokemonePobrzini = () => {

    pokemoni.forEach(element => {

        let poBrzini = document.createElement('div')
        poBrzini.classList.add('row')

        let pImePoBrzini = document.createElement('p')
        pImePoBrzini.textContent = element.ime

        let pSlika = document.createElement('img')
        pSlika.src = element.slikaUrl

        poBrzini.append(pImePoBrzini, pSlika)
        izlistajPoBrzini.append(poBrzini)

    });

}

btn2.addEventListener('click', () => {
    sort(pokemoni)
    izbaciPokemonePobrzini()
})

// 4. Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

const btn3 = document.querySelector('#btn3')

const najjaci = () => {

    pokemoni.sort((a, b) => (a.karakteristike.napad > b.karakteristike.napad ? 1 : (a.karakteristike.napad < b.karakteristike.napad ? -1 : 0)));
}

btn3.addEventListener('click', () => {

    najjaci(pokemoni)

    for(let i = 0; i <= pokemoni[0]; i++){
        let containerPoNapadu = document.createElement('div')
        containerPoNapadu.classList.add('row')

        let pNajjaci = document.createElement('p')
        pNajjaci.textContent = pokemoni[i]

        containerPoNapadu.append(pNajjaci)

        body.append(containerPoNapadu)
    }

})