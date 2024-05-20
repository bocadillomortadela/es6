// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const agesMayor = ages.filter((hehe) => hehe > 18)
console.log('mayor 18: ' + agesMayor)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const pares = ages1.filter((hehe) => hehe % 2 === 0)
console.log('pares: ' + pares)

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const leagueStreamers = streamers.filter(
  (hehe) => hehe.gameMorePlayed === 'League of Legends'
)
console.log(leagueStreamers)

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
const streamers1 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const newArr = streamers1.filter((hehe) => hehe.name.includes('u'))
console.log(newArr)

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.
const newStreamerArr = streamers
  .filter((hehe) => hehe.gameMorePlayed.includes('Legends'))
  .map((hehe) => ({
    ...hehe,
    gameMorePlayed:
      hehe.age > 35 ? hehe.gameMorePlayed.toUpperCase() : hehe.gameMorePlayed
  }))
console.log(newStreamerArr)
