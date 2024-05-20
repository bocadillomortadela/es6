// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
function swap(arr, ind1, ind2) {
  let temp = arr[ind1]
  arr[ind1] = arr[ind2]
  arr[ind2] = temp
  return arr
}
const swapArr = swap(fantasticFour, 2, 1)
console.log(swapArr)
