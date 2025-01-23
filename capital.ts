const str: string = "hello world now"

const search: Array<string> = str.split(" ")

for (let i = 0; i < search.length; i++) {
    search[i] = search[i][0].toUpperCase() + search[i].substring(1)
}

console.log(search.join(" "))