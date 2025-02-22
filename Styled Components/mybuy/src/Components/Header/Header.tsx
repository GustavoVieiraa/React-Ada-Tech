import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

import * as S from "./styles";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
// Padronização de Import utilizando o 'as S' para diferenciar Componentes Funcionais
// de Componentes de Estilização

export const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const isLogged = true;

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyBuy.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <IoLogOut /> : <IoLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FaCartShopping />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
