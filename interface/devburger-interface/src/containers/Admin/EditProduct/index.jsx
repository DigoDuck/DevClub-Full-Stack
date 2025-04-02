import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Image } from "@phosphor-icons/react/dist/ssr";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import * as yup from "yup";
import * as S from "./styles";

const schema = yup.object({
  name: yup.string().required("Digite o nome do produto"),
  price: yup
    .number()
    .positive()
    .required()
    .typeError("Digite o preço do produto"),
  category: yup.object().required("Escolha uma categoria do produto"),
  offer: yup.bool(),
});

export function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate([]);

  const {
    state: { product },
  } = useLocation();

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
    productFormData.append("offer", data.offer);

    if (data.file && data.file.length > 0) {
      productFormData.append("file", data.file[0]);
    }

    await toast.promise(api.put(`/products/${product.id}`, productFormData), {
      pending: "Editando Produto...",
      success: "Produto Editado com Sucesso",
      error: "Erro ao Editar o Produto",
    });

    setTimeout(() => {
      navigate("/admin/produtos")
    }, 2000);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputGroup>
          <S.Label>Nome</S.Label>
          <S.Input
            type="text"
            {...register("name")}
            defaultValue={product.name}
          />
          <S.ErrorMessage>{errors?.name?.message}</S.ErrorMessage>
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>Preço</S.Label>
          <S.Input
            type="number"
            {...register("price")}
            defaultValue={product.price / 100}
          />
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
            defaultValue={product.category}
            render={({ field }) => (
              <S.Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Categorias"
                menuPortalTarget={document.body}
                defaultValue={product.category}
              />
            )}
          />

          <S.ErrorMessage>{errors?.category?.message}</S.ErrorMessage>
        </S.InputGroup>

        <S.InputGroup>
          <S.ContainerCheckbox>
            <input type="checkbox" defaultChecked={product.offer} {...register("offer")}/>
            <S.Label>Produto em Oferta?</S.Label>
          </S.ContainerCheckbox>
        </S.InputGroup>

        <S.SubmitButton>Editar Produto</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
}
