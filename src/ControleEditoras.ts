import * as React from 'react';
import { Editora } from './Editora';

var editoras: Array<Editora> = [
	{codEditora: 1, nome: 'Companhia das Letras'},
	{codEditora: 2, nome: 'Globo'},
	{codEditora: 3, nome: 'Rocco'},
];

class ControleEditoras {
	getEditoras():Array<Editora>{
		return editoras;
	}

	getNomeEditoras(codEditora:number):string{
		let encontreEditora:Array<Editora> = editoras.filter(editora => editora.codEditora === codEditora);

		if(encontreEditora.length > 0){
			return encontreEditora[0].nome;
		} else {
			return '';
		}
	}
}

export { ControleEditoras };



