import styled from "styled-components";

export const Countiner = styled.div`
  background-color: #181818;
  height: 100%;
  width: 100%;
  border-top: 1px solid #282828;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  padding: 0 1rem;
  font-size: 20px;
  .track{
    display: flex;
    align-items: center;
    gap: 1rem;
    .track_info{

        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        h4 {
        color: #fff;
      }
      h6 {
        color: #b3b3b3 ;
      } 
    }

  }
`;
