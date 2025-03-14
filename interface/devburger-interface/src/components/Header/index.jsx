import * as S from "./styles";

import { useUser } from "../../hooks/UserContext";
import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { pathname } = useResolvedPath();

  function logoutUser() {
    logout();
    navigate("/login");
  }
  return (
    <S.Container>
      <S.Content>
        <S.Navigation>
          <div>
            <S.HeaderLink to="/" $isActive={pathname === "/"}>
              Home
            </S.HeaderLink>
            <hr></hr>
            <S.HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>
              Cardápio
            </S.HeaderLink>
          </div>
        </S.Navigation>

        <S.Options>
          <S.Profile>
            <UserCircle color="orange" size={24} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <S.Logout onClick={logoutUser}>Sair</S.Logout>
            </div>
          </S.Profile>

          <S.LinkContainer>
            <ShoppingCart color="orange" size={24} />
            <S.HeaderLink to="/carrinho">Carrinho</S.HeaderLink>
          </S.LinkContainer>
        </S.Options>
      </S.Content>
    </S.Container>
  );
}
