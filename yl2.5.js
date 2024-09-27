const readline = require('node:readline');
const { default: test } = require('node:test');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage kirja suurus megabaitides:", (suurus) => {
    rl.question("Sisestage kirja teema pealkiri:", (pealkiri) => {
      rl.question("Kas kirjaga on kaasas fail (jah/ei):", (failKaasas) => {
        // Tingimus: kas pealkiri on tühi või kiri on suurem kui 1 MB ja fail on kaasas
        if (pealkiri || ((suurus) > 1 && failKaasas === 'jah')) {
          console.log("Kiri on spämm");
        } else {
          console.log("Kiri ei ole spämm");
        }
        rl.close();
      });
    });
  });