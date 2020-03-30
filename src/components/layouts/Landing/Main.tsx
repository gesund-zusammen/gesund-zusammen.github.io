import React from "react";
import { Box, Container } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import BgHeader from "../../../images/bg_header.svg";
import BgFooter from "../../../images/bg_footer.svg";

import Header from "./Header";
import Footer from "../Shared/Footer";

interface ILayoutLandingProps {
  lang: "de" | "en";
  langChangeCallback: (lang: "de" | "en") => void;
}

class LayoutLanding extends React.Component<ILayoutLandingProps, {}> {
  handleLangChange = (lang: "de" | "en") => {
    this.props.langChangeCallback(lang);
  };

  render = () => {
    return (
      <>
        <HeaderWrapper id="header" component="header">
          <Container maxWidth="lg">
            <Header
              lang={this.props.lang}
              langChangeCallback={this.handleLangChange}
            ></Header>
          </Container>
        </HeaderWrapper>

        <Box id="content" paddingBottom={4} marginTop={4}>
          <Container maxWidth="lg">{this.props.children}</Container>
        </Box>

        <FooterWrapper id="footer" component="footer">
          <Container maxWidth="lg">
            <Footer lang={this.props.lang}></Footer>
          </Container>
        </FooterWrapper>
      </>
    );
  };
}

const HeaderWrapper: AnyStyledComponent = styled(Box)`
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #ffffff;
  padding: 0 0 12rem 0;
  background-image: url(${BgHeader});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 600px) {
    padding-botton: 10rem;
  }
`;

const FooterWrapper: AnyStyledComponent = styled(Box)`
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #ffffff;
  padding: 4rem 0 2rem 0;
  background-image: url(${BgFooter});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 600px) {
    padding-top: 8rem;
  }
`;

export default LayoutLanding;
