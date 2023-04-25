import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import Input from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFormData } from "../RegisterForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./validator";

const LoginForm = () => {
  const { loginUserApi } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver:zodResolver(loginSchema),
    mode:"onChange"
  });

  const submit: SubmitHandler<IRegisterFormData> = (formData) => {
    loginUserApi(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        id="login"
        type="email"
        placeholder=""
        label="Email"
        err={errors.email?.message || ''}
        register={register("email")}
      />
      <Input
        type="password"
        placeholder=""
        label="Senha"
        err={errors.password?.message || ''}
        id="senha"
        register={register("password")}
      />
      <StyledButton $buttonSize="default" $buttonStyle="green">
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
