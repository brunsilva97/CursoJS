const readline = require("readline-sync");

const sexo = readline.question("Qual o seu sexo? M - Masculino ou F - Feminino ");

if (sexo.toUpperCase() == "M") {
    console.log("Pode entrar no banheiro masculino.");
} else if (sexo.toLUpperCase() == "F") {
    console.log("Não pode entrar no banheiro masculino.");
} else {
    console.log("Opção desconhecida.");
}