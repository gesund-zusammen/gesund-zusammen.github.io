import React from "react";
import { Box, Container } from "@material-ui/core";

import InitiativePageHeader from "./Header";
import Social from "../Shared/Social";
import Footer from "../Shared/Footer";
import { HeaderBox, MainContentContainer } from "../Shared/StyledComponents";

interface ILayoutInitiativePageProps {
  title: string;
  content: string;
}

class LayoutInitiativePage extends React.PureComponent<
  ILayoutInitiativePageProps,
  {}
> {
  render = () => {
    return (
      <>
        <HeaderBox id="header" component="header">
          <Container maxWidth="lg">
            <InitiativePageHeader
              title={this.props.title}
              content={this.props.content}
            />
          </Container>
        </HeaderBox>

        <Box id="content" paddingBottom={4} marginTop={4}>
          <MainContentContainer maxWidth="lg">
            {this.props.children}
          </MainContentContainer>
        </Box>

        <Social />

        <Footer />
      </>
    );
  };
}

export default LayoutInitiativePage;
