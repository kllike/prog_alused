const readline = require('node:readline');
const { default: test } = require('node:test');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage Leedu perenimi:', nimi =>{
  if( nimi.slice(-2)=='ne'){
    console.log("Abielus")
  } else if (nimi.slice(-2)=='te'){
    console.log("Ei ole abielus")
} else if (nimi.slice(-1)=='e'){
    console.log("Maaramata")
} else{ 
    console.log("Pole Leedulanna perenimi")
}
    rl.close()
})