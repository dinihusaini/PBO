// Fungsi generik menggunakan pola
function getElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    }
    throw new Error("Indeks di luar jangkauan");
}

let angka = [23, 12, 04];
let kata = ["dua", "dua belas", "empat"];
let tahun = [2002, 2003, 2004];

console.log(getElementAtIndex(angka, 0)); // Output: 20
console.log(getElementAtIndex(kata, 1)); // Output: "satu"
console.log(getElementAtIndex(tahun, 2));
