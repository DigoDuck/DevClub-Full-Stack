import { useEffect, useState } from "react";
import * as S from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import { useLocation, useNavigate } from "react-router-dom";

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get("categoria");

    if (categoryId) {
      return categoryId;
    }
    return 0;
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");

      const newCategories = [{ id: 0, name: "Todas" }, ...data];
      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get("/products");

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === Number(activeCategory)
      );
      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory]);

  return (
    <S.Container>

      <S.Banner>
        <h1>
          O MELHOR
          <br /> HAMBURGUER
          <br /> ESTÁ AQUI
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </S.Banner>

      <S.CategoryMenu>
        {categories.map((category) => (
          <S.CategoryButton
            key={category.id}
            $isActive={category.id === activeCategory}
            onClick={() => {
              setActiveCategory(category.id);
              navigate(
                {
                  pathname: "/cardapio",
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                }
              );
            }}
          >
            {category.name}
          </S.CategoryButton>
        ))}
      </S.CategoryMenu>

      <S.ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </S.ProductsContainer>
    </S.Container>
  );
}
