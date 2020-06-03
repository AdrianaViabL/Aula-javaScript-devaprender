console.log('=====exercicios====')
//mudando de lado os valores das variaveis
let a = 'vermelho';
let b = 'azul';
console.log(a);
console.log(b);
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

// vendo qual o maior valor
console.log('vendo o maior numero');
let n1 = 3;
let n2 = 89;
if (n1 > n2){
    console.log('o maior numero é ', n1);
} else{
    console.log('o maior numero é ', n2);
}
function max(num1, num2){
    if (num1 > num2){
        return num1;
    } else return num2;
}
let valmaior = max(5, 90);
console.log(valmaior);