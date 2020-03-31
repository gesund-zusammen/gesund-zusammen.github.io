import React from "react";
import { Box, Container } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import BgHeader from "../../../images/bg_header.svg";

import InitiativePageHeader from "./Header";
import Footer from "../Shared/Footer";

interface ILayoutInitiativePageProps {
  lang: "de" | "en";
  langChangeCallback: (lang: "de" | "en") => void;
  title: string;
  content: string;
}

class LayoutInitiativePage extends React.Component<
  ILayoutInitiativePageProps,
  {}
> {
  handleLangChange = (lang: "de" | "en") => {
    this.props.langChangeCallback(lang);
  };

  render = () => {
    return (
      <>
        <HeaderWrapper id="header" component="header">
          <Container maxWidth="lg">
            <InitiativePageHeader
              lang={this.props.lang}
              langChangeCallback={this.handleLangChange}
              title={this.props.title}
              content={this.props.content}
            ></InitiativePageHeader>
          </Container>
        </HeaderWrapper>

        <Box id="content" paddingBottom={4} marginTop={4}>
          <Container maxWidth="lg">{this.props.children}</Container>
        </Box>

        <Footer lang={this.props.lang}></Footer>
      </>
    );
  };
}

const HeaderWrapper: AnyStyledComponent = styled(Box)`
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #ffffff;
  padding: 0 0 8rem 0;
  background-image: url(${BgHeader});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 600px) {
    padding-bottom: 10rem;
  }
`;

export default LayoutInitiativePage;
