import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
import logotuna from "../../components/logotuna.svg";
import nocode from "../../components/nocode.svg";

function App(props) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        setPost(response.data);
      })

      .catch(() => {
        console.log("Error!");
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
      <div className="cards">
        {post.map((post, key) => {
          return (
            <S.Cards>
              <S.CardC>
                <S.Paragrafo>
                  📍 {post.nome} - {post.sigla}
                </S.Paragrafo>
              </S.CardC>
            </S.Cards>
          );
        })}
      </div>
    </S.Content>
  );
}

export default App;
