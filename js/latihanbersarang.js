//! LATIHAN SATU
let strKosong = '';
let firstNumber;
let secondNumber;
let thirdNumber;
let testHuruf = 'x';

for (firstNumber = 1; firstNumber <= 10; firstNumber++) {
  for (secondNumber = 1; secondNumber < firstNumber; secondNumber++) {
    strKosong += ' ';
  }
  for (thirdNumber = 10; thirdNumber >= firstNumber; thirdNumber--) {
    strKosong += testHuruf;
  }
  strKosong += '\n';
}
console.log(strKosong);
console.log('\n');

//! LATIHAN DUA
let strNol = '';
for (firstNumber = 1; firstNumber <= 10; firstNumber++) {
  for (secondNumber = 1; secondNumber <= firstNumber; secondNumber++) {
    strNol += testHuruf;
  }
  strNol += '\n';
}
for (firstNumber = 1; firstNumber <= 10; firstNumber++) {
  for (thirdNumber = 10; thirdNumber - 1 >= firstNumber; thirdNumber--) {
    strNol += testHuruf;
  }
  strNol += '\n';
}
console.log(strNol);
console.log('\n');

//! LATIHAN TIGA
let strEmpty = '';
for (firstNumber = 1; firstNumber <= 10; firstNumber++) {
  for (secondNumber = 1; secondNumber <= firstNumber; secondNumber++) {
    strEmpty += testHuruf;
  }
  strEmpty += '\n';
  for (thirdNumber = 10; thirdNumber - 1 >= firstNumber; thirdNumber--) {
    strEmpty += testHuruf;
  }
  strEmpty += '\n';
}
console.log(strEmpty);
console.log('\n');

//! LATIHAN EMPAT
let strNool = '';
for (firstNumber = 10; firstNumber >= 1; firstNumber--) {
  for (secondNumber = 1; secondNumber <= firstNumber; secondNumber++) {
    strNool += testHuruf;
  }
  strNool += '\n';
}
for (firstNumber = 1; firstNumber < 10; firstNumber++) {
  for (thirdNumber = 1; thirdNumber - 1 <= firstNumber; thirdNumber++) {
    strNool += testHuruf;
  }
  strNool += '\n';
}
console.log(strNool);
console.log('\n');

//! LATIHAN LIMA
let strNuul = '';
for (firstNumber = 1; firstNumber <= 5; firstNumber++) {
  for (secondNumber = 5; secondNumber > firstNumber; secondNumber--) {
    strNuul += ' ';
  }
  for (
    thirdNumber = 1;
    thirdNumber - firstNumber < firstNumber;
    thirdNumber++
  ) {
    strNuul += testHuruf;
  }
  strNuul += '\n';
}
console.log(strNuul);
console.log('\n');

//! LATIHAN ENAM
let strNuol = '';
for (firstNumber = 1; firstNumber <= 5; firstNumber++) {
  for (secondNumber = 5; secondNumber > firstNumber; secondNumber--) {
    strNuol += ' ';
  }
  for (thirdNumber = 1; thirdNumber <= firstNumber; thirdNumber++) {
    strNuol += testHuruf;
    strNuol += ' ';
  }
  strNuol += '\n';
}
for (firstNumber = 5; firstNumber > 1; firstNumber--) {
  for (secondNumber = 5; secondNumber >= firstNumber; secondNumber--) {
    strNuol += ' ';
  }
  for (thirdNumber = 1; thirdNumber + 1 <= firstNumber; thirdNumber++) {
    strNuol += testHuruf;
    strNuol += ' ';
  }
  strNuol += '\n';
}
console.log(strNuol);
console.log('\n');

//! LATIHAN TUJUH
let strNoul = '';
for (firstNumber = 1; firstNumber <= 10; firstNumber++) {
  if (firstNumber % 2 === 1) {
    for (secondNumber = 1; secondNumber <= 10; secondNumber++) {
      if (secondNumber % 2 === 1) {
        strNoul += testHuruf;
      } else {
        strNoul += ' ';
      }
    }
  } else {
    for (thirdNumber = 1; thirdNumber <= 10; thirdNumber++) {
      if (thirdNumber % 2 === 1) {
        strNoul += ' ';
      } else {
        strNoul += testHuruf;
      }
    }
  }
  strNoul += '\n';
}
console.log(strNoul);
console.log('\n');

//! LAST SEGITIGA PASCAL
//? BINGUNG
let playPick = parseInt(
  prompt('Masukan sembarang angka\nJangan besar- besar hehe')
);

let pasCal = '';
let calPas;

for (firstNumber = 1; firstNumber <= playPick; firstNumber++) {
  for (secondNumber = playPick; secondNumber > firstNumber; secondNumber--) {
    pasCal += ' ';
  }
  calPas = 1;
  for (thirdNumber = 1; thirdNumber <= firstNumber; thirdNumber++) {
    pasCal += calPas + ' ';
    calPas *= (firstNumber - thirdNumber) / thirdNumber;
  }
  pasCal += '\n';
}
console.log(pasCal);
