console.log('=============================================');
//vendo o if-else e swith-case
//mostrando uma frase para determinadas horas do dia
let hora = 13;
if (hora >= 6 && hora <= 12){
    console.log('Bom dia');
}
else if (hora > 12 && hora <= 18){
    console.log('Boa tarde');
}
else {
    console.log('Boa noite');
};

//avaliando a permissao do usuario
let permite = 'comum';// comum, gerente, diretor
 switch(permite){

    case 'comum':
        console.log('Usuário comum');
        break;
    case 'gerente':
        console.log('Ususario gerente');
        break;
    case 'diretor':
        console.log('Usuáio diretor');
        break;
    default:
        console.log('Usuario nao permitido');
 }