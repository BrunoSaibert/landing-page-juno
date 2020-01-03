import React from 'react';

import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

import GlobalStyle from '../../styles/global';
import '../../styles/reboot.css';
import '../../styles/grid.css';

import Header from './header';
import Footer from './footer';

import { Main } from './styles';

export default function Layout({ children }) {

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', {
      header: '#top'
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </>
    </ThemeProvider>
  );
}
