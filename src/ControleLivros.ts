import { Livro } from './Livro';

var livros:Array<Livro>= [
	{codigo: 101, codEditora: 3, titulo: 'Harry Potter e a Pedra Filosofal', resumo: 'Garoto descobre que é bruxo e toda sua história de sua origem', autores:['J.K. Rowling']},
	{codigo: 102, codEditora: 2, titulo: 'Os suicídas', resumo: 'A história do amor de um homem e uma mulher enquanto se retrata a questão do suicício', autores:['Antonio Di Benedetto']},
	{codigo: 103, codEditora: 1, titulo: 'O evangelho segundo Jesus Cristo', resumo:'José Saramago reescreve o novo testamento na visão de Jesus Cristo', autores:['José Saramago']}
];

class ControleLivros {
	obterLivros():Array<Livro>{
		return livros;
	}

	incluir(livro:Livro):void{
		let maiorCodigo = livros.reduce((codMaior, livro) => {
			return livro.codigo > codMaior ? livro.codigo : codMaior;
		}, 0);

		livro.codigo = maiorCodigo + 1;

		livros.push(livro);
	}

	excluir(codigo:number):void{
		let indice = livros.findIndex(livro => livro.codigo === codigo);

		if(indice >= 0){
			livros.splice(indice,1);
		}
	}
}

export { ControleLivros };