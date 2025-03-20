import { navLinks } from "./navLinks";
import Logo from "../../assets/logo.svg";
import { SignOut } from "@phosphor-icons/react";
import * as S from "./styles";
import { useUser } from "../../hooks/UserContext";
import { useResolvedPath } from "react-router-dom";

export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();

  return (
    <S.Container>
      <img src={Logo} alt="Logo-Hamburguer" />
      <S.NavLinkContainer>
        {navLinks.map((link) => {
          const resolvedPath = useResolvedPath(link.path);

          return (
            <S.NavLink
              key={link.id}
              to={link.path}
              $isActive={resolvedPath.pathname === pathname}
            >
              {link.icon}
              <span>{link.label}</span>
            </S.NavLink>
          );
        })}
      </S.NavLinkContainer>
      <S.Footer>
        <S.NavLink to="/login" onClick={logout}>
          <SignOut />
          <span>Sair</span>
        </S.NavLink>
      </S.Footer>
    </S.Container>
  );
}
