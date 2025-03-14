import PropTypes from "prop-types";
import * as S from "./styles";
import { CartButton } from "../CartButton";

export function CardProduct({ product }) {
  return (
    <S.Container>
      <S.CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>
      <CartButton></CartButton>
    </S.Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
