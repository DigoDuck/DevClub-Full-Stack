import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import * as S from "./styles";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";

export function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Email inválido")
        .required("O e-mail é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter no mínimo 6 caracteres")
        .required("Digite uma senha"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <S.Container>
      <S.LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </S.LeftContainer>
      <S.RightContainer>
        <S.Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br /> Acesse com seu <span> Login e senha.</span>
        </S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            {errors.email && <p>{errors?.email?.message}</p>} {/* Exibir a mensagem de erro */}
          </S.InputContainer>

          <S.InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            {errors.password && <p>{errors?.password?.message}</p>} {/* Exibir a mensagem de erro */}
          </S.InputContainer>
          <Button type="submit">Entrar</Button>
          <p>
            Não possui conta? <a>Clique aqui.</a>
          </p>
        </S.Form>
      </S.RightContainer>
    </S.Container>
  );
}
