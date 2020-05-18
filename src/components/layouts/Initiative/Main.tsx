import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Hidden,
} from "@material-ui/core";
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
      width: 100%;
      border-radius: 0 0 200px 0;
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
    color: #ffffff;
    margin: 4rem 0 2rem 0;
    padding-right: 10rem;
  }
`;

const HeaderIllustration: AnyStyledComponent = styled.img`
  position: relative;
  width: 70%;
  float: right;

  @media (min-width: 600px) {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 80%;
    width: auto;
    margin-right: 120px;
  }
`;

const ApplyButton: AnyStyledComponent = styled(Button)`
  && {
    background-color: #003269;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    border-radius: 4px;
    margin: 0 auto;
    padding-right: 2rem;
    padding-left: 2rem;

    @media (min-width: 600px) {
      background-color: #ffffff;
      color: #003269;
    }
  }
`;

const MainContentBox: AnyStyledComponent = styled(Box)`
  && {
    overflow-x: hidden;
    margin-top: 48px;
    padding-bottom: 48px;
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
                        color="inherit"
                        style={{
                          whiteSpace: "pre-line",
                        }}
                      >
                        {this.props.t("initiative.header.title")}
                      </Typography>
                      <ApplyButton
                        variant="contained"
                        disableFocusRipple={true}
                        href={this.props.t("partners.link")}
                      >
                        {this.props.t("partners.cta")}
                      </ApplyButton>
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

        <MainContentBox id="content">
          <MainContentContainer maxWidth="lg">
            {this.props.children}
          </MainContentContainer>
        </MainContentBox>

        <LatestNews />

        <NewsletterSignup />

        <Social />

        <Footer />
      </>
    );
  };
}

export default withTranslation()(LayoutInitiative);
