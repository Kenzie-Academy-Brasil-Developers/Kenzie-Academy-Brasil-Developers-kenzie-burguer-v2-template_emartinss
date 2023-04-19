import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";

interface IInput {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  err: string;
  register: object;
}

const Input = ({ id, type, placeholder, label, err, register }: IInput) => (
  <div>
    <StyledInputContainer>
      <input type={type} id={id} placeholder={placeholder} {...register} />
      <label htmlFor={id}>{label}</label>
    </StyledInputContainer>
    <StyledParagraph fontColor="red">{err}</StyledParagraph>
  </div>
);

export default Input;
