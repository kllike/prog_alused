const readline = require('node:readline');
const { default: test } = require('node:test');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Kas soovite istekohta valida ise ("ise") või loosida ("loos"):', (valik) => {
    if (valik === 'ise') {
      // Kui kasutaja valib ise koha
      rl.question('Kas soovite aknakohta("aken") või mitte (muu):', (kohtValik) => {
        let istekoht;
        if (kohtValik === 'aken') {
          istekoht = 'Aknakoht';
        } else {
          istekoht = 'Vahekäigukoht';
        }
        console.log(`Valisite ise: ${istekoht}`);
        rl.close();
      });
    } else if (valik === 'loos') {
      // Kui kasutaja valib loosimise
      let loositavkoht = Math.random();
      let istekoht;
      if (loositavkoht < 1 / 3) {
        istekoht = 'Aknakoht';
      } else {
        istekoht = 'Vahekäigukoht';
      }
      console.log(`Istekoht loositi: ${istekoht}`);
      rl.close();
    } else {
      console.log('Vigane sisend. Palun valige kas "ise" või "loos".');
      rl.close();
    }
  });