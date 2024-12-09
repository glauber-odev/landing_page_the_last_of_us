var sobrenome = 'Reis'
const nome = 'Luiz' //const e imutavel
let idade = 28
let idade2 = '28' //string

idade > idade + 1

let isIsOnline = true

const valorDoProduto = 30
const lastTransactionValues =  [30,30.5,20]  //array
let saldo = 50



console.log(idade)

/*if( saldo >= valorDoProduto ){
    saldo = saldo - valorDoProduto;
    lastTransactionValues.push(valorDoProduto);
    console.log(`Parabéns, sua compra foi realizada com sucesso! Seu saldo agora é ${saldo}`); //use a crase em vez de aspas
}else{
    console.log(`Ops! Seu saldo é insuficiente.`)
}*/


//obejeto {}
const user = {

    nome: 'Luiz',
    idade: 28,
    isOnline: true,
    lastTransactionValues: [30,30.5,20],
    saldo: 50


}

console.log(user);


//FUNÇÃO


//usa apostrofo em strings
function transaction (userObj , value ) {
    if( userObj.saldo >= value ){
        userObj.saldo = userObj.saldo - value;
        return `Parabéns, sua compra foi realizada com sucesso! Seu saldo agora é ${userObj.saldo}`; //use a crase em vez de aspas
    }else{
        return `Ops! Seu saldo é insuficiente.`;
    }
}

console.log(transaction (user , valorDoProduto ));



for(let i= 0; i <= 10 ; i++ ){
    console.log(i);
}

const nomes = [`Luiz`,`Nicole`, `João`, `Pedro`, "Marina", "Amanda"];

for (let i = 0 ; i < nomes.length ; i++){
    console.log(nomes[i]);
}



//DOM

//Capturando elementos

const ul = document.querySelector(".lista");

console.log(ul);


// CRIANDO ELEMENTO
const li = document.createElement("li");
const dadoInserido = "Soft-Skills";

li.innerHTML = `<p class="lucida">${dadoInserido}</p>`;

ul.appendChild(li);