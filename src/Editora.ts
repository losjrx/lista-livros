import * as React from 'react';

export class Editora {
	//codEditora,numérico, e nome, do tipo texto
	codEditora: number;
	nome: string;

	constructor(codEditora: number, nome: string){
		this.codEditora = codEditora;
		this.nome = nome;
	}
}