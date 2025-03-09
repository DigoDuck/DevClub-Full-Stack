import Cart from "../../assets/cart.svg"
import * as S from "./styles"

export function CartButton({ ...props }) {
  return (
    <S.ContainerButton {...props}>
      <img src={Cart} alt="carrinho-de-compras" />
    </S.ContainerButton>
  );
}
