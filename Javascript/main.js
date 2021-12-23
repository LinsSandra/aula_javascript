

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";

    //console.log(document.getElementById("agradecimento"));

   // alert("Obrigada por clicar");
}

function redirecionar(){
   // window.open("https://globallabs.academy/");
    window.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
   // alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}



/*var validar=0;
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade =prompt("Qual sua idade?");
console.log(validar);
validaIdade(idade);
*/

/*function soma(n1,n2){
    return n1 + n2;
}
function setReplace(frase,nome, novo_nome){
    return frase.replace(nome, novo-nome);
}

alert(soma(5,10));
alert (setReplace("Vai Japão", "Japão", "Brasil"));
*/


/*var d = new Date();
alert(d);
alert(d.getMonth + 1); // traz o mês atual
alert(d.getHours());
alert(d.getMinutes());
alert(d.getDay());
*/

//EXEMPLOS DE ARRAYS

//var nome = "Sandra Lins";
//var idade = 55;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//var idade = "55"; // com as aspas vai entender que é uma string e o resultado é 5510
//var idade = "10";
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toUpperCase()); // coloca tudo em maiusculo
//console.log(frase.toLowerCase()); // coloca tudo em minusculo
//console.log(frase.replace("Japão" , "Brasil"));
//alert(frase.replace("Japão" , "Brasil"));
//var n1 = 10;
//var n2 = 5;
//console.log(n1 * n2); // vai multiplicar. pode somar, dividir, subtrair
var lista = ["Maçã", "Pêra", "Uva"];
lista.push("Laranja");
console.log(lista.toString()); //traz como uma String, perdendo a referência de lista
//console.log(lista.length); // ver o tamanho da lista
//console.log(lista.reverse); //traz os elementos ao contrário na lista
//lista.pop(); vai tirar o ultimo elemento
//console.log(lista);
//console.log(lista[1]); Vai me mostrar só a pêra pq começa da posição zero
//alert(lista);
// console.log(lista.toString[0]); ele vai trazer a primeira letra do nome da lista
//console.log(lista.join(" - ")); cola um espaço e um traço entre os elementos da lista, posso colocar |, /, etc

// EXEMPLOS DE DICIOÁRIO

/*var fruta = {nome: "Maçã" , cor:"Vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//Lista de dicionario
var fruta = [{nome: "Maçã" , cor:"Vermelha"}, {nome: "Uva" , cor:"Roxa"}]
console.log(frutas.nome);
alert(frutas[1].nome);

//EXEMPLOS DE CONDICIONAIS

/*var idade = prompt("Qual sua idade?");//exibi uma pergunta para o usuário e a resposta vai ficar gravada na variavel idade
//var idade = 18;
if (idade <= 18){
    alert("menor de idade");
}else{
    alert("maior de idade");
};
*/

// EXEMPLOS DE LAÇOS DE REPETIÇÃO

var count;
for(count= 0, count <= 5, count++){
    alert(count);
};

/*var count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1; ou
    count ++;
};
*/