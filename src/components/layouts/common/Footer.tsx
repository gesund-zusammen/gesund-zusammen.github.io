import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { Link } from "react-router-dom";

import { translated } from "../../../util";

import BgFooter from "../../../images/bg_footer.svg";
import Logo from "../../../images/logo.svg";

interface IFooterProps {
  lang: "de" | "en";
}

class Footer extends React.PureComponent<IFooterProps, {}> {
  render = () => {
    return (
      <FooterWrapper id="footer" component="footer">
        <Container maxWidth="lg">
          <Box paddingBottom={8}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <FooterContent>
                  <Typography variant="h2">Sharing is caring</Typography>
                  <Typography variant="body1">
                    Refer to your community who haven&apos;t heard about us yet.
                    The more the faster to overcome this situation!
                  </Typography>
                </FooterContent>
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
            </Grid>
          </Box>
          <FooterNav>
            <Link to="/">
              <FooterLogo src={Logo} alt="#GesundZusammen"></FooterLogo>
            </Link>
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
        </Container>
      </FooterWrapper>
    );
  };
}

const FooterWrapper: AnyStyledComponent = styled(Box)`
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #ffffff;
  padding: 2rem 0 4rem 0;
  background-color: #ccedf7;
  background-image: url(${BgFooter});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 600px) {
    padding-top: 4rem;
  }
`;

const FooterContent: AnyStyledComponent = styled.div``;

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
`;

export default Footer;
