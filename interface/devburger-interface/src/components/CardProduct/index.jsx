import PropTypes from "prop-types";
import * as S from "./styles";
import { CartButton } from "../CartButton";
import { useCart } from "../../hooks/CartContext";

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();
  return (
    <S.Container>
      <S.CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>
      <CartButton onClick={() => putProductInCart(product)}></CartButton>
    </S.Container>
  );
}
CardProduct.propTypes = {
  product: PropTypes.object,
};
