import React from "react";
import { Typography, Grid, Button, Box } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../util";

import Logo from "../images/logo.svg";
import LogoFinleap from "../images/logo_finleap.svg";
import LogoVia from "../images/logo_via.svg";
import LogoWefox from "../images/logo_wefox.svg";

interface IFooterProps {
  lang: "de" | "en";
}

class Footer extends React.PureComponent<IFooterProps, {}> {
  render = () => {
    return (
      <>
        <SupportersHeader variant="h3">
          {translated(this.props.lang).footer.title}
        </SupportersHeader>

        <Box marginTop={4}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={3} style={{ textAlign: "center" }}>
              <img src={LogoFinleap} style={{ height: "100%" }}></img>
            </Grid>
            <Grid item xs={12} sm={3} style={{ textAlign: "center" }}>
              <img src={LogoWefox} style={{ height: "100%" }}></img>
            </Grid>
            <Grid item xs={12} sm={3} style={{ textAlign: "center" }}>
              <img src={LogoVia} style={{ height: "100%" }}></img>
            </Grid>
          </Grid>
        </Box>

        <Box marginTop={4}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button
                color="secondary"
                variant="contained"
                disableFocusRipple={true}
              >
                {translated(this.props.lang).footer.button}
              </Button>
            </Grid>
          </Grid>
        </Box>

        <FooterNav>
          <FooterLogo src={Logo} alt="#GesundZusammen"></FooterLogo>
          <FooterNavItems>
            <FooterNavItem href="#">
              {translated(this.props.lang).footer.nav.privacy}
            </FooterNavItem>
            <FooterNavItem href="#">
              {translated(this.props.lang).footer.nav.vulnerability}
            </FooterNavItem>
            <FooterNavItem href="#">
              {translated(this.props.lang).footer.nav.imprint}
            </FooterNavItem>
          </FooterNavItems>
        </FooterNav>
        <CopyrightNote>&copy; 2020 finleap GmbH</CopyrightNote>
      </>
    );
  };
}

const SupportersHeader = styled(Typography)`
  && {
    display: block;
    color: inherit;
    text-align: center;

    @media (min-width: 600px) {
      text-align: left;
    }
  }
`;

const FooterLogo: AnyStyledComponent = styled.img`
  display: block;
  margin: 0 auto;

  @media (min-width: 600px) {
    margin: 0;
    float: left;
  }
`;

const FooterNav: AnyStyledComponent = styled.div`
  display: block;
  overflow: hidden;
  padding: 2rem 0;
  margin: 3rem 0 0 0;
  border-top: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
`;

const FooterNavItems: AnyStyledComponent = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 1rem;
  text-align: center;

  @media (min-width: 600px) {
    float: right;
    width: auto;
    margin: 0;
    text-align: right;
  }
`;

const FooterNavItem: AnyStyledComponent = styled.a`
  display: block;
  width: 100%;
  font-family: inherit;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.8rem;
  line-height: 2.8rem;
  font-weight: normal;

  @media (min-width: 600px) {
    display: inline-block;
    width: auto;
    margin-left: 2rem;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const CopyrightNote: AnyStyledComponent = styled.p`
  font-size: 0.6rem;
  padding: 1rem;
  text-align: center;
`;

export default Footer;
