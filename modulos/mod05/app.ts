//tsc -w index.ts
const arr: Array<string> = ["a", "b", "c", "d", "e", "f"]
let moveArr = [...arr.splice(3)] // ➡️ ["d","e","f"] [...conjunto de arrays use spread operator]
let filterValueE = moveArr.filter((valueE) => {
    return valueE === "e"
})
console.log(`${filterValueE} array splice(3) ${moveArr} , array = ${arr} `);

let object: {
    name: string,
    date: number
}
object = { name: "Nick", date: 18 }
console.log(`${object.name}`); // ➡️ [Nick]

const numbers: Array<number> = [1, 3, 2, 5, 4]
numbers.push(6)
numbers.unshift(0)
console.log(numbers.sort());


let linguagensArray: string[] = ['php', 'javascript', 'ruby', 'py', 'ts']
function searchArray(linguagens: string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i].toLocaleUpperCase());
    }
}
searchArray(linguagensArray)

let allNumbers: number = 10
function calcAllNumbers(params: number) {
    for (let i = 0; i <= params; i++) {
        if (i % 2 === 0) {
            console.log('par', i);
        } else {
            console.log('impar', i);
        }
    }
}
calcAllNumbers(10)

function calcMatrix(params: number) {
    for (let i = 0; i <= params; i++) {
        if (i > 10) {
            let a = i / 30;
            return console.log(a);
        }
    }
}
calcMatrix(20)