const str: string = "hello world"
let search: string = "ell"

let i: number = str.indexOf(search)

console.log(str.slice(0, i) + str.slice(i + search.length))

/*
let str: string = "Hello World"
let search: string = "ell"
let res: string = str.replace(search, "")

console.log(res)
*/