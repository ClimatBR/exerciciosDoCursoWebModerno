let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)
console.log(++num1 === num2--) //true pq compara antes de decrementar o num2
console.log(num1 === num2)