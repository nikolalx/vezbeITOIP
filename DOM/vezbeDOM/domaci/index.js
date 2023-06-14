//	* Име
// * Врста
// * Способности (низ способности покемона)
// * Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))

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
        slikaUrl: "./pictures/Pikachu.jpg"
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
        slikaUrl: "./pictures/Blastoise.jpg"
    },
    {
        ime: "Squirtle",
        vrsta: "vodeni",
        sposobnosti: ["vodeni_top", "vodena_kugla"],
        karakteristike: {
            napad: 40,
            odbrana: 30,
            brzina: 80
        },
        slikaUrl: "./pictures/Squirtle.jpg"
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
        slikaUrl: "./pictures/Charizard.jpg"
    }
]


//vraca niz sposobnosti svih pokemona

// function sposobnost(array) {
//     array.forEach(element => {
//         return console.log(element.sposobnosti[0]);
//     });
// }

// sortiranje po brzini rastuce

// function sortiranje(pokemoni){
// pokemoni.sort((a , b) => {
//     return a.karakteristike.brzina - b.karakteristike.brzina
// })

// pokemoni.forEach((element) => {

//     console.log(element);

// });
// }

// console.log(sortiranje(pokemoni));

//4. Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

// function borba(pokemoni) {

//     let max = pokemoni[0].karakteristike.napad

//     for(let i = 0; i < pokemoni.length; i++){
//         let [i] = pokemoni[i]
//         if([i].karakteristike.napad > [i].karakteristike.napad)
//         return pokemoni[i]
//     }
// }

// console.log(borba(pokemoni));

// function test(arr){

//     let array = arr

//     array.sort((a,b) => {
//         a.karakteristike.brzina - b.karakteristike.brzina
//     });

//     return array
     
// }

// console.log(test(pokemoni));

// Napisati kod koji ce racunati stepen broja. Unosi se osnova i eksponent.

// const broj = document.querySelector('#broj')
// const exponent = document.querySelector('#exponent')
// const rezultat = document.querySelector('#resenje')

// const button = document.querySelector('#btn')


// button.addEventListener('click', () => {
//     let resenje = 1

//     for(let i = 0; i < exponent.value; i++){
//         resenje *= broj.value
//     }

//     rezultat.value = resenje
// });