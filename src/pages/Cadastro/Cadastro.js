import React from 'react';
import './Cadastro.css';

function Cadastro() {
  return (
    <div>
      <div className="container-2">
        <h2>Cadastro</h2>
        <form className="form-2" action="">
          <p>
            <label className="edit-label">Nome Completo</label>
            <input
              className="edit-input"
              type="text"
              placeholder="Nome Completo"
            />
          </p>
          <p>
            <label className="edit-label">Sexo</label>
            <input className="edit-input" type="text" placeholder="Sexo" />
          </p>
          <p>
            <label className="edit-label">Data de Nascimento</label>
            <input
              className="edit-input"
              id="age"
              type="text"
              placeholder="Idade"
            />
          </p>
          <p>
            <label className="edit-label">Telefone</label>
            <input
              className="edit-input"
              type="text"
              placeholder="(xx) xxxxx-xxxx"
            />
          </p>
          <p>
            <label className="edit-label">E-mail</label>
            <input className="edit-input" type="text" placeholder="E-mail" />
          </p>
          <p>
            <label className="edit-label">Senha</label>
            <input className="edit-input" type="text" placeholder="Senha" />
          </p>
        </form>

        <button id="cadastrar">Cadastrar</button>
      </div>
    </div>
  );
}

export default Cadastro;
