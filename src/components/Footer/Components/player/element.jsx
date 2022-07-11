import styled from "styled-components";

export const Countiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  svg {
    color: #b3b3b3;
    transition: 0.2s ease-in-out;
    &:hover {
      color: #fff;
    }
  }
  .prev,
  .next,
  .state {
    font-size: 2rem;
  }
`;
