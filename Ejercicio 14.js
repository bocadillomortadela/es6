// Crea una función llamada rollDice() que reciba como parametro el numero de caras
// que queramos que tenga el dado que deberá simular el codigo dentro de la función.
// Como hemos dicho, que la función use el parametro para simular una tirada de dado
// y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te
// preocupes! Busca información sobre la función de javascript Math.random()

function rolldice() {
  const randomNum = Math.floor(Math.random() * 6) + 1
  return randomNum
}
const randomNum2 = rolldice()
console.log(randomNum2)
