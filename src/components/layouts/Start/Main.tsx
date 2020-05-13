import React from "react";
import { Box, Container, Typography, Grid, Hidden } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import LatestNews from "../Shared/LatestNews";
import Social from "../Shared/Social";
import Footer from "../Shared/Footer";
import NewsletterSignup from "../Shared/NewsletterSignup";
import HeaderNav from "../Shared/HeaderNav";

import IlluHeader from "../../../images/illu_header_start.svg";

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

    @media (max-width: 599px) {
      & > .background {
        position: absolute;
        right: -8px;
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
  width: 100%;

  @media (min-width: 600px) {
    margin-left: -20%;
    margin-top: -1rem;
    width: 120%;
  }
`;

class LayoutStart extends React.PureComponent<WithTranslation, {}> {
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
              <Box paddingBottom={4}>
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
                        {this.props.t("start.header.title")}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        style={{
                          fontFamily: "inherit",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {this.props.t("start.header.content")}
                      </Typography>
                    </HeaderContent>
                  </Grid>

                  <FunkyMobileGridItem item xs={12} sm={6}>
                    <div className="background" />
                    <HeaderIllustration src={IlluHeader} alt="Patient 0" />
                  </FunkyMobileGridItem>
                </Grid>
              </Box>
            </Container>
          </SuperFunkyBox>
        </Box>

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

export default withTranslation()(LayoutStart);
