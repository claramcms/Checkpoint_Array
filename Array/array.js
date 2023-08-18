const hobbies = ['dançar', 'escutar música', 'cozinhar']
console.log(hobbies)

console.log(hobbies[0])
console.log(hobbies[1])
console.log(hobbies[2])

hobbies[0] = 'dormir'
console.log(hobbies)

console.log(hobbies.length)

hobbies.push('comer')
console.log(hobbies)

hobbies.push('assistir série')
hobbies.push('dançar')
console.log(hobbies)

hobbies.pop()
console.log(hobbies)

let posicao = hobbies.indexOf('escutar música')
hobbies.splice(posicao, 1)
console.log(hobbies)

hobbies.splice(2, 1)
console.log(hobbies)

const hobbiesDoAmigo = ['cantar', 'dançar', 'tocar violão']

const todosOsHobbies = hobbies.concat(hobbiesDoAmigo)
console.log(todosOsHobbies)

const hobbiesMusicais = ['cantar', 'dançar', 'tocar violão']
const hobbiesDeLazer = ['assistir série', 'dormir', 'caminhar']
const hobbiesDeCulinaria = ['fazer doces', 'fazer lasanha', 'cozinhar']


const categoriasDeHobbies = [hobbiesMusicais, hobbiesDeLazer, hobbiesDeCulinaria]
console.log(categoriasDeHobbies[0])

console.log(categoriasDeHobbies[0][0])
console.log(categoriasDeHobbies[0][2])