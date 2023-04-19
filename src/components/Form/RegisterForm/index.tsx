import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerSchema } from './valdiator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirm:string;
}
const RegisterForm = () => {
  const { registerUserApi } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode:"onChange"
  });

  const submit: SubmitHandler<IRegisterFormData> = (formData) => {
    registerUserApi(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type='text'
        placeholder=''
        label='Nome'
        err={ errors.name?.message || ''} 
        id='name'
        register={register('name')}
        
      />
      <Input
        type='email'
        id='email'
        placeholder=''
        label='Email'
        err={ errors.email?.message || ''} 
        register={register('email')}
      />
      <Input
        type='password'
        id='password'
        placeholder=''
        label='Senha'
        err={ errors.password?.message || ''} 
        register={register('password')}
      />
      <Input
        type='password'
        placeholder=''
        label='Confirme sua senha'
        err={ errors.confirm?.message || ''} 
        id='confirm'
        register={register('confirm')}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
      <ToastContainer  autoClose={3000} />
    </StyledForm>
  );
};

export default RegisterForm;
