const readline = require('node:readline');
const { default: test } = require('node:test');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Mitu pöialpoissi tahab õunu:", tahab =>{
    let õunKogus= 14
    let saadudÕun = 0
    for( let õun = 1; õun <= tahab; õun++){
        let õun = Math.ceil(Math.random() * 2)
console.log(õun)
saadudÕun += õun
    } 
    järgi = õunKogus - saadudÕun
    console.log(`Lumivalgekesel jäi: ${järgi} `)
    rl.close()
} )