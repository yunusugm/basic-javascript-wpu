// Array
let hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu', 'Minggu'];
let siswa = ['Yunus', 'Alif', 'Nur', 'Rahman'];

let myFunc = function () {
  alert('Hello Bro');
};

let campurTipeData = ['Nama', 12, false, myFunc];
console.log(typeof campurTipeData);

//! Array didalam array / multidimensi
let mixTipeData = ['Nama', 12, false, [7, 8, 9]];
//? Menampilkan Array didalam Array
console.log(mixTipeData[3][1]);

//! Key and Value Pair
let binatang = ['Kucing', 'Kelinci', 'Gajah', 'Sapi'];
console.log(binatang.length);

let animal = [];
animal = ['Ayam', 'Kambing', 'Anjing'];
console.log(animal[1]);

//! Manipulasi Array

//todo Tambah isi array
let arr = ['a', 1, true];
console.log(arr);

let arra = [];
arra[0] = 'b';
arra[1] = 2;
arra[2] = false;
arra[5] = 'hey';
console.log(arra);

//todo Menghapus Isi Array
let deleteArr = ['Yunus', 'Alif', 'Nur', 'Rahman'];
deleteArr[1] = undefined;
console.log(deleteArr);

//todo Menampilkan isi Array
let showArr = ['Yunus', 10, true];

for (let i = 0; i < showArr.length; i++) {
  console.log(`Mahasiswa ke ${i + 1} ${showArr[i]}`);
}

//! Method Pada Array
let cobaMethod = ['Yunus', 'Alif', 'Nur', 'Rahman'];

//todo LENGTH
console.log(cobaMethod.length);

//todo JOIN
console.log(cobaMethod.join());
console.log(cobaMethod.join(' ')); //merubah koma jadi spasi

//todo PUSH & POP (BEKERJA U/ ELEMENT TERAKHIR ARRAY)
cobaMethod.push('Joni', 'Jimmy'); //tambah elemen
console.log(cobaMethod.join(' '));

cobaMethod.pop(); //hapus elemen
cobaMethod.pop();
console.log(cobaMethod.join(' '));

//todo UNSHIFT DAN SHIFT (BEKERJA U/ ELEMENT AWAL ARRAY)
cobaMethod.unshift('Gabril', 'Cloy'); //tambah elemen
console.log(cobaMethod.join(' '));

cobaMethod.shift(); //hapus elemen
console.log(cobaMethod.join(' '));

//todo SLICE dan SPLICE (BEKERJA U/ ELEMENT TENGAH ARRAY)

//? splice(mulai index berapa, mau hapus berapa(opt), elemen baru1,elemen baru 2 (opt))
cobaMethod.splice(1, 2, 'Jery', 'Tom');
console.log(cobaMethod.join(' '));

//? slice(awal, akhir) index awal terbawa di array baru tapi index akhir tidak. Slice harus buat var baru
let cobaMethodDua = cobaMethod.slice(1, 3);
// console.log(cobaMethod.join(' '));
console.log(cobaMethodDua.join(' '));

//! LOOPING PADA ARRAY
let cekMethod = [1, 2, 3, 4, 5, 6, 7, 8];

//todo FOREACH
for (let i = 0; i < cekMethod.length; i++) {
  console.log(cekMethod[i]);
}

let checkMethod = ['Tom', 'Jerry', 'Simi'];
let print = function (a) {
  console.log(a);
};
checkMethod.forEach(print);

let namaSiswa = ['Yunus', 'Alif', 'Nur', 'Rahman'];
namaSiswa.forEach(function (e, i) {
  console.log(`Siswa ke ${i + 1} adalah ${e}`);
});

//todo MAP
let numbar = [7, 1, 6, 3, 5, 2, 8, 4];
let numbarTwo = numbar.map((e) => {
  e * 2;
});
console.log(numbarTwo.join(' '));

//todo SORT
// let sortNum = numbar.sort();
// console.log(sortNum.join(' '));

let sortNumber = [1, 20, 10, 30, 3, 2];
//?
sortNumber.sort(function (x, y) {
  return x - y;
});
console.log(sortNumber.join());

//! SEARCH ELEMENT ARRAY
//todo FILTER
let filter = [7, 1, 6, 3, 5, 2, 8, 4];
let filterTwo = filter.filter(function (x) {
  return x > 5;
});
console.log(filterTwo.join());

//todo FIND
let find = [7, 1, 6, 3, 5, 2, 8, 4];
let findTwo = find.find(function (a) {
  return a === 5;
});
console.log(findTwo);

//! MDN
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
console.log(myArray);

console.log(myArray[myArray.length - 1]);

let dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
console.log(dogNames.toString());
