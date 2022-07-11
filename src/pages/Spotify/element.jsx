import styled from "styled-components";

export const Contuiner = styled.div`
  color: #fff;
  background-color: #2f2c2c;
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  display: grid;
  max-width: 100%;
  grid-template-rows:   85vh 15vh ;
.div{
  display: grid;
  grid-template-columns:  15vw 84vw ;

}
  box-sizing: border-box;
  .navbar {
    position: sticky;
    top: 0px;
  }

  .body {
    background-color: #2f2c2c;
    overflow: auto;
  }
`;
