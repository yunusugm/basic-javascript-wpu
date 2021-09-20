//! INFINITE LOOP
// while (true) {
//   console.log('Infinite Loop');
// }

//! STOP WHILE FROM USER
let userStop = true;
while (userStop) {
  console.log('User OK');
  userStop = confirm('Tambah console?');
}

//! STOP WHILE FROM PROGRAM
let programStop = 1;
while (programStop <= 5) {
  console.log('Program Stop');
  programStop++;
}

//! TUTORIAL WHILE
let tryStop = 1;
while (tryStop <= 3) {
  console.log(`Rumah No. ${tryStop}`);
  tryStop++;
}

//! LATIHAN WHILE
let panelNumber = 1;
let panelFull = 5;
while (panelNumber <= panelFull) {
  console.log(`Panel ke ${panelNumber} baik`);
  panelNumber++;
}

//! FOR
let ujiFor = 1;
let ujiFull = 6;
for (ujiFor; ujiFor <= ujiFull; ujiFor++) {
  console.log('Coba For Dasar');
}

//! LATIHAN WHILE FOR
let planeNumber = 1;
let planeGood = 4;
let planeTotal = 12;

while (planeNumber <= planeGood) {
  console.log(`Pesawat tipe ${planeNumber} siap terbang`);
  planeNumber++;
}
for (planeNumber = planeGood + 1; planeNumber <= planeTotal; planeNumber++) {
  console.log(`Pesawat tipe ${planeNumber} masuk bengkel`);
}
