console.log('==================================')
//criando e usando funções 
let corSite = 'azul';
function resetCor(){
    corSite = '';
};

console.log('cor atual = ', corSite);//sem ter chamado a função
resetCor();//chamando a função
console.log('cor atual = ',corSite);

//função com passagem de parametro(um ou mais)
let animal = 'mamifero';
let especie = 'canguru';

function restTipo(tipo, especie){
    animal = tipo + ' ' + especie;
};
console.log(animal, especie);
restTipo('reptil', 'lagarto');
console.log(animal);

//tipos de funções 
//tipo que executa uma tarefa e nao tem retorno
function dizerNome(){
    console.log('meu nome!!!')
};
dizerNome();

//tipo que executa uma tarefa e tem retorno
function multiplicarPorDois(num){
    return num*2;//o valor gerado nessa soma pode ser usado em outra parte do programa
};

console.log(multiplicarPorDois(2))

