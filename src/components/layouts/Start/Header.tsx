import React from "react";
import { Box, Container, Typography, Grid, Hidden } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import HeaderNav from "../Shared/HeaderNav";

import IlluHeader from "../../../images/illu_header.svg";

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

class LandingHeader extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <SuperFunkyBox>
        <div className="background" />
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
              <Hidden xsDown>
                <Grid item xs={12} sm={6}>
                  <HeaderIllustration src={IlluHeader} alt="Patient 0" />
                </Grid>
              </Hidden>
            </Grid>
          </Box>
        </Container>
      </SuperFunkyBox>
    );
  };
}

const HeaderContent: AnyStyledComponent = styled.div`
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
    margin: 4rem 0 0 0;
    padding-right: 10rem;
  }
`;

const HeaderIllustration: AnyStyledComponent = styled.img`
  margin-left: -20%;
  margin-top: -1rem;
  width: 120%;
`;

export default withTranslation()(LandingHeader);
