import React, { useState, useEffect } from 'react';
import { ControleLivros } from './ControleLivros';
import { ControleEditoras } from './ControleEditoras';

function LinhaLivro(props) {
  const [editora, setEditora] = useState("");
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    setEditora(new ControleEditoras().getNomeEditoras(props.codEditora));
  }, [props.codEditora]);

  useEffect(() => {
    setLivros(new ControleLivros().obterLivros());
  }, []);

  const handleDelete = () => {
    const index = livros.findIndex((livro) => livro.codigo === props.codigo);
    if (index !== -1) {
      livros = livros.splice(index, 1);
    }
  };

  return (
    <tr>
      <td>
        {props.codigo} <br />
        <button onClick={handleDelete}>Delete</button>
      </td>
      <td>{editora}</td>
      <td>{props.titulo}</td>
      <td>{props.resumo}</td>
      <td>{props.autores.join(", ")}</td>
    </tr>
  );
}

function LivroLista() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    setLivros(new ControleLivros().obterLivros());
  }, []);

  const linhas = livros.map((livro) => (
    <LinhaLivro
      key={livro.codigo}
      codigo={livro.codigo}
      codEditora={livro.codEditora}
      titulo={livro.titulo}
      resumo={livro.resumo}
      autores={livro.autores}
    />
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Editora</th>
          <th>Título</th>
          <th>Resumo</th>
          <th>Autores</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{linhas}</tbody>
    </table>
  );
}

export default LivroLista;
