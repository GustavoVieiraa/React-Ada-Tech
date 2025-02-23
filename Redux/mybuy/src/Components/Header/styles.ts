import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #212121;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 70px;
`;

export const HeaderTitle = styled.h1`
  color: #fefefe;
  font-size: 1.6rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

interface AuthButtonProps {
  isLogged: boolean;
}
export const AuthButton = styled.button<AuthButtonProps>`
  border: none;
  border-radius: 5px;
  height: 35px;
  padding: 0 1rem;
  background-color: ${(props) => (props.isLogged ? "red" : "cadetblue")};
  color: #fefefe;
  font-weight: 700;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    box-shadow: ${(props) =>
      props.isLogged
        ? "inset 0px 0px 0px 1px red;"
        : "inset 0px 0px 0px 1px cadetblue;"};
    background-color: white;
    color: ${(props) => (props.isLogged ? "red" : "cadetblue")};
  }
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 35px;
  padding: 0 1rem;
  background-color: violet;
  color: #fefefe;
  font-weight: 700;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    box-shadow: inset 0px 0px 0px 1px violet;
    background-color: white;
    color: violet;
  }
`;
