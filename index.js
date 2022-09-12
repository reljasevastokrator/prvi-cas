let osoba = {
  ime: 'darko',
  prezime: 'darkovic',
  godiste: 2000,
  pozdrav: function () {
    console.log(
      `zdravo, ja sam ${this.ime} ${this.prezime}. Imam ${
        2022 - this.godiste
      } godina`
    );
  },
};

//console.log(osoba.godiste);
//osoba.pozdrav();

//osoba.godiste = 1999;
//osoba.pozdrav();

//osoba.pozdrav = function () {
//console.log('zdravo');
//};
//osoba.pozdrav();

osoba.visina = 175;
console.log(Object.enum(osoba));
