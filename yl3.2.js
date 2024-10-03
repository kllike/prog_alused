const readline = require('node:readline');
const { default: test } = require('node:test');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage ringide arv:", ringideArv =>{
    let summa = 0
    for (let ring= 1;ring <= ringideArv; ring++){
        if (ring % 2 == 0){
            summa = summa + ring
        } 
    } 
    console.log(`Kogu porgandite kogu arv on: ${summa} `)
    rl.close()
})