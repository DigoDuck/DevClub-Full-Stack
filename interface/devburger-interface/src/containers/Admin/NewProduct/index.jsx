import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Image } from "@phosphor-icons/react/dist/ssr";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

const schema = yup.object({
  name: yup.string().required("Digite o nome do produto"),
  price: yup
    .number()
    .positive()
    .required()
    .typeError("Digite o preço do produto"),
  category: yup.object().required("Escolha uma categoria do produto"),
  file: yup
    .mixed()
    .test("required", "Escolha um arquivo para continuar", (value) => {
      return value && value.length > 0;
    })
    .test("fileSize", "Carregue arquivos de até 3mb", (value) => {
      return value && value.length > 0 && value[0].size <= 30000;
    })
    .test("type", "Carregue apenas imagens PNG ou JPEG", (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === "image.jpeg " || "image.png")
      );
    }),
});

export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");

      setCategories(data);
    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const productFormData = new FormData();
  
    productFormData.append("name", data.name);
    productFormData.append("price", data.price * 100);
    productFormData.append("category_id", data.category?.id || "");
  
    if (data.file && data.file.length > 0) {
      productFormData.append("file", data.file[0]);
    }
  
    await toast.promise(api.post("/products", productFormData), {
      pending: "Adicionando Produto...",
      success: "Produto Criado com Sucesso",
      error: "Erro ao Adicionar o Produto",
    });
  };
  

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputGroup>
          <S.Label>Nome</S.Label>
          <S.Input type="text" {...register("name")} />
          <S.ErrorMessage>{errors?.name?.message}</S.ErrorMessage>
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>Preço</S.Label>
          <S.Input type="number" {...register("price")} />
          <S.ErrorMessage>{errors?.price?.message}</S.ErrorMessage>
        </S.InputGroup>

        <S.InputGroup>
          <S.LabelUpload>
            <Image />
            <input
              type="file"
              {...register("file")}
              accept="image/png, image/jpeg"
              onChange={(value) => {
                setFileName(value?.target?.files[0].name);
                register("file").onChange(value);
              }}
            />
            {fileName || "Upload do Produto"}
          </S.LabelUpload>

          <S.ErrorMessage>{errors?.file?.message}</S.ErrorMessage>
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>Categoria</S.Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <S.Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Categorias"
                menuPortalTarget={document.body}
              />
            )}
          />

          <S.ErrorMessage>{errors?.category?.message}</S.ErrorMessage>
        </S.InputGroup>

        <S.SubmitButton>Adicionar Produto</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
}
