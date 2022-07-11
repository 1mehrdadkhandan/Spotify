import styled from "styled-components";

export const Countiner = styled.div`
  display: flex;
  background-color: ${({ bgColor }) => (bgColor ? "#0000009f" : "transparent")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  height: 100px;
  margin: 20px 0;
  .search {
    display: flex;
    background-color: #fff;
    align-items: center;
    color: #000;
    height: 40px;
    width: 300px;
    font-size: 18px;
    border-radius: 50px;
    justify-content: center;
    .InputSearch {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 80%;

      input {
        font-size: 14px;
        width: 100%;
        outline: 0;
        border: 0;
        vertical-align: middle;
      }
    }
  }
  .username {
    background-color: black;
    padding: 8px 16px;
    height: 30px;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    width: 150px;
    align-items: center;
    span {
      font-weight: 200;
      font-size: 1rem;
    }
    svg {
      background-color: #383838;
      padding: 0.3rem;
      font-size: 20px;
      border-radius: 50%;
    }
  }
`;
