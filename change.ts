let str: string = "An apple a day keeps the doctor away"

console.log(str.toLowerCase().replace(/a/g, "*"))

// let res: string = ""

// for (let i = 0; i <= str.length; i++) {
//     res = str.toLowerCase()
//     if(str.charAt(i) === "a") {
//         res += str.charAt(i).replace("a", "*")
//     } else {
//         res += str.charAt(i)
//     }
// }

// console.log(res)