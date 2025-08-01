const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName])    // 35 is printed

object1.address = 'Helsinki'
object1['secret number'] = 12341

console.log(object3.name)         // { first: 'Dan', last: 'Abramov' } is printed
console.log(object3.name.first)    // Dan is printed
console.log(object3.grades)        // [2, 3, 5, 3] is printed
console.log(object3.grades[1])     // 3 is printed