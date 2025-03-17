import * as S from "./styles";

import Logo from "../../assets/logo.svg";
import { CartItems, CartResume } from "../../components";

export function Cart() {
  return (
    <S.Container>
      <S.Banner>
        <img src={Logo} alt="logo devburger" />
      </S.Banner>
      <S.Title>Checkout - Pedido</S.Title>
      <S.Content>
        <CartItems />
        <CartResume />
      </S.Content>
    </S.Container>
  );
}
