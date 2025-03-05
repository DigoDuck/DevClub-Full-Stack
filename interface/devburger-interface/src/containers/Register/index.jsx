import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

import * as S from "./styles";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required("O nome é obrigatório"),
      email: yup
        .string()
        .email("Email inválido")
        .required("O e-mail é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter no mínimo 6 caracteres")
        .required("Digite uma senha"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas devem ser iguais")
        .required("Confirme a sua senha"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        }
      );
      if (status === 200 || status === 201) {
        toast.success("Conta criada com sucesso");
      } else if (status === 409) {
        toast.error("Email já cadastrado! Faça login para continuar");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("😬 Falha no Sistema! Tente novamente mais tarde");
    }
  };

  return (
    <S.Container>
      <S.LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </S.LeftContainer>
      <S.RightContainer>
        <S.Title>Criar Conta</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <label>Nome</label>
            <input type="text" {...register("name")} />
            {errors.name && <p>{errors?.name?.message}</p>}{" "}
            {/* Exibir a mensagem de erro */}
          </S.InputContainer>

          <S.InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            {errors.email && <p>{errors?.email?.message}</p>}{" "}
            {/* Exibir a mensagem de erro */}
          </S.InputContainer>

          <S.InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            {errors.password && <p>{errors?.password?.message}</p>}{" "}
            {/* Exibir a mensagem de erro */}
          </S.InputContainer>

          <S.InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && (
              <p>{errors?.confirmPassword?.message}</p>
            )}{" "}
            {/* Exibir a mensagem de erro */}
          </S.InputContainer>

          <Button type="submit">Criar Conta</Button>
          <p>
            Já possui conta? <a>Clique aqui.</a>
          </p>
        </S.Form>
      </S.RightContainer>
    </S.Container>
  );
}
