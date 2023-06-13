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

// function sposobnost(array) {
//     let str = []
    
//     array.forEach(element => {
//          str.push(element.sposobnosti[0]);
//     });
//     return str
// }

// console.log(sposobnost(pokemoni));

function sortiranje(array){
    
    let brzine = []
    
    array.forEach(element => { //ulazi u svaki objekat
        for(let i = 0; i < element.length;i++){ //prolazi kroz svaki deo objekta
            if(element[i] === element.karakteristike){ //kad naidje do karakteristike
            
                for(let j = 0; j < element.karakteristike.length;j++){ //prolazi kroz objkat karakteristike
                
                    if(element.karakteristike[j] === brzina){ //kada je kod brzine pushuj brzinu
                    
                        brzine.push(element.karakteristike[j].brzina)
                    }
                    }
                }
                }
    });
    return brzine
}

console.log(sortiranje(pokemoni))