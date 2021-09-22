var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//tsc -w index.ts
var arr = ["a", "b", "c", "d", "e", "f"];
var moveArr = __spreadArray([], arr.splice(3), true); // ➡️ ["d","e","f"] [...conjunto de arrays use spread operator]
var filterValueE = moveArr.filter(function (valueE) {
    return valueE === "e";
});
console.log(filterValueE + " array splice(3) " + moveArr + " , array = " + arr + " ");
var object;
object = { name: "Nick", date: 18 };
console.log("" + object.name); // ➡️ [Nick]
var numbers = [1, 3, 2, 5, 4];
numbers.push(6);
numbers.unshift(0);
console.log(numbers.sort());
var linguagensArray = ['php', 'javascript', 'ruby', 'py', 'ts'];
function searchArray(linguagens) {
    for (var i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i].toLocaleUpperCase());
    }
}
searchArray(linguagensArray);
var allNumbers = 10;
function calcAllNumbers(params) {
    for (var i = 0; i <= params; i++) {
        if (i % 2 === 0) {
            console.log('par', i);
        }
        else {
            console.log('impar', i);
        }
    }
}
calcAllNumbers(10);
function calcMatrix(params) {
    for (var i = 0; i <= params; i++) {
        if (i > 10) {
            var a = i / 30;
            return console.log(a);
        }
    }
}
calcMatrix(20);
