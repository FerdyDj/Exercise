const a: string = "Madam"
let x: string = ""
let y: string = ""

for (let i = 0; i < a.length; i++) {
    x = x + a.charAt(i)
}

for (let i = a.length; i >= 0; i--) {
    y = y + a.charAt(i)
}

if (x.toLowerCase === y.toLowerCase) {
    console.log("Palindrome")
} else {
    console.log("Not a Palindrome")
}