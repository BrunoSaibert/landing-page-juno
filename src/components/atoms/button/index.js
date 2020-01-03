import React from 'react';

import { ButtonGroupStyle, ButtonBase, ButtonStyle, ButtonAppStyle } from './styles';

export function ButtonGroup({ children }) {
  return (
    <ButtonGroupStyle>
      {children}
    </ButtonGroupStyle>
  );
}

export default function Button({ children, type = "button", ...props }) {
  return (
    <>
      <ButtonBase />
      <ButtonStyle type={type} {...props}>
        {children}
      </ButtonStyle>
    </>
  );
}

export function ButtonApp({ children }) {
  return (
    <>
      <ButtonBase />
      <ButtonAppStyle>
        {children}
      </ButtonAppStyle>
    </>
  );
}
