//Funcões em Js é First-Class Object (Citizens)
//Higher-order Function 

//toda funçao no javascript retorna alguma coisa, e se não tiver dados a função vai retornar "Underfund"
//uma função de uma unica sentença não pode omitir o bloco

//Criar de forma literal
function fun1(){

}

// a função tbm pode ser armazena em uma variavel
const fun2 = function () { }

// Armezenar em um array

const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armezenar em um attributo de objeto
const obj = { }
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// passar função como parametro para outra função
function run(fun) {
    fun()
}

run(function () { console.log('Execultando...') })

//uma função para retornar/conter uma função
