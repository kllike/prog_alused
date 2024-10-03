const readline = require('node:readline');
const { default: test } = require('node:test');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage mitu korda äratada:", äratamisekordus =>{
    for(let kord = 1; kord <= äratamisekordus; kord++){
        console.log("Tõuse ja sära!")
    } 
    rl.close()
} )