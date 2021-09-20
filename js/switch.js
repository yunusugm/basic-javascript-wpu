let switchTest = parseInt(prompt('Masukan angka'));
//! SWITCH HARUS NILAI TIDAK BISA KONDISI
switch (switchTest) {
  case 1:
    alert('Angka kamu satu');
    break;
  case 2:
    alert('Angka kamu 2');
    break;
  case 3:
    alert('Angka kamu 3');
    break;
  default:
    alert('Kamu salah');
    break;
}

//! CARA PANJANG
let testSwitch = prompt(
  'Masukan salah satu keyword dibawah. \nNasi, Softdrink, Burger, Susu'
);
switch (testSwitch) {
  case 'Nasi':
    alert('Sehat');
    break;
  case 'Susu':
    alert('Sehat');
    break;
  case 'Softdrink':
    alert('Tidak Sehat');
    break;
  case 'Burger':
    alert('Tidak Sehat');
  default:
    alert('Masukan sesuai keyword');
    break;
}

//! SHORTHAND
let testShort = prompt(
  'Masukan salah satu keyword dibawah. \nNasi, Softdrink, Burger, Susu'
);
switch (testShort) {
  case 'Nasi':
  case 'Susu':
    alert('Sehat');
    break;
  case 'Softdrink':
  case 'Burger':
    alert('Tidak sehat');
    break;
  default:
    alert('Salah keyword');
    break;
}
