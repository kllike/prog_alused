const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisesta ohutemeratuur:", temperatuur => {
    if (temperatuur < 4.0){ 
        console.log("On jaatumise oht")
    }
    else {
        console.log(" Ei ole jaatmusie oht")
    }
    rl.close()
})