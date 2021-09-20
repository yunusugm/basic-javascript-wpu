// OPERATOR
let numOne = 3;
let numTwo = 7;
let testPlus = numOne + numTwo;
let testNan = numTwo / 'qwerty';
let mathOperator = 7 + 9;
let mathModul = 29 % 5;
let mathList = (9 - 1) * 2 + 4 / 4;
console.log(testPlus);
console.log(testNan);
console.log(mathOperator);
console.log(mathModul);
console.log(mathList);

// PENUGASAN
let tugasTest = 10;
tugasTest += 3;
tugasTest -= 7;
tugasTest *= 4;
tugasTest /= 2;
tugasTest %= 2;
// Hitungan dilanjutkan dari +3 -7 *4 /2 %2 jadi tidak dari variabel terakhir
console.log(tugasTest);

// PERBANDINGAN
let firstChild = 20;
let secondChild = 'string';
let thirdChild = true;
let fourthChild = 5;
console.log(firstChild !== secondChild);
console.log(firstChild === thirdChild);
console.log(firstChild >= fourthChild);
console.log(firstChild <= fourthChild);

// LOGICAL
let firstLogic = 6;
let secondLogic = 9;
let thirdLogic = 12;
let fourthLogic = 21;
console.log(firstLogic % 2 === 0 && secondLogic >= firstLogic);
console.log(thirdLogic >= fourthLogic || firstLogic <= secondLogic);
console.log(!(fourthLogic % 3 === 0));

// STRING
let strTest = "What's";
let strOne = 'New';
let strInteger = 10;
let strNumber = '15';
console.log(strTest);
console.log(strTest + strOne);
console.log(`${strOne} ${strInteger}`);
console.log(strInteger + strNumber);

// TYPEOF
let typeOne = 100;
let typeTwo = 'One Hundred';
let typeThree = false;
console.log(typeof typeOne);
console.log(typeof typeTwo);
console.log(typeof typeThree);

// KONDISIONAL
let kondisiOne = 30;
let kondisiTwo = 17;
console.log(kondisiOne % 2 === 0 ? 'genap' : 'ganjil');
console.log(
  kondisiTwo >= 10 && kondisiTwo === 20 ? 'semua benar' : 'ada salah'
);

// STRING DATA TYPE
let dataStringOne = "Hari ini hari Jum'at";
let dataStringTwo = 'Gerakan senam sehat';
let dataStringThree = "'Gerakan senam sehat' \t dilakukan \n pada hari Jum'at";
console.log(dataStringThree);
console.log(`${dataStringTwo} dilaksanakan di ${dataStringOne}`);
console.log(dataStringThree.length);

// BOOLEAN DATA TYPE
let boleanTest = 35;
console.log(boleanTest === 35);
console.log(Boolean(0));
