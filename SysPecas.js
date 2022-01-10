var listaDePecas = ["Radiador do Motor","Junta de Cabeçote","Armotecedor","Disco de Freio"]//Variavel é para armazenar informação...
//Verifica a quantidade de peças cadastrada...
if (listaDePecas.length < 10){
    //É possível cadastrar mais peças. (Comando)
    console.log ("É possivel cadastrar mais peças.")
} else {
    //Não é possível cadastrar mais peças. (Comando)
    console.log("Não tem mais espaço na lista")
}

//Verifica o peso da peça cadastrada...
let peso = 50;
if(peso<100){
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça possui peso adequado")
}

//Verifica a quantidade de caracter do nome da peça...
let nomePeca ="Disco de Freio"
if (nomePeca.length>3){
    console.log("Nome de peça esta adequado para o cadastro!")
}else if(nomePeca.length ==0){
    console.log("O nome da peça não pode ser vazio")
} 
else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}


switch(nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio")
    break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres, digite o nome valido")

    default:
        console.log("o nome da peça está adequada")
        break;
}