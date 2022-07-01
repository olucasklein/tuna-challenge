import styled from "styled-components";

export const Content = styled.div`
  padding-bottom: 50px;
  padding-top: 50px;
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  background: #fff;
  color: #fff;
  padding: 20px;
  margin: 0 auto;
  justify-content: center;
`;

export const HWrapper = styled.div`
  margin: 0 10% 0 10%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const A = styled.a`
  color: #000;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #31b34e;
    transition: 0.3s;
  }
`;

export const Button = styled.button`
  border: none;
  color: #fff;
  padding: 15px;
  background-color: #31b34e;
  text-align: center;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  &:hover {
    background-color: #333;
    transition: 0.3s;
  }
`;

export const Main = styled.section`
  width: 100%;
  padding: 1%;
  display: flex;
  height: 30%;
  background-color: #f9f9f9;
  justify-content: space-around;
  align-items: center;
`;

export const Texto = styled.div``;

export const Titulo = styled.h1`
  font-size: 3rem;
  margin: 0 0px 0px; 0px;
  color: #000;
`;

export const Paragrafo = styled.p`
font-size: 1.2rem;
  margin: 30px 0px 0px; 0px;
  color: #000;
`;

export const Cards = styled.div`
  display: inline-grid;
  place-items: center;
  margin: 20px;
  border: 15px solid #f9f9f9;
  border-radius: 25px;
  align-items: center;
`;

export const CardC = styled.div`
  margin: 10px 30px 30px 10px;
`;
