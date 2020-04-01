import React from "react";
import { Box, Container } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import LandingHeader from "./Header";
import Footer from "../Shared/Footer";
import { HeaderBox, MainContentContainer } from "../Shared/StyledComponents";

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
        <LandingHeaderBox id="header" component="header">
          <Container maxWidth="lg">
            <LandingHeader
              lang={this.props.lang}
              langChangeCallback={this.handleLangChange}
            ></LandingHeader>
          </Container>
        </LandingHeaderBox>

        <Box id="content" paddingBottom={4} marginTop={4}>
          <MainContentContainer maxWidth="lg">
            {this.props.children}
          </MainContentContainer>
        </Box>

        <NewsletterSignupBox id="newsletter-signup" marginTop={4}>
          <NewsletterSignupContainer maxWidth="lg">
            TEST
          </NewsletterSignupContainer>
        </NewsletterSignupBox>

        <Footer lang={this.props.lang}></Footer>
      </>
    );
  };
}

const LandingHeaderBox: AnyStyledComponent = styled(HeaderBox)`
  padding: 0 0 6rem 0;
`;

const NewsletterSignupBox: AnyStyledComponent = styled(Box)`
  background-color: #e9e6e6;
`;

const NewsletterSignupContainer: AnyStyledComponent = styled(Container)`
  padding: 2rem 0;
`;

export default LayoutLanding;
