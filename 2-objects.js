const person = {
    name: 'Zartab',
    age: 31,
    blog: 'www.codewithz.com',
    walk() {
        console.log("Walking")
    },
    talk() {
        console.log("Talking")
    }
}

person.walk()

person.education = 'Masters in IT'

console.log(person)

// Treating objects as an array 

person['city'] = 'Mumbai'

console.log(person)

let memberKey = 'car'
let memberValue = 'Honda City'

person[memberKey] = memberValue

console.log('---------------------------')
console.log(person)