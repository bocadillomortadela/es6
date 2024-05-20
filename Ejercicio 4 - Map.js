// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const nameUsers = users.map((hehe) => hehe.name)
console.log(nameUsers)

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const listName = users1.map((hehe) => {
  if (hehe.name.startsWith('A')) {
    hehe.name = 'Anacleto'
  }
  return hehe.name
})
console.log(listName)

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]
const citiesVisited = cities.map((hehe) => {
  if (hehe.isVisited === true) {
    hehe.name = hehe.name + ' (Visitado)'
  }
  return hehe
})
console.log(cities)
