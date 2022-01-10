//Declarando o nome...
let nomeEvento = 'Conhecendo Java Script';
 console.log(nomeEvento);

//Variável data do evento...
var data = new Date();
var dataDoEvento = 12/24/2021
if (dataDoEvento => new Date){
console.log("Data permitida, informe os dados do evento:")
}else{
    console.log("Data não permitida, escolha outra data para cadastro")
}

//Variável idade do participante...
var idadeDoParticipante = 25

if (idadeDoParticipante >= 18){
    console.log("Cadastro permitido, informe seus dados de cadastro.")
}else { 
    console.log("Cadastro não permiditido, Evento permitido somente para maiores de 18 anos")
}

let listaDeParticipantes = ["Part1","Part2","Part3","Part4","Part5","Part6","Part7"]//Variavel é para armazenar informação...
//Verifica a quantidade de peças cadastrada...
if (listaDeParticipantes.length < 100){
    //É possível cadastrar mais peças. (Comando)
    console.log ("Cadastro efetuado com sucesso!!!")
} else {
    //Não é possível cadastrar mais peças. (Comando)
    console.log("Cadastro não permitido, vagas esgotadas.")
}