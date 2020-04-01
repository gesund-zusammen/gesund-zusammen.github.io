import React from "react";
import { Box, Container } from "@material-ui/core";

import InitiativePageHeader from "./Header";
import Footer from "../Shared/Footer";
import { HeaderBox, MainContentContainer } from "../Shared/StyledComponents";

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
        <HeaderBox id="header" component="header">
          <Container maxWidth="lg">
            <InitiativePageHeader
              lang={this.props.lang}
              langChangeCallback={this.handleLangChange}
              title={this.props.title}
              content={this.props.content}
            ></InitiativePageHeader>
          </Container>
        </HeaderBox>

        <Box id="content" paddingBottom={4} marginTop={4}>
          <MainContentContainer maxWidth="lg">
            {this.props.children}
          </MainContentContainer>
        </Box>

        <Footer lang={this.props.lang}></Footer>
      </>
    );
  };
}

export default LayoutInitiativePage;
