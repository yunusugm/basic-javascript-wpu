// let orang = {
//   nama: 'Yunus',
//   umur: 17,
//   lulus: true,
//   alamat: {
//     jalan: 'dewi sartika',
//     kota: 'semarang',
//     provinsi: 'jateng',
//   },
// };
// console.log(orang.alamat.kota);

//! OBJECT LITERAL
let siswa = {
  //key   //value
  nama: "Yunus Alif",
  nis: 171321523,
  email: "yunusanr@gmail.com",
  jurusan: "TTL",
};
let siswa1 = {
  //key   //value
  nama: "Doni Alif",
  nis: 171321523,
  email: ["donianr@gmail.com", "ardi@yahoo.co.id"],
  jurusan: { tanah: "tkb", tanahjumlah: 12, listrik: "ttl", old: true },
};

console.log(siswa1.jurusan);

//! FUNCTION DECLARATION
function buatObjectSiswa(nama, nis, email, jurusan) {
  // deklarasi variabel object
  let siswa = {};
  // isi properti object
  siswa.nama = nama;
  siswa.nis = nis;
  siswa.email = email;
  siswa.jurusan = jurusan;
  return siswa;
}
let siswa100 = buatObjectSiswa("yunus", 123, "www@gmail.com", "ttl");

//! Constructor (function khusus object) SERING DIPAKAI
class Siswa {
  constructor(nama, nis, email, jurusan) {
    // let this = {}
    this.nama = nama;
    this.nis = nis;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
  }
}
// panggil constructor
const siswa10 = new Siswa("yunus", 123, "www@gmail.com", "ttl");

//! REVIEW
//? Functional declaration
// function halo() {
//   console.log('halo');
// }
// halo();

//? Object Literal
// let obj = {};
// obj.helo = function () {
//   console.log('hey');
// };
// obj.helo();

//? Constructor
// function Hello() {
//   console.log('hello');
// }
// const hey = new Hello();

//! THIS
console.log(this === window);

function halo() {
  console.log(this);
  console.log("halo");
}
halo();

let obj = { nama: "yunus", umur: 10 };
obj.helo = function () {
  console.log(this);
  console.log("hey");
};
obj.helo();

function Hello() {
  console.log(this);
  console.log("hello");
}
const hey = new Hello();

//! Pengelolaan angkot
// Nama Sopir
// Trek angkot
// Kas angkot
// Penumpang(penumpang naik, penumpang turun)

//? Data awal
// sopir = sandika
// trek = sampangan - simoang lima
// kas = o rupiah

class Angkot {
  constructor(sopir, trek, penumpang, kas) {
    this.sopir = sopir;
    this.trek = trek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    };
    this.penumpangTurun = function (namaPenumpang, bayar) {
      if (this.penumpang.length === 0) {
        console.log("Masih kosong");
        return this.penumpang;
      }
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] === namaPenumpang) {
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
        }
      }
    };
  }
}
const angkot1 = new Angkot("Yunus", ["sampangan", "simpang lima"], [], 0);

const angkot2 = new Angkot("Rio", ["Unnes", "Undip"], [], 0);

console.log(angkot1.penumpangNaik("Gino"));
console.log(angkot1.penumpangNaik("Goy"));
console.log(angkot1.penumpangTurun("Gino", 1000));
console.log(angkot1.penumpangTurun("Goy", 3000));
console.log(angkot1.kas);
console.log(angkot2);

const dataSiswa = (name, age, hasParent, isPerson) => {
  const siswa = {
    name: name,
    age: age,
    hasParent: hasParent,
    isPerson: isPerson,
  };

  return siswa;
};

// button click animation

const btn = document.getElementById("btn");

btn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x = (e.clientX = e.target.offsetLeft);
    let y = (e.clientY = e.target.offsetTop);

    let ripple = document.createElement("span");
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });
});
