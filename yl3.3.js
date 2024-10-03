const readline = require('node:readline');
const { default: test } = require('node:test');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Täringute arv:", täringud =>{
        for( let arv= 1; arv <= täringud; arv ++){
            let arv = Math.floor(Math.random() * 6) + 1
            console.log(arv)
        } 
    
    rl.close()
} )