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
import Footer from "../Shared/Footer";
import LatestNews from "../Shared/LatestNews";
import NewsletterSignup from "../Shared/NewsletterSignup";
import { MainContentContainer } from "../Shared/StyledComponents";

import IlluHeader from "../../../images/illu_header_accelerator.svg";

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

    & > h1 {
      color: #ffffff;
    }
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
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: none;
    text-align: center;
    border-radius: 25px;
    padding: 1rem 4rem;
    margin: 2rem auto;

    @media (min-width: 600px) {
      background-color: #ffffff;
      color: #003269;
    }
  }
`;

const MainContentBox: AnyStyledComponent = styled(Box)`
  && {
    overflow-x: hidden;
    margin-top: 64px;
    padding-bottom: 48px;
  }
`;

class LayoutAccelerator extends React.PureComponent<WithTranslation, {}> {
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
                      <Typography variant="h1" color="secondary">
                        {this.props.t("accelerator.header.title")}
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{
                          fontFamily: "inherit",
                        }}
                      >
                        {this.props.t("accelerator.header.content")}
                      </Typography>
                      <ApplyButton
                        variant="contained"
                        disableFocusRipple={true}
                        href={this.props.t("program.link")}
                      >
                        {this.props.t("program.cta")}
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

export default withTranslation()(LayoutAccelerator);
