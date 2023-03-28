//substituir texto
let texto="Aula de javascript"
console.log(texto.replace("Aula", "Prática"))

//fixar o valor
let num=123.4555555
console.log(num.toFixed(2))

//caixa alert
//alert("Hello World")

//caixa de confirmação
let teste= confirm("Você é um aluno?")
console.log(teste)

//caixa de prompt
let texto1= prompt("Digite seu nome")
console.log(texto1)

//aparece o nome digitado na tela
document.write("O seu nome é: " , texto1)

//Se na cofirmação colocar OK dará true e puxará um alerta de texto, Se na confirmação colocar CANCEL dará false e puxará um alerta de texto
if(teste == true){
    alert("Olá aluno")
}else{
    alert("Você não é aluno!")
}

//if, else if, else

let idade = prompt("Digite sua idade")

if(idade <= 12){
    document.write("<br></br>")
    document.write("É uma criança")
}else if(idade <= 17){
    document.write("<br></br>")
    document.write("É um adolecente")
}else if(idade <= 30){
    document.write("<br></br>")
    document.write("É um adulto")
}else{
    document.write("<br></br>")
    document.write("É um idoso")
}