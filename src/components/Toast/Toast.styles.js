import Styled from "styled-components";
export const StyledToast = Styled.div`
    position: absolute;
    top: 0;
    right: 50px;
    padding: 0px 50px;
    background-color: #000;
    color: #fff;
    transform: ${(props) =>
      props.isVisible ? "translateY(100%)" : "translateY(-100%)"};
    transition: 0.5s;
`;
