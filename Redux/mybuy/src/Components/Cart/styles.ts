import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-350px")};

  width: 380px;
  height: 100vh;
  background-color: white;

  padding: 2rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);

  transition: all 0.5s;
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartProductItem = styled.li`
  button {
    background-color: transparent;
    border: none;

    padding-left: 0.3rem;

    color: red;

    cursor: pointer;
  }
`;

export const FooterTotal = styled.div`
  background-color: cadetblue;
  color: #fefefe;

  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2rem;
`;

export const CartTotal = styled.strong``;
