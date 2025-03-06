import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import * as S from "./styles";

export function Home() {
  return (
    <main>
      <S.Banner>
        <h1>Bem-vindo(a)!</h1>
      </S.Banner>
      <S.Container>
        <S.Content>
          <CategoriesCarousel />
          <div> Carrossel Produtos</div>
        </S.Content>
      </S.Container>
    </main>
  );
}
