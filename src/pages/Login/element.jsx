import styled from "styled-components";
export const Countiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1ed760;
  width: 100vw;
  height: 100vh;
  gap: 30px;
`;
export const LogoSpotify = styled.div`
  width: 40vw;

  img {
    width: 100%;
  }
`;

export const LinkSpot = styled.button`
  text-decoration: none;
  outline: 0;
  border: 0;
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 16px 24px;
  border-radius: 50px;
  width: 300px;
  font-size: 24px;
  cursor: pointer;
`;
