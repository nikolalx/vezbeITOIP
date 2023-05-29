// let zaposleni = [
//     {
//         ime: 'Uros',
//         prezime: 'Jankovic',
//         pozicija: 'frontend developer',
//         senioritet: 'medior',
//         godineIskustva: 2,
//         plata: 158000,
//         bonusiKvartalni: 65000,
//         bonusNaKrajuGodine: 240000,
//         godisnjiOdmor: 25
//     },
//     {
//         ime: 'Marta',
//         prezime: 'Nesovic',
//         pozicija: 'project menadzer',
//         senioritet: 'medior',
//         godineIskustva: 2.5,
//         plata: 95000,
//         bonusiKvartalni: 35000,
//         bonusNaKrajuGodine: 120000,
//         godisnjiOdmor: 25
//     },
//     {
//         ime: 'Stefan',
//         prezime: 'Janketic',
//         pozicija: 'fullstack developer',
//         senioritet: 'senior',
//         godineIskustva: 4,
//         plata: 281000,
//         bonusiKvartalni: 100000,
//         bonusNaKrajuGodine: 500000,
//         godisnjiOdmor: 25
//     },
//     {
//         ime: 'Kristina',
//         prezime: 'Miskovic',
//         pozicija: 'backend developer',
//         senioritet: 'medior',
//         godineIskustva: 1,
//         plata: 223000,
//         bonusiKvartalni: 80000,
//         bonusNaKrajuGodine: 130000,
//         godisnjiOdmor: 25
//     },
//     {
//         ime: 'Teodora',
//         prezime: 'Jovanovic',
//         pozicija: 'frontend developer',
//         senioritet: 'junior',
//         godineIskustva: 0.5,
//         plata: 78000,
//         bonusiKvartalni: 25000,
//         bonusNaKrajuGodine: 80000,
//         godisnjiOdmor: 25
//     },
//     {
//         ime: 'Jovana',
//         prezime: 'Petrovic',
//         pozicija: 'project menadzer',
//         senioritet: 'senior',
//         godineIskustva: 5,
//         plata: 120000,
//         bonusiKvartalni: 45000,
//         bonusNaKrajuGodine: 150000,
//         godisnjiOdmor: 25
//     },
// ]

// 1. Isfiltrirati sve koji su mediori.

// console.log(zaposleni.filter(radnik => radnik.senioritet === 'medior'))

// 2. Mapirati zaposlene koji imaju platu vecu od 200000 dinara. (u objektu treba da bude samo ime, senioritet i plata)


// console.log(zaposleni.filter(el => el.plata > 200000).map(radnik => { return {ime: radnik.ime, senioritet: radnik.senioritet, plata: radnik.plata}}))

//10. Write one line of code that changes the value of the last workers pay in the list to 1000000 (overwriting the previous value).

// console.log(zaposleni.splice({5}));

// ------------------------------------------------------------- VEZBANJE METODA

// let colors = ['Blue', 'Green', 'Red', 'Purple', 'Black', 'Burgundy']

// 8. Access the first color in the array and print it to the console using console.log()

// console.log(colors.shift());

// 9. Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)

// console.log(colors.slice(2,3)); 

// 10. Write one line of code that changes the value of the last color in the list to "ultraviolet"(overwriting the previous value).

// colors.splice(4, 1, 'Ultraviolet')

// console.log(colors);

// 11. Create a new variable called fourthColor and set it equal to the fourth color in the list.

// let fourthColor = colors[3]

// console.log(fourthColor);

// 12. Add another color to the end of the list.

// colors.push('Orange')

// console.log(colors);

// 13. Add another color to the beginning of the list.

// colors.unshift('Lila')

// console.log(colors);

// 14. Print the length of the array to the console with console.log()

// console.log(colors.length);

// 15. Remove the last color from the end of list, and then print the length of the array to the console one more time.

// colors.pop(4)

// console.log(colors);

// 16. Write a for loop to iterate through every color in the array and print each color's value to the console.

// for(i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// 17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.

// for(i = 0; i < colors.length; i++){
//     console.log(i ,colors[i]);
// }

// 18. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)

// console.log(colors.pop());

//------------------------------------------------------METODE ZA OBJEKAT

let penguins = [
    
        {
            name: "Gunter",
            origin: "Adventure Time",
            canFly: false,
            sayHello: function () {
              console.log("QUACK!!!");
            }
          },
          
          {
            name: "Ramón",
            origin: "Happy Feet",
            canFly: true,
            sayHello: function () {
              console.log("Estoy encantado de conocerle.");
            }
          },
          
          {
            name: "Fred",
            origin: "Sitting Ducks",
            canFly: true,
            sayHello: function () {
              console.log("Hi there!");
            }
          }
          
]

// 47. Access the first penguin in the list and print it to the console using console.log() -- notice that you can see all the properties and methods of that object listed in the console! (Hint: remember that array indexes start counting at 0, not 1!)

// console.log(penguins.find(el => el = 1));

// 48. Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.

// let secondPenguin = penguins[1]

// console.log(secondPenguin);

// 49. Print to the console the name of the last penguin in the list.

// console.log(penguins.pop().name);

// 50. Remember the penguin you created earlier, with the variable name of myPenguin? Add that penguin to the end of the penguins array!

// let myPenguin = {
//     name: 'Pingu',
//     origin: 'Fuck you!',
//     canFly: true,
//     sayHello: function () {
//         console.log("Hi there!");
//       }
// }

// penguins.push(myPenguin)

// console.log(penguins);

// 51. Print the length of the penguins array to the console.

// console.log(penguins.length);

// 52. Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).

// penguins[0].canFly = true

// console.log(penguins);

// 53. Call the sayHello method of the first penguin in your penguins array!

// console.log(penguins[0].sayHello);

// 54. Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.

// for(i = 0; i < penguins.length; i++){
//     console.log(penguins[i].name);
// }

// 56. Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2

// for(i = 0; i < penguins.length; i++){
//     penguins[i]['numberOfFeet'] = 2

//     console.log(penguins[i]);
// }

// 57. Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!" -- for example, "Gunter can fly!" or "Ramón can fly!" (Don't do anything for the penguins that cannot fly.)

// for(i = 0; i < penguins.length; i++){
//     if (penguins[i].canFly !== false) {
//         console.log(`${penguins[i].name} can fly`);
//     }
// }

