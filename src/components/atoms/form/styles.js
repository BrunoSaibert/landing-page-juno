import styled, { createGlobalStyle } from "styled-components";

export const FormStyle = styled.form``;

export const FormGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelStyle = styled.label`
  margin-top: 10px;
`;

export const InputBase = createGlobalStyle`
  .form-control {
    margin-bottom: 10px;
    color: ${props => props.theme.grayScale.dark};
    background: ${props => props.theme.grayScale.ligt};
    padding: 8px 16px;
    border: 1px solid ${props => props.theme.grayScale.gray};
    transition: border-color .3s;
    border-radius: 4px;

    &:active, &:focus{
      border-color: ${props => props.theme.color.primary};
    }
  }
`;

export const InputStyle = styled.input.attrs({
  className: "form-control",
  type: (props => props.type)
})``;

export const TextAreaStyle = styled.textarea.attrs({
  className: "form-control"
})``;
