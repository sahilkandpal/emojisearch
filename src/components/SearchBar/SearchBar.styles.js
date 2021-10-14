import styled from "styled-components";
export const StyledSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & {
    .search {
      display: flex;
      border: 1px solid lightgrey;
      border-radius: 50px;
      width: 500px;
      justify-content: center;
      align-items: center;
      padding: 5px 10px;
      background-color: #fff;
      @media screen and (max-width: 576px) {
        width: 80%;
      }
      &-input {
        height: 42px;
        outline: none;
        border: none;
        padding: 0px 10px;
        flex: 1;
        border-radius: 50px;
        font-size: 20px;
        @media screen and (max-width: 576px) {
          width: 90%;
        }
      }
      .cross-icon {
        font-size: 25px;
        border-radius: 50px;
        cursor: pointer;
      }
    }
  }
`;
