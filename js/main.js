function botao() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar");
}

function redec() {
    window.open("http://google.com.br");
   // window.location.href = "http://google.com.br";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar Texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML ="Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}


var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

/*



alert(setReplace("Vai Japão", "Japão", "Brasil"));

alert(soma(5, 10));
var d = new Date();
alert(d.getDay()+1);
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth()+1);

/*
var count;
for(count=0; count <= 5; count++){
    console.log(count);
}

/*
var count = 0;
while (count <=5){
    console.log(count);
    count++;
}

/*
var idade = prompt("Qual sua idade?");
if (idade=>18){
    alert("maior de "+ idade + " anos!");
}else{
    alert("menor de idade");
};





var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(fruta[1].nome);
alert(fruta[1].cor);



var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));



//var nome = "Luan";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo " + nome + " você tem " + idade + " anos.");
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toUpperCase());
//console.log(frase.replace("Japão", "Brasil"));
