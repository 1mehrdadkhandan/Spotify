import styled from "styled-components";

export const Countiner = styled.div`
  background: #000;
  height: 100%;
  overflow: hidden;
  .logo {
    width: 90%;
    margin: 20px auto;
    /* LOGo */
    img {
      width: 100%;
    }
  }
  /* List item */
  .list-item {
    ul {
      list-style: none;

      li {
        display: flex;
        align-items: center;
        font-size: 20px;
        margin-top: 16px;
        cursor: pointer;
        transition: 0.3s all;
        color: #dcdcdc;
        &:hover {
          color: #fff;
        }
        span {
          margin-left: 8px;
        }
      }
    }
  }

  .playList {
    padding-left: 8px;
    font-size: 18px;
    color: #e4dddd;
    height: 55vh;
    overflow-y: auto;

    ul {
      list-style: none;
      overflow-y: auto;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      li {
        margin-top: 10px;
        cursor: pointer;
        color: #e4dddd;

        &:hover {
          color: #ffffff;
        }
      }
    }
  }
`;
