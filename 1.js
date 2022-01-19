let p = 20.5
let l = 30.0
let harga = 1500000
let ppn = 115/100

let total = (l * p) * harga
total *= ppn

let akhir = Math.round(total)

console.log("Total Harga = " + akhir);