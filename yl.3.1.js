const readline = require('node:readline');
const { default: test } = require('node:test');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage mitu korda äratada:", äratamisekordus =>{
     let kord = 1
    while( kord <= äratamisekordus) {
        console.log("Tõuse ja sära!")
        kord++
    }
    rl.close()
} )