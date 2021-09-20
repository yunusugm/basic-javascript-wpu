let me = 'Yunus Alif';
console.log(me.charAt(9));

let nom = Math.floor(Math.random() * 4);
console.log(nom);

//! Function Declaration
function jumlahBilangan(a, b) {
  let total;
  total = a + b;

  return total;
}

//! Function Expression
let jumlahDuaBilangan = function (a, b) {
  let jumlah;
  jumlah = a - b;

  return jumlah;
};

//! PANGGIL FUNCTION
console.log(jumlahBilangan(30, 10));
console.log(jumlahDuaBilangan(100, 40));

//! Menjumlahkan 2 volume kubus
//? Sisi masing masing kubus
// let kubusOne = 8;
// let kubusTwo = 3;
// let kubusThree = 6;

// function volumeKubus(a, b) {
//? Declare Variable
// let volumeCubeOne;
// let volumeCubeTwo;
// let jumlahCube;

//? Hitung volume masing" volume
// volumeCubeOne = a * a * a;
// volumeCubeTwo = b * b * b;

//? Jumlah 2 volume
// jumlahCube = volumeCubeOne + volumeCubeTwo;

//? Return Nilai
//   return jumlahCube;
// }
// console.log(volumeKubus(kubusOne, kubusThree));

//! PARAMETER DAN ARGUMEN
function kali(a, b) {
  return a * b;
}

//TODO Simpan variabel di argument
// let a = parseInt(prompt('Angka'));
// let b = parseInt(prompt('Angka'));
// let hasil = tambah(a, b);
// console.log(hasil);

//TODO Tambah operasi math di argument
// let x = 6;
// let y = 9;
// let kali = tambah(x - 1, y + 1);
// console.log(kali);

function tambah(a, b) {
  return a + b;
}

//TODO Memasukan function di argument
let total = kali(tambah(3, 5), tambah(1, 4));
console.log(total);

//! ARGUMENTS
function nyoba() {
  return arguments;
}

let hasilCoba = nyoba(12, 10, 'hello', 'world', true);
console.log(hasilCoba);

function plus() {
  let totalCoba = 0;
  for (let i = 0; i < arguments.length; i++) {
    totalCoba += arguments[i];
  }
  return totalCoba;
}
console.log(plus(1, 2, 5, 4));

//! REFACTORING
let kubusOne = 8;
let kubusTwo = 3;

function volumeDuaKubus(a, b) {
  return a * a * a + b * b * b;
}
console.log(volumeDuaKubus(kubusOne, kubusTwo));

//! VARIABEL SCOPE
//TODO Global Variabel Scope
// let gloScop = 10;
// ('use strict');
function cekSatu() {
  //todo Function Variabel Scope
  let funScop = 9;
  gloScop = 4;
  console.log(gloScop);
  console.log(funScop);
}
//!Menjalankan function
cekSatu();
console.log(gloScop);
//? Error karena tidak mengenali variabel di dalam function
// console.log(funScop);

//? Parameter merupakan function scope
let a = 1;
function tesDua(a) {
  console.log(a);
}
tesDua('Timpa variabel a');
console.log(a);

let b = 7;
function testTiga(b) {
  console.log(b);
}
testTiga(b);
console.log(b);

//! REKURSIF
// function tes() {
//   return tes();
// }
// tes();

//todo REKURSIF MENGGANTIKAN FOR
function tampilAngka(n) {
  //BASE CASE
  if (n === 0) {
    return 0;
  }
  // Pemanggilan function lagi
  console.log(n);
  return tampilAngka(n - 1);
}
tampilAngka(5);

//todo REKURSIF FAKTORIAL
function faktorial(x) {
  // BASE CASE
  if (x === 0) {
    return 1;
  }
  // Pemanggilan function lagi
  return x * faktorial(x - 1);
}

console.log(faktorial(4));
