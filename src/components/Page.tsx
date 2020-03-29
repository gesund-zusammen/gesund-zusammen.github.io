import React from "react";
import { Box, Container } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import BgHeader from "../images/bg_header.svg";
import BgFooter from "../images/bg_footer.svg";

import Header from "./Header";
import MainContent from "./MainContent";
import Partners from "./Partners";
import Faq from "./Faq";
import Footer from "./Footer";

interface IPageState {
  lang: "de" | "en";
}

const DEFAULT_STATE: IPageState = {
  lang: "de",
};

class Page extends React.Component<{}, IPageState> {
  constructor(props: {}) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  handleLangChange = (lang: "de" | "en") => {
    this.setState({ lang });
  };

  render = () => {
    return (
      <>
        <HeaderWrapper id="header" component="header" paddingBottom={14}>
          <Container maxWidth="lg">
            <Header
              lang={this.state.lang}
              langChangeCallback={this.handleLangChange}
            ></Header>
          </Container>
        </HeaderWrapper>

        <Box id="maincontent" paddingBottom={4} marginTop={4}>
          <Container maxWidth="lg">
            <MainContent lang={this.state.lang}></MainContent>
          </Container>
        </Box>

        <Box id="partners" paddingBottom={4} marginTop={4}>
          <Container maxWidth="lg">
            <Partners lang={this.state.lang}></Partners>
          </Container>
        </Box>

        <Box id="faq" paddingBottom={4} marginTop={4}>
          <Container maxWidth="lg">
            <Faq lang={this.state.lang}></Faq>
          </Container>
        </Box>

        <FooterWrapper id="footer" component="footer">
          <Container maxWidth="lg">
            <Footer lang={this.state.lang}></Footer>
          </Container>
        </FooterWrapper>
      </>
    );
  };
}

const HeaderWrapper: AnyStyledComponent = styled(Box)`
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #ffffff;
  background-image: url(${BgHeader});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const FooterWrapper: AnyStyledComponent = styled(Box)`
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #ffffff;
  padding: 8rem 0 2rem 0;
  background-image: url(${BgFooter});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 600px) {
    padding-top: 4rem;
  }
`;

export default Page;
