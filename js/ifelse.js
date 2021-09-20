let numberIf = prompt('Masukan angka');
//! IF
if (numberIf > 30) {
  alert('Angkamu lebih besar dari punyaku');
} //! ELSE
else {
  alert('Angkamu lebih kecil dari punyaku');
}

//! LATIAN IFELSE
carNumber = 1;
carGood = 6;
carTotal = 10;

for (carNumber; carNumber <= carTotal; carNumber++) {
  if (carNumber <= carGood) {
    console.log(`Mobil ke ${carNumber} josz`);
  } else {
    console.log(`Mobil ke ${carNumber} ampasz`);
  }
}

let cobaBol = true;
while (cobaBol) {
  let cobaInt = prompt('Masukkan Angka');
  if (cobaInt % 2 === 0) {
    alert('Kamu punya angka genap');
  } else if (cobaInt % 2 === 1) {
    alert('Kamu punya angka ganjil');
  } else {
    alert('Tolong masukkan angka');
  }
  cobaBol = confirm('Coba lagi?');
}
alert('Udah woy');

let cobaSwitch = parseInt(prompt('Masukan angka'));
//? FUNGSI parseInt mengubah inputan user menjadi integer

if (cobaSwitch <= 100 && cobaSwitch !== 50) {
  alert('Anda memasukkan angka ' + cobaSwitch);
} else if (cobaSwitch === 50) {
  alert('Anda berada di tengah');
} else {
  alert('Angka anda melebihi batas');
}
