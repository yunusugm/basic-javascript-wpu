//! LATIHAN ELSE IF DENGAN OR LOGIC
busNumber = 1;
busGood = 6;
busLembur = 7;
busTotal = 10;

for (busNumber; busNumber <= busTotal; busNumber++) {
  if (busNumber <= busGood) {
    console.log(`Mobil ke ${busNumber} baik`);
  } else if (busNumber === busLembur || busNumber === busLembur + 2) {
    console.log(`Mobil ke ${busNumber} lembur`);
  } else {
    console.log(`Mobil ke ${busNumber} buruk`);
  }
}

//! LATIAN ELSE IF DENGAN AND LOGIC
motorNumber = 1;
motorGood = 6;
motorLembur = 7;
motorTotal = 10;

for (motorNumber; motorNumber <= motorTotal; motorNumber++) {
  if (motorNumber <= motorGood && motorNumber !== 4) {
    console.log(`Mobil ke ${motorNumber} baik`);
  } else if (
    motorNumber === motorLembur ||
    motorNumber === motorLembur + 2 ||
    motorNumber === motorLembur - 2
  ) {
    console.log(`Mobil ke ${motorNumber} lembur`);
  } else {
    console.log(`Mobil ke ${motorNumber} buruk`);
  }
}

//! PENGULANGAN DAN PENGKONDISIAN BERSARANG
let strKosong = '';
let starTest = 1;
let starCol;
for (starTest; starTest <= 5; starTest++) {
  for (starCol = 1; starCol <= 5; starCol++) {
    strKosong += 'x';
  }
  strKosong += '\n';
}
console.log(strKosong);

// let s = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     s += 'x';
//   }
//   s += '\n';
// }
// console.log(s);

let sarTest = 1;
let sarCol;
for (sarTest; sarTest <= 8; sarTest++) {
  for (sarCol = 1; sarCol <= sarTest; sarCol++) {
    strKosong += 'x';
  }
  strKosong += '\n';
}
console.log(strKosong);

let reverseTest = 10;
let reverseRow;
for (reverseTest; reverseTest >= 1; reverseTest--) {
  for (reverseRow = 1; reverseRow <= reverseTest; reverseRow++) {
    strKosong += 'x';
  }
  strKosong += '\n';
}
console.log(strKosong);
