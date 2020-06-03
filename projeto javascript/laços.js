console.log('==========================================');
//laços de repetição, tipos existentes:
// 1.for
// 2.while
// 3.do...while
// 4.for...in
// 5.for...of

for(let i = 1;i <= 5;i++){
    console.log('estou aprendendo', i);
    if (i % 2 == 0){
        console.log('o numero', i, 'é par');
    }
}

// 2
let i = 5;

while(i >= 1){
    if (i % 2 !== 0){
        console.log('o numero', i, 'é impar');
    }
    i--;
}
// 3
i = 1;
do {
    console.log('digitando');
    i++;
} while(i <= 10 )
// 4 for..in - usado mais com objetos
const pessoas = {
    nome: 'meu',
    idade: 25
};
for(let chave in pessoas){
    console.log(chave, pessoas[chave]);//mostrando tanto a chave quanto o conteudo
}
// 5 for..of

const cores = ['vermelho', 'azul', 'amarelo', 'verde'];
for(let cor of cores){//o 'of' ja exibe de forma direta o que esta dentro do indice
    console.log(cor)
}