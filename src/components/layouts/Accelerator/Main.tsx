import React from "react";
import { Box, Container } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import LandingHeader from "./Header";
import Social from "../Shared/Social";
import Footer from "../Shared/Footer";
import LatestNews from "../Shared/LatestNews";
import NewsletterSignup from "../Shared/NewsletterSignup";
import { HeaderBox, MainContentContainer } from "../Shared/StyledComponents";

class LayoutAccelerator extends React.Component {
  render = () => {
    return (
      <>
        <LandingHeaderBox id="header" component="header">
          <Container maxWidth="lg">
            <LandingHeader />
          </Container>
        </LandingHeaderBox>

        <Box id="content" paddingBottom={4} marginTop={4}>
          <MainContentContainer maxWidth="lg">
            {this.props.children}
          </MainContentContainer>
        </Box>

        <LatestNews />

        <NewsletterSignup />

        <Social />

        <Footer />
      </>
    );
  };
}

const LandingHeaderBox: AnyStyledComponent = styled(HeaderBox)`
  padding: 0 0 6rem 0;
`;

export default LayoutAccelerator;
