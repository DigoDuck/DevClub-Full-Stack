import * as S from "./styles";
import Logo from "../../assets/logo.svg";

export function Login() {
  return (
    <S.Container>
      <S.LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </S.LeftContainer>
      <S.RightContainer>
        <S.Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span> Acesse com seu <span>Login e senha.</span>
        </S.Title>
        <S.Form>
          <S.InputContainer>
            <label>Email</label>
            <input type="email" />
          </S.InputContainer>

          <S.InputContainer>
            <label>Senha</label>
            <input type="password" />
          </S.InputContainer>
          <S.Link>Esqueci minha senha.</S.Link>
          <S.Button>Entrar</S.Button>
          <S.Link>Não possui conta? Clique aqui.</S.Link>
        </S.Form>
      </S.RightContainer>
    </S.Container>
  );
}
