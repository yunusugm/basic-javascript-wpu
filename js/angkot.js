// PENUMPANG = dinamis
//? Penumpang naik = tambahPenumpang (nama, array)

//! Rules
// todo angkot kosong penumpang naik ke kursi pertama
// todo jika ada kursi kosong isi kursi itu dahulu
// todo penumpang berikut berurutan
// todo kursi tidak akan pernah penuh dan akan terus nambah
// todo nama penumpang tidak boleh sama

//! TES CASE
// todo penumpang kosong = array kosong
// todo angkot sudah ada penumpang dan ada kursi kosong(undefined)
// todo ada nama yang sama di angkot > tampilkan nama itu sudah ada di angkot

//? Penumoang turun = hapusPenumpang
//! Rules
// todo angkot kosong return angkot kosong
// todo jika nama sesuai, hapus penumpang dgn undefined
// todo nama tidak sesuai. return keslahan

let penumpang = [];
let tambahPenumpang = function (nama, penumpang) {
  if (penumpang.length === 0) {
    penumpang.push(nama);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === undefined) {
        penumpang[i] = nama;
        return penumpang;
      } else if (penumpang[i] === nama) {
        console.log("Sudah ada");
        return penumpang;
      } else if (i === penumpang.length - 1) {
        penumpang.push(nama);
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (nama, penumpang) {
  if (penumpang.length === 0) {
    console.log("Angkot kosong");
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === nama) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i === penumpang.length - 1) {
        console.log("nama tidak sesuai");
        return penumpang;
      }
    }
  }
};

const cokiee = Math.ceil(Math.random());

class Pangkat {
  constructor(x = 1) {
    if ((x = 0)) {
      return;
    }

    return Pangkat(x - 1);
  }
}

const baru = new Pangkat(4);
