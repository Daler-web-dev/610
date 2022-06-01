// function
// name()


// function name() { // declaration
//     alert('hello world')
// }

// name2()

// let name2 = () => { // expression
//     alert('hello world')
// }



// var 

// var a = 'asdasd'


// console.log(a);


// let arr_nametwo = ['daler', 'jurabek', 'alex']

// function cycle(arr) {
//     for(let item of arr) {
//         console.log(item);
//     }
// }

// cycle(names)
// cycle(arr_nametwo)

// let age = 22
// let age_two = 12

// function checkAge(n) {
//     if(n >= 18) {
//         console.log('welcome');
//     } else {
//         console.log('go home');
//     }
// }

// checkAge(age)
// checkAge(age_two)

// function getLongerName(...arr) {
//     let longerName = ''

//     for(let item of arr) {
//         if(item.length > longerName.length) {
//             longerName = item
//         }
//     }

//     console.log(longerName);
// }

// getLongerName('Ula', 'Amir', 'Sarik', 'Muxammad','daler', 'jurabek', 'alex')


// let car = 2000
// let brokenCars = 136

// function proporc(total, broken, what = "some element") {
//     let x = broken * 100 / total

//     alert(`Procent of broken ${x}% = ${what}`)

// }


// proporc(car, brokenCars, 'cars')
// proporc(10000, 3276, 'fruit')
// proporc(10000, 3276)


// function sayHello({name = "anonimus"}) {
//     name = name || "anonimus"

//     alert(`Hello ${name}`)
// }
// function sayHello(object) {
//     console.log(object);

//     alert(`Hello ${object.name}`)
// }


// sayHello("")
// sayHello("Barbara")
// sayHello({name: "Jordan", age: 22, isMarried: false})


let name = "Jurabek"
let surName = "Tolibjonov"
let age = 16


function getRandomEmail(n, s, a) {
    let eamils = [
        `${n}${a}@${s}gmail.com`,
        `${n}@${s}${a}.com`,
        `${s}@${a}${n}.com`,
        `${n}${a}@${s}gmail.com`,
        `${n}@${s}${a}.com`,
        `${s}@${a}${n}.com`
    ]

    let rnd = Math.round(Math.random() * eamils.length)

    console.log(eamils[rnd]);

}
hello world

getRandomEmail(name, surName, age)

