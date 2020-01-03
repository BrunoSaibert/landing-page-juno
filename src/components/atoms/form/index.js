import React from 'react';

import { InputBase, FormStyle, FormGroupStyle, InputStyle } from './styles';

export function Form({ children, ...props }) {
  return (
    <FormStyle {...props}>
      <InputBase />
      {children}
    </FormStyle>
  );
}
export function FormGroup({ children, ...props }) {
  return (
    <FormGroupStyle {...props}>
      {children}
    </FormGroupStyle>
  );
}
export function Input({ ...props }) {
  return (
    <InputStyle {...props} />
  );
}
