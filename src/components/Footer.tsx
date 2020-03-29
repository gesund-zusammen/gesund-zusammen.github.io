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
        <Typography variant="h3" style={{ color: "inherit" }}>
          {translated(this.props.lang).footer.title}
        </Typography>

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
          <img src={Logo} alt="#GesundZusammen"></img>
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

const FooterNav: AnyStyledComponent = styled.div`
  display: block;
  padding: 2rem 0;
  margin: 3rem 0 0 0;
  border-top: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
`;

const FooterNavItems: AnyStyledComponent = styled.div`
  font-family: inherit;
  display: inline-bock;
  float: right;
`;

const FooterNavItem: AnyStyledComponent = styled.a`
  font-family: inherit;
  display: inline-block;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: normal;
  line-height: 160%;
  margin-left: 2.8rem;
  margin-top: 0.9rem;

  &:first-of-type {
    margin-left: 0;
  }
`;

const CopyrightNote: AnyStyledComponent = styled.p`
  font-size: 0.6rem;
  padding: 1rem;
  text-align: center;
`;

export default Footer;
