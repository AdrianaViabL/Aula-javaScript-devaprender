    // tipos de atribuição a variaveis(tem a ver com o que pode ser feito com a variavel e nao com o valor dentro dela)

    // const - tipo de variavel que nao tera o seu valor alterado depois da criação
    // let - variavel que pode ter seu valor alterado apos a primeira atribuição, e seu valor sera ressetado ao inicial
    //  apos sair de uma função(ex. depois de ser alterado dentro de um if, fora dele votara ao valor declarado)
    // var - variaveis globais, onde se o seu valor for alterado dentro de algum escopo(como dentro de um for) esse valor sera
    // mantido

    // exemplos
    console.log('================================')
    let nome = 'Adriana'; //string literal
    let idade = 25;     //numeric literal
    let estaAprovado = true; //boolean
    let sobrenome = undefined; // undefined(sem tipo definido)
    let corSelecionada = null; //redefinir um valor(uma forma de resetar o valor de uma variavel)

    //exemplo de objeto
    let pessoa = {
        nome: 'manuel',
        idade: 21,
        sobrenome: 'de souza'
    };
    console.log(pessoa)
    //uma lista

    let lista = [12, 'abobrinha', 100, 10.12]
    console.log(lista[0])