//* SUWIT JAWA

let tryAgain = true;

//? Pilihan Player
// while (tryAgain) {
//   let playerPick = prompt('Pilih pilihan dibawah: \n gajah, semut, orang');

//? Pilihan Computer
// let compPick = Math.random();
// if (compPick < 0.34) {
//   compPick = 'gajah';
// } else if (compPick >= 0.34 && compPick < 0.67) {
//   compPick = 'orang';
// } else {
//   compPick = 'semut';
// }

//? Rules
// let hasilSuit = '';

// if (playerPick === compPick) {
//   hasilSuit = 'SERI';
// } else if (playerPick === 'gajah') {
//   if (compPick === 'orang') {
//     hasilSuit = 'KAMU MENANG';
//   } else {
//     hasilSuit = 'KAMU KALAH';
//   }
// } else if (playerPick === 'orang') {
//   if (compPick === 'semut') {
//     hasilSuit = 'KAMU MENANG';
//   } else {
//     hasilSuit = 'KAMU KALAH';
//   }
// } else if (playerPick === 'semut') {
// if (compPick === 'gajah') {
//   hasilSuit = 'KAMU MENANG';
// } else {
//   hasilSuit = 'KAMU KALAH';
// }
//! SHORTHAND
//   hasilSuit = compPick === 'gajah' ? 'KAMU MENANG' : 'KAMU KALAH';
// } else {
//   alert('TOLONG MASUKKAN SESUAI KEYWORD YANG BENAR!');
// }

//? Hasil
//   if (
//     playerPick === 'gajah' ||
//     playerPick === 'semut' ||
//     playerPick === 'orang'
//   ) {
//     alert(
//       `Kamu memilih ${playerPick} dan musuh memilih ${compPick} maka hasilnya ${hasilSuit}`
//     );
//   }
//   tryAgain = confirm('Mau main lagi?');
// }
// alert('SANKYOU');

//* LATIHAN GAME LAIN TEBAK ANGKA
let angkaBulat = 10;
let strNone;
let cekChance = 3;

//? POP UP WELCOME
alert('Selamat datang di tebak angka \nKlik OK untuk lanjut');
while (tryAgain) {
  //? AMBIL INPUT COMP
  let compInput = Math.ceil(Math.random() * angkaBulat);
  console.log(compInput);

  for (cekChance = 3; cekChance >= 0; cekChance--) {
    //? AMBIL INPUT PLAYER
    playerInput = parseInt(prompt('Masukan angka 1 - 10'));
    //? RULES
    if (playerInput === compInput) {
      cekChance = 0;
    } else if (playerInput > compInput && playerInput <= 10) {
      strNone = `Angka terlalu besar, kamu masih punya ${cekChance} kesempatan`;
    } else if (playerInput < compInput && playerInput >= 1) {
      strNone = `Angka terlalu kecil, kamu masih punya ${cekChance} kesempatan`;
    } else {
      strNone = 'Masukan input yang benar!';
    }
    if (cekChance === 0 && playerInput === compInput) {
      strNone = `Kamu benar, angka yang dicari ${compInput}`;
    } else if (cekChance === 0) {
      strNone = `Permainan selesai angka yang dicari ${compInput}`;
    }
    //? HASIL
    alert(strNone);
  }
  tryAgain = confirm('lagi?');
}
alert('Terima Kasih Bro');
