const str: string = "hello world now"

const search: Array<string> = str.split(" ")

for (let i = 0; i < search.length; i++) {
    search[i] = search[i][0].toUpperCase() + search[i].substring(1)
}

console.log(search.join(" "))

/*
let capitall = "hello world"
console.log(capitall.replace (/\b\w/g, (char) => char.toUpperCase()));
*/

let result: string = ""

for (let i = 0; i < str.length; i++) {
    if (i == 0 || str.charAt(i - 1) == " ") {
        result += str.charAt(i).toUpperCase()
    } else {
        result += str.charAt(i).toLowerCase()
    }
}

console.log(result)