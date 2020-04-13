import React from "react";
import { Box, Container } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import InitiativeHeader from "./Header";
import Social from "../Shared/Social";
import Footer from "./Footer";
import NewsletterSignup from "../Shared/NewsletterSignup";
import { HeaderBox, MainContentContainer } from "../Shared/StyledComponents";

class LayoutInitiative extends React.Component {
  render = () => {
    return (
      <>
        <InitiativeHeaderBox id="header" component="header">
          <Container maxWidth="lg">
            <InitiativeHeader />
          </Container>
        </InitiativeHeaderBox>

        <Box id="content" paddingBottom={4} marginTop={4}>
          <MainContentContainer maxWidth="lg">
            {this.props.children}
          </MainContentContainer>
        </Box>

        <NewsletterSignup />

        <Social />

        <Footer />
      </>
    );
  };
}

const InitiativeHeaderBox: AnyStyledComponent = styled(HeaderBox)`
  padding: 0 0 6rem 0;
`;

export default LayoutInitiative;
