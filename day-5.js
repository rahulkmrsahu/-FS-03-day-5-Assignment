/* SOLUTION */

let sentence = "hello geekster"
stringLength = sentence.length
console.log("length of string = " + stringLength)

let firstIndex = sentence.indexOf('e')
console.log("Index of first " + " 'e'" + "=" + firstIndex)

let firstWord = sentence.slice(0, sentence.indexOf(" "))
console.log("First word in sentence = " + firstWord)

let lastWord = sentence.substring(sentence.lastIndexOf(" ") + 1)
console.log("Last word in sentence =" + lastWord)

let hasJavaScript = sentence.includes("JavaScript")
console.log("Contains 'JavaScript' =" + hasJavaScript)


let replaced = sentence.replace("JavaScript", "Python")
console.log("Replaced 'JavaScript' with 'Python' =" + replaced)


let words = sentence.split(" ")
console.log("Array of words =" + words)


let newSentence = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
console.log("New sentence with capitalised words =" + newSentence)
