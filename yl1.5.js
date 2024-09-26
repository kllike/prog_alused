const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(" Sisestage ainepunktide arv:", ainepunktid => {
  rl.question(" Sisestage nädalate arv:", nädal => {
    let ajakulu = (ainepunktid * 26)/ nädal 
    ajakulu = Math.round(ajakulu)
    console.log(ajakulu)
    rl.close()
  })
})