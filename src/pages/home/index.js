import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styled";

function App(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then((response) => {

      const listaRegioes = response.data.reduce((listaTratada, estado) => {

        let regiao = listaTratada.find(regiao => regiao.sigla === estado.regiao.sigla);

        if (regiao) {

          regiao.estados.push({
            id: estado.id,
            nome: estado.nome,
            sigla: estado.sigla
          });
          regiao.estados.sort((item1, item2) => item1.nome < item2.nome ? -1 : 1);

        } else {

          listaTratada.push({
            sigla: estado.regiao.sigla,
            nome: estado.regiao.nome,
            estados: [{
              id: estado.id,
              nome: estado.nome,
              sigla: estado.sigla
            }]
          });

        }
        return listaTratada;
      }, []);

      setData(listaRegioes);

    }).catch(() => {
      setData([{ nome: "Erro ao consultar API", estados: [] }]);
    });
  }, []);



  return (
    <S.Content>
      <S.Header>
        <S.HWrapper>
          <div className="logotuna"></div>
          <S.A>Nossa Solução</S.A>
          <S.A>Nossa Documentação</S.A>
          <S.Button>Entrar</S.Button>
          <S.Button>Crie sua conta</S.Button>
        </S.HWrapper>
      </S.Header>
      <S.Main>
        <S.Texto>
          <S.Titulo>Atuação Em Todo Território</S.Titulo>
          <S.Paragrafo>
            Trabalhamos em diversas áreas do país, sempre atendendo ao cliente
            da melhor forma, conheça algumas regiões de atuação a seguir..
          </S.Paragrafo>
        </S.Texto>
        <div className="nocode"></div>
      </S.Main>
      <S.BoxCards>
        {data.map(regiao => {
          return (
            <S.Card>
              <h1>{regiao.nome} - {regiao.sigla}</h1>
              <div className="cards">
                {regiao.estados.map(estado => {
                  return (
                    <S.Li>
                      📍 {estado.nome} - {estado.sigla}
                    </S.Li>
                  );
                })}
              </div>
            </S.Card>
          );
        })}
      </S.BoxCards>
    </S.Content>
  );
}

export default App;
