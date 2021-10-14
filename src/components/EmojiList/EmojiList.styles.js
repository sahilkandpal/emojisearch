import Styled from "styled-components";
export const StyledEmojiList = Styled.div`
display: flex;
flex-wrap: wrap;
padding: 20px;
justify-content: center;
@media screen and (max-width: 576px) {
    padding: 0;
    margin-top: 20px;
  }
    .emoji{
        padding: 10px;
        font-size: 30px;
        cursor: pointer;
        width: 40px;
        text-align: center;
        &:hover{
            background-color: #f6f6f6;
        }
        @media screen and (max-width: 576px) {
            width: auto;
          }
    }
    .loading, .notfound {
        text-align: center;
    }   
    .loading{
        font-size: 50px;
        animation: rotate 1s infinite;
    }
    @keyframes rotate {
        0% {transform: rotate(0);}
        50% {transform: rotate(180deg);}
        100% {transform: rotate(0)}
      }
    .notfound{
        &-emoji{
            font-size: 50px;
        }
        &-text{
            font-size: 28px;
            font-weight: 500;
            @media screen and (max-width: 576px) {
                font-size: 24px;
                padding: 10px 0;
              }
        }
    }
`;
