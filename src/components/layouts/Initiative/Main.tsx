import React from "react";
import { Box, Container, Typography, Grid, Hidden } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import HeaderNav from "../Shared/HeaderNav";
import Social from "../Shared/Social";
import LatestNews from "../Shared/LatestNews";
import Footer from "../Shared/Footer";
import NewsletterSignup from "../Shared/NewsletterSignup";
import { MainContentContainer } from "../Shared/StyledComponents";

import IlluHeader from "../../../images/illu_header_initiative.svg";

const SuperFunkyBox: AnyStyledComponent = styled(Box)`
  && {
    position: relative;
    padding-top: 2rem;
  }
  & > .background {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    display: block;
    width: 70%;
    height: 100%;
    background: #00aac8;
    border-radius: 0 0 0 50px;
    box-shadow: 30px 30px 50px rgba(26, 11, 61, 0.25);

    @media (min-width: 600px) {
      width: 50%;
      border-radius: 0 0 0 200px;
    }
  }
`;

const FunkyMobileGridItem: AnyStyledComponent = styled(Grid)`
  && {
    position: relative;
    padding-bottom: 0 !important;

    @media (max-width: 599px) {
      margin-bottom: 1rem;

      & > .background {
        position: absolute;
        right: -16px;
        top: 0;
        z-index: -1;
        display: block;
        width: 80%;
        height: 100%;
        background: #00aac8;
        border-radius: 200px 0 0 200px;
        box-shadow: 30px 30px 50px rgba(26, 11, 61, 0.25);
      }
    }
  }
`;

const HeaderContent: AnyStyledComponent = styled.div`
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
    margin: 4rem 0 0 0;
    padding-right: 10rem;
  }
`;

const HeaderIllustration: AnyStyledComponent = styled.img`
  width: 70%;
  float: right;

  @media (min-width: 600px) {
    width: 70%;
    margin-top: 2rem;
  }
`;

class LayoutInitiative extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <>
        <Box id="header" component="header">
          <SuperFunkyBox>
            <Hidden xsDown>
              <div className="background" />
            </Hidden>

            <Container maxWidth="lg">
              <Box>
                <HeaderNav />
              </Box>
              <Box>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <HeaderContent>
                      <Typography
                        variant="h1"
                        color="textSecondary"
                        style={{
                          whiteSpace: "pre-line",
                        }}
                      >
                        {this.props.t("initiative.header.title")}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        style={{
                          fontFamily: "inherit",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {this.props.t("initiative.header.content")}
                      </Typography>
                    </HeaderContent>
                  </Grid>

                  <FunkyMobileGridItem item xs={12} sm={6}>
                    <div className="background" />
                    <HeaderIllustration
                      src={IlluHeader}
                      alt="Initiative Illustration"
                    />
                  </FunkyMobileGridItem>
                </Grid>
              </Box>
            </Container>
          </SuperFunkyBox>
        </Box>

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

export default withTranslation()(LayoutInitiative);
