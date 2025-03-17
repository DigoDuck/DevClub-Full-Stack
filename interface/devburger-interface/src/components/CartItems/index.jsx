import { Table } from "../index";
import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import TrashIcon from "../../assets/trash.svg";
import * as S from "./styles";

export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();
  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Items</Table.Th>
          <Table.Th>Preco</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <S.ProductImage src={product.url} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>
                <S.ButtonGroup>
                  <button onClick={() => decreaseProduct(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseProduct(product.id)}>+</button>
                </S.ButtonGroup>
              </Table.Td>
              <Table.Td>
                <S.TotalPrice>
                  {formatPrice(product.quantity * product.price)}
                </S.TotalPrice>
              </Table.Td>
              <Table.Td>
                <S.TrashImage
                  src={TrashIcon}
                  alt="Liceira"
                  onClick={() => deleteProduct(product.id)}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <S.EmptyCart>Carrinho Vazio</S.EmptyCart>
        )}
      </Table.Body>
    </Table.Root>
  );
}
