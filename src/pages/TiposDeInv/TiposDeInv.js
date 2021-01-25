import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck } from 'react-bootstrap';
import './TiposDeInv.css';

function TiposDeInv() {
  return (
    <div>
      <h3>Tipos de Investidores</h3>
      <CardDeck>
        <Card border="primary" style={{ width: '20rem' }}>
          <Card.Header>Conservador</Card.Header>
          <Card.Body>
            <Card.Title>Características</Card.Title>
            <Card.Text>
              <p>• Característica principal: preservar o seu patrimônio;</p>
              <p>• Prioriza a segurança dos seus investimentos;</p>
              <p>
                • Não gosta de assumir riscos que possam comprometer seu
                patrimônio;
              </p>
              <p>
                • Prefere menor rentabilidade se isso significar maior
                segurança; • Não tolera muito perdas e falta de liquidez;
              </p>
              <p>
                • Geralmente se aplica a investidores iniciantes, que possuem
                aversão ao risco ou que têm objetivos de curto e médio prazo.
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Title>Exemplos de investimentos conservadores: </Card.Title>
            <Card.Text>
              <p>• Tesouro Direto</p>
              <p>• CDB</p>
              <p>• LC</p>
              <p>• LCI/LCA</p>
              <p>• Fundos de renda fixa</p>
            </Card.Text>
          </Card.Footer>
        </Card>
        <Card border="warning" style={{ width: '20rem' }}>
          <Card.Header>Moderado</Card.Header>
          <Card.Body>
            <Card.Title>Características</Card.Title>
            <Card.Text>
              <p>• Característica principal: versatilidade;</p>
              <p>• Gosta de segurança, mas assume riscos um pouco maiores;</p>
              <p>• Busca uma rentabilidade superior à média do mercado;</p>
              <p>
                • Tolera certo risco, como menor liquidez e perdas controladas,
                porém não renuncia à preservação do seu patrimônio;
              </p>
              <p>
                • Geralmente se aplica a investidores com mais conhecimento do
                mercado e um patrimônio em crescimento, grande o suficiente para
                diversificar em diferentes prazos
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Title>Exemplos de investimentos moderados: </Card.Title>
            <Card.Text>
              <p>• Investimentos conservadores</p>
              <p>• Fundos multimercados</p>
              <p>• Debêntures</p>
              <p>• Fundos de ações</p>
              <p>• Fundos imobiliários</p>
            </Card.Text>
          </Card.Footer>
        </Card>
        <Card border="danger" style={{ width: '20rem' }}>
          <Card.Header>Agressivo</Card.Header>
          <Card.Body>
            <Card.Title>Características</Card.Title>
            <Card.Text>
              <p>
                • Assume riscos mais altos, em busca da maior rentabilidade
                possível;
              </p>
              <p>
                • Entende que a oscilação diária dos mercados é momentânea e
                necessária para aproveitar lucros mais altos a longo prazo;
              </p>
              <p>• Tem bom conhecimento do mercado;</p>
              <p>• Deseja multiplicar o patrimônio a longo prazo;</p>
              <p>
                • Tem um percentual maior da carteira em renda variável do que
                os moderados;
              </p>
              <p>• Prioriza a rentabilidade do investimento.</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Title>Exemplos de investimentos agressivos: </Card.Title>
            <Card.Text>
              <p>• Investimentos conservadores e moderados</p>
              <p>• Ações</p>
              <p>• Compra e venda do câmbio</p>
            </Card.Text>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default TiposDeInv;
