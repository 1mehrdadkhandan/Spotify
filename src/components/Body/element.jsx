import styled from "styled-components";

export const Countiner = styled.div`
  .playList {
    margin: 0 20px;
    display: flex;
    align-items: center;
    gap: 2rem;
    .image {
      img {
        height: 15rem;
        box-shadow: rgba(0, 0, 0, 0, 0.25) 0px 25px 50px -12px;
      }
    }
    .details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #e0dede;
      .title {
        color: #fff;
        font-size: 4rem;
      }
    }
  }
  .list {
    .headerRow {
      color: #dddcdc;
      margin: 1rem 0 0 0;
      position: sticky;
      top: 100px;
      padding: 1rem 3rem;
      display: grid;
      background-color: ${({ bgColor }) =>
        bgColor ? "#00000078" : "transparent"};
      grid-template-columns: 0.3fr 3fr 2.05fr 0.1fr;
    }
    .tracks {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
      .row {
        padding: 0.5rem 1rem;
        display: flex;
        grid-template-columns: 0.3fr 3fr 1.9fr 0.1fr;
        display: grid;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 7);
        }
        .detail {
          display: flex;
          gap: 30px;
          .info {
            display: flex;
            gap: 8px;
            flex-direction: column;
          }
        }
        .col {
          display: flex;
          align-items: center;
          color: #dddcdc;

          img {
            height: 40px;
          }
        }
      }
    }
  }
`;
