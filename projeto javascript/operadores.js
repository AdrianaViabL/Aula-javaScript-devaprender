console.log('=================================')
//tipos de operadores

// operadores aritmeticos 
let salario = 100;
console.log("somando valores = ", salario + salario);
console.log('subtraindo = ', salario - 50);
console.log('dividindo valores = ', salario / 3);
console.log('multiplicando = ',salario * 3);
console.log('exponecial = ', 3 ** 4);
idade = 18;
console.log(idade++);//dessa forma ele ira mostrar o valor atual e depois somar 1 na variavel
console.log(--idade);//subtrai e depois mostra o resultado
//operadores de atribuição
valor = 100;//atribuindo valor
valor =+ 100;//somando com o valor que esta na variavel
//mesma coisa para subtracao

//operadores de comparação 
console.log(1 === 1);//esta comparando o tipo de variavel
console.log('1' === 1);
console.log(1 == 1);//compara apenas os valores escritos

//operadores ternarios(uma outra forma de IF)
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'normal';
console.log('cliente ', tipo);

//operadores logicos
//E '&&' - as duas condições tem que estar verdadeiras
console.log(5 < 9 && 10 > 5 ? 'ta ok ' : 'nao ta ok');//avalia se as condições sao verdadeiras ou falsas(as escritas OK foram um teste)
//OU '||' - uma das condições ter que ser verdadeiras
console.log('banana' === 'banana'  || 3 < 5);
//NOT '!' - avaliação em cima de uma negação 
let avaliacao = !true;//ele inverte o valor
console.log(avaliacao);
console.log('=====================================');

//operadores logicos nao booleanos
// quando voce tem a comparação de dados que nao sao lógicos
// como nos casos a baixo
console.log(false || 'nome');//ele ira mostrar o que esta dentro do parenteses pois é um valor valido
//valores que sao falsy(falsos dentro de comparações nao booleanas)
// undefined
// null
// 0
// false
// '' 
// NaN - not a number(resultados nao numericos de calculos)

//truthy(verdadeiros dentro do nao booleano)
// valores que nao se encaixam nos a cima - que sao mostrados no resultado final
let corPersonalizada = 'Vermelho';
let corPadrao = 'azul';
let corUsuario = corPersonalizada || corPadrao;//a primeira condição a dar verdadeiro é a que sera movida para a variavel
console.log(corUsuario);

//operadores bitwise

