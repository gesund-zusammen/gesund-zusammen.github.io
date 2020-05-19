import React from "react";
import { Box, Container, Typography, Grid } from "@material-ui/core";
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
`;

const FunkyMobileGridItem: AnyStyledComponent = styled(Grid)`
  && {
    position: relative;
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
            <Container maxWidth="lg">
              <Box>
                <HeaderNav dark={true} />
              </Box>
              <Box paddingBottom={4}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <HeaderContent>
                      <Typography variant="h1" color="secondary">
                        {this.props.t("start.header.title")}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        style={{
                          fontFamily: "inherit",
                        }}
                      >
                        {this.props.t("start.header.content")}
                      </Typography>
                    </HeaderContent>
                  </Grid>

                  <FunkyMobileGridItem item xs={12} sm={6}>
                    <HeaderIllustration src={IlluHeader} />
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
