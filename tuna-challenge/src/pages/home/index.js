import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
import logotuna from "../../components/logotuna.svg";
import nocode from "../../components/nocode.svg";

function App(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        setData(response.data);
      })

      .catch(() => {
        console.log("Error!");
      });
  }, []);

  const arrayNorte = data.filter((item) => item.regiao.sigla === "N");
  console.log(arrayNorte);

  const arraySul = data.filter((item) => item.regiao.sigla === "S");
  console.log(arraySul);

  const arrayNordeste = data.filter((item) => item.regiao.sigla === "NE");
  console.log(arrayNordeste);

  const arraySudeste = data.filter((item) => item.regiao.sigla === "SE");
  console.log(arraySudeste);

  const arrayCentroO = data.filter((item) => item.regiao.sigla === "CO");
  console.log(arrayCentroO);

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
        <S.Card1>
          <h1>Norte</h1>
          <div className="cards">
            {arrayNorte.map((data, key) => {
              return (
                <S.Li>
                  📍 {data.nome} - {data.sigla}
                </S.Li>
              );
            })}
          </div>
        </S.Card1>
        <S.Card2>
          <h1>Sul</h1>
          <div className="cards">
            {arraySul.map((data, key) => {
              return (
                <S.Li>
                  📍 {data.nome} - {data.sigla}
                </S.Li>
              );
            })}
          </div>
        </S.Card2>
        <S.Card3>
          <h1>Sudeste</h1>
          <div className="cards">
            {arraySudeste.map((data, key) => {
              return (
                <S.Li>
                  📍 {data.nome} - {data.sigla}
                </S.Li>
              );
            })}
          </div>
        </S.Card3>
        <S.Card4>
          <h1>Centro-Oeste</h1>
          <div className="cards">
            {arrayCentroO.map((data, key) => {
              return (
                <S.Li>
                  📍 {data.nome} - {data.sigla}{" "}
                </S.Li>
              );
            })}
          </div>
        </S.Card4>
        <S.Card5>
          <h1>Nordeste</h1>
          <div className="cards">
            {arrayNordeste.map((data, key) => {
              return (
                <S.Li>
                  📍 {data.nome} - {data.sigla}{" "}
                </S.Li>
              );
            })}
          </div>
        </S.Card5>
      </S.BoxCards>
    </S.Content>
  );
}

export default App;
