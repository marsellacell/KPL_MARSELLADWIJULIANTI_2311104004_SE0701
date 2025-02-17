import process from "process";
import readline from "readline";

const input = readline.createInterfaces({
    input: process.stdin,
    output: process.stdout
})

input.question("Siapa nama kamu?" , (nama) =>{
    console.info('Hallo ${nama}')

    input.close();
})