import Styled from "styled-components";
export const StyledHeader = Styled.div`
  h1 {
    text-align: center;
    font-weight: 400;
    font-size: 50px;
    @media screen and (max-width: 576px) {
      font-size: 34px;
    }
  }
`;
