/*
const c: number = 1000

console.log("Rp. " + new Intl.NumberFormat('IDR').format(c) + ",00")
*/

/*
const amount = 1000;

const formatted = amount.toLocaleString("id-ID",{
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
})

console.log(formatted.replace("Rp", "Rp."))
*/

let n: number = 1234567
let nStr: string = n.toString()
let res: string = ""

for (let i = nStr.length - 1; i >= 0; i--) {
    res = nStr.charAt(i) + res
    if ((nStr.length - i) % 3 == 0) {
        res = "." + res
    }
}

console.log(`Rp. ${res},00`)