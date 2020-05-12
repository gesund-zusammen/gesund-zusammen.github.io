import React from "react";
import { Box, Container } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import Header from "./Header";
import LatestNews from "../Shared/LatestNews";
import Social from "../Shared/Social";
import Footer from "../Shared/Footer";
import NewsletterSignup from "../Shared/NewsletterSignup";
import { HeaderBox } from "../Shared/StyledComponents";

class LayoutLanding extends React.PureComponent {
  render = () => {
    return (
      <>
        <LandingHeaderBox id="header" component="header">
          <Container maxWidth="lg">
            <Header />
          </Container>
        </LandingHeaderBox>

        <Box id="content" paddingBottom={4} marginTop={4}>
          {this.props.children}
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

export default LayoutLanding;
