let n1: number = 42
let n2: number = 27
let n3: number = 18

if (n1 < n2 && n2 < n3) {
    console.log(n1, n2, n3)
}
else if (n1 < n2 && n3 < n2) {
    console.log(n1, n3, n2)
}
else if (n2 < n1 && n1 < n3) {
    console.log(n2, n1, n3)
}
else if (n2 < n1 && n3 < n1) {
    console.log(n2, n3, n1)
}
else if (n3 < n1 && n1 < n2) {
    console.log(n3, n1, n2)
} 
else {
    console.log(n3, n2, n1)
}

/*
let n1: number = 42
let n2: number = 27
let n3: number = 18 

if (n1 > n2) {
    let num = n1
    n1 = n2
    n2 = num
}
    if (n2 > n3) {
    let num = n2
    n2 = n3
    n3 = num
}
    if (n1 > n2) {
    let num = n1
    n1 = n2
    n2 = num
}

console.log(n1, n2, n3)
*/