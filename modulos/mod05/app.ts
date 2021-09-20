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
