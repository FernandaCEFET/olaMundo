const produtos = [
    {nome: 'Carne', preco:40.0},
    {nome: 'Pao de alho', preco: 10.0},
    {nome: 'Corotinho', preco:2.5}
];

let exibirProduto = (p,i) => {
    console.log(i + '. ' + p.nome+ ' R$ ' + p.preco.toFixed(2));
};

console.log('TODOS OS CARAI: ');
produtos.forEach(exibirProduto);

console.log('\nPRODUTOS DE MENOS DE R$3,00:');
produtos.filter(p=> p.preco <= 3).forEach(exibirProduto);

console.log('\nAUMENTO DE 20% EM :');
produtos.map(p => {
    return {
        nome: p.nome,
        preco: p.preco *=1.2
    }
}).forEach(exibirProduto);