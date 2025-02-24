// named function
function perkalian(a, b) {
    let result = a*b
    console.log(result)
}

// expression function
// // arrow function
// anonymous function
const pertambahan = (a, b) => {
    let result = a+b
    return result
}

// named arrow function
const pembagian = function bagi(a,b) {
    let result = a/b
    return result
}

console.log(perkalian(5,2))
console.log(pertambahan(6, 2))
console.log(pembagian(8,2))
