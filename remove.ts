const str: string = "hello world"
let search: string = "ell"

let i: number = str.indexOf(search)

console.log(str.slice(0, i) + str.slice(i + search.length))