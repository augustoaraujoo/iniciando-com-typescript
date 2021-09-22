let numbers = [1, 2, 3, 4, 5];
function calcNum(num) {
  for (let i = 0; i <= num; i++) {
    //! [i] = matrix 0,1,2,3,4,5
    //? num = param
    if (i % 2 === 0) {
      console.log('par', i);
    } else {
      console.log('impar', i);
    }
  }
}
calcNum(4);
