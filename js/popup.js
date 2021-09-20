// ALERT
alert('Welcome');
alert('To');
alert('My');
alert('Code');

// PROMPT
let cobaPrompt = prompt('Isikan Angka Bebas');
alert('Kamu menulis angka ' + (cobaPrompt % 2 === 0 ? 'genap' : 'ganjil'));
console.log(cobaPrompt < 50 ? 'Lebih Kecil' : 'Lebih Besar');

// CONFIRM
let cobaConfirm = confirm('Kamu mau transferin aku uang?');
if (cobaConfirm === true) {
  alert('Terima kasih orang kaya');
} else {
  alert('Kamu miskin ya?');
}

// MIX POP UP
let mixPop = true;
let badWord;
while (mixPop) {
  badWord = prompt('Tulis satu kata kasarmu ya');
  alert('Kamu juga ' + badWord);
  mixPop = confirm('Masih mau nulis lagi?');
}
alert('Sudah enakan ya');
