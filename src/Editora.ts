import * as React from 'react';

class Editora {
	//codEditora,numérico, e nome, do tipo texto
	codEditora: number;
	nome: string;

	constructor(codEditora: number, nome: string){
		this.codEditora = codEditora;
		this.nome = nome;
	}
}

export { Editora };