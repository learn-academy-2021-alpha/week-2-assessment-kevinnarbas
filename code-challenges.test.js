// ASSESSMENT 2: Coding practical questions with Jest
// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// const { it, expect } = require("@jest/globals");
// const { describe } = require("yargs");

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"


// test if something is divisible by three 
// if it is divisible by three output that it is, if not than output it is not


describe('when isDivisible is called', () => {
  it('returns "9 is divisible by three", when a number divisible by three is provided', () => {
    //Arrange
    const randomNumber = 9

    //Act
    const actualResult = isDivisible(randomNumber)

    //Assert
    expect(actualResult).toEqual('9 is divisible by three')
  })

  it('returns "0 is divisible by three", when a number divisible by three is provided', () => {
    //Arrange
    const randomNumber = 0

    //Act
    const actualResult = isDivisible(randomNumber)

    //Assert
    expect(actualResult).toEqual('0 is divisible by three')
  })

  it('returns "-7 is not divisible by three", when a number not divisible by three is provided', () => {
    //Arrange
    const randomNumber = -7

    //Act
    const actualResult = isDivisible(randomNumber)

    //Assert
    expect(actualResult).toEqual('-7 is not divisible by three')
  })
});

// b) Create the function that makes the test pass.

// (works)
// const isDivisible = (number) => {
//   return (number % 3 === 0) ? `${number} is divisible by three` : `${number} is not divisible by three`
// }

// trying with less code
const isDivisible = num => {
  return `${num} is${(num % 3) ? ' not' : ''} divisible by three`
}

// console.log(isDivisible(num1))
// console.log(isDivisible(num2))
// console.log(isDivisible(num3))



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe('when capitalize is called', () => {
  it('return all of the words in array capitalized when passed an array', () => {
    // Arrange
    const randomNouns = ["streetlamp", "potAto", "tEEth", "conCluSion", "nephew"]

    //Act
    const actualResult = capitalize(randomNouns)

    //Assert
    expect(actualResult).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
  })

  it('return all of the words in array capitalized when passed an array', () => {
    // Arrange
    const randomNouns = ["temperature", "database", "chopsticks", "mango", "deduction"]

    //Act
    const actualResult = capitalize(randomNouns)

    //Assert
    expect(actualResult).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// b) Create the function that makes the test pass.

const capitalize = (array) => {
  return array.map(value => {
    return value[0].toUpperCase() + value.substring(1, value.length).toLowerCase()
  })
}

// console.log(capitalize(randomNouns1))
// console.log(capitalize(randomNouns2))



// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 107]

var mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
// Expected output: [-9, 0, 3, 18, 94]

describe('when numbersSorted is called ', () => {
  it('returns a sorted array of only numbers going smallest to largest', () => {
    //Arrange 
    const mixedDataArray = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]

    //Act
    const actualResult = numbersSorted(mixedDataArray)

    //Assert
    expect(actualResult).toEqual([-8, 0, 8, 46, 59, 107])
  })

  it('returns a sorted array of only numbers going smallest to largest', () => {
    //Arrange 
    const mixedDataArray = [3, "yo!", 94, -9, false, 0, 18, "hola!"]

    //Act
    const actualResult = numbersSorted(mixedDataArray)

    //Assert
    expect(actualResult).toEqual([-9, 0, 3, 18, 94])
  })
})


// b) Create the function that makes the test pass.

const numbersSorted = (array) => {
  return array.filter(value => {
    return typeof value === 'number'
  }).sort((a, b) => {return a - b})
}


// console.log(numbersSorted(mixedDataArray1))


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "leArn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

describe('when vowelIndex is called', () => {
  it('returns the index of the first vowel when a string is passed', () => {
    //Arrange
    const vowelTester = 'learn'

    //Act
    const actualResult = vowelIndex(vowelTester)

    //Assert
    expect(actualResult).toEqual(1)
  })
  it('returns the index of the first vowel when a string is passed', () => {
    //Arrange
    const vowelTester = 'academy'

    //Act
    const actualResult = vowelIndex(vowelTester)

    //Assert
    expect(actualResult).toEqual(0)
  })
  it('returns the index of the first vowel when a string is passed', () => {
    //Arrange
    const vowelTester = 'challenge'

    //Act
    const actualResult = vowelIndex(vowelTester)

    //Assert
    expect(actualResult).toEqual(2)
  })
})

// b) Create the function that makes the test pass.

// trying to answer this without the use of regex 

// const vowelIndex = (string) => {
//   let indexOfFirst = (string.toLowerCase().split('')).map((value, index) => {
//     if('aeiou'.includes(value)){
//       return index
//     } else {
//       return value
//     }
//   })
//   return indexOfFirst.sort().shift()
// }


// trying refactor with ternary (works)
// const vowelIndex = (string) => {
//   let indexOfFirst = (string.toLowerCase().split('')).map((value, index) => {
//     return ('aeiou'.includes(value)) ? index : value
//   })
//   return indexOfFirst.sort().shift()
// }

// trying to do extra refactoring (works)
// const vowelIndex = (string) => {
//   return (string.toLowerCase().split('')).map((value, index) => {
//     return ('aeiou'.includes(value)) ? index : value
//   }).sort().shift()
// }

// didnt work
// const vowelIndex = (str) => {
//   return str.toLowerCase().indexOf('a' || 'e' || 'i' || 'o' || 'u')
// }

// trying different array methods (works)
const vowelIndex = (str) => {
  return (str.toLowerCase().split('')).findIndex((value) => {
    return ('aeiou'.includes(value))
  })
}

//for my own testing to see outcomes to try different things
// console.log(vowelIndex(vowelTester1))
// console.log(vowelIndex('ffffdscsddddddsscccccwak'))