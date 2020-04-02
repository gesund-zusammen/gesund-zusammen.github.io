import React from "react";
import { Box, Container, Grid, Typography, Hidden } from "@material-ui/core";
import styled, { css, AnyStyledComponent } from "styled-components";
import { Link } from "react-router-dom";

import { translated } from "../../../util";

import FooterShareBox from "../Shared/FooterShareBox";

import BgFooter from "../../../images/bg_footer.svg";
import Logo from "../../../images/logo.svg";

import SocialIconTwitter from "../../../images/footer_icon_twitter.svg";
import LogoGithub from "../../../images/logo_github.svg";

interface IFooterProps {
  lang: "de" | "en";
}

class Footer extends React.PureComponent<IFooterProps, {}> {
  copyToClipboard = (str: string) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  render = () => {
    return (
      <FooterWrapper id="footer" component="footer">
        <Container maxWidth="lg">
          <Box paddingBottom={12}>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6}>
                <FooterContent>
                  <Typography variant="h2">
                    {translated(this.props.lang).footer.title}
                  </Typography>
                  <Typography variant="body1">
                    {translated(this.props.lang).footer.claim}
                  </Typography>
                </FooterContent>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FooterShareBox lang={this.props.lang}></FooterShareBox>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <FooterNav>
              <Hidden xsDown>
                <Link to={`/${this.props.lang}/`} style={{ float: "left" }}>
                  <FooterLogo src={Logo} alt="#GesundZusammen"></FooterLogo>
                </Link>
              </Hidden>
              <FooterSocialIcons>
                <a href="https://twitter.com/gesundzusammen">
                  <img src={SocialIconTwitter} alt="Twitter"></img>
                </a>
                <a href="https://github.com/gesund-zusammen/gesund-zusammen.github.io">
                  <img src={LogoGithub} alt="Github"></img>
                </a>
              </FooterSocialIcons>
              <FooterNavItems>
                <FooterNavLinkItem to={`/${this.props.lang}/privacy`}>
                  {translated(this.props.lang).footer.nav.privacy}
                </FooterNavLinkItem>
                <FooterNavAnchorItem href="mailto:responsibledisclosure@gesund-zusammen.de">
                  {translated(this.props.lang).footer.nav.vulnerability}
                </FooterNavAnchorItem>
                <FooterNavLinkItem to={`/${this.props.lang}/press`}>
                  {translated(this.props.lang).footer.nav.press}
                </FooterNavLinkItem>
                <FooterNavLinkItem to={`/${this.props.lang}/imprint`}>
                  {translated(this.props.lang).footer.nav.imprint}
                </FooterNavLinkItem>
              </FooterNavItems>
              <CopyrightNote>
                &copy; 2020 Gesund Zusammen gGmbH i.G.
              </CopyrightNote>
            </FooterNav>
          </Box>
        </Container>
      </FooterWrapper>
    );
  };
}

const FooterWrapper: AnyStyledComponent = styled(Box)`
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #ffffff;
  padding: 2rem 0 1rem 0;
  background-color: #ccedf7;
  background-image: url(${BgFooter});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: auto 70%;
  overflow: hidden;

  @media (min-width: 600px) {
    padding-top: 4rem;
    background-size: auto 60%;
  }
`;

const FooterContent: AnyStyledComponent = styled.div`
  text-align: center;
  padding-bottom: 0;

  @media (min-width: 600px) {
    text-align: left;
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
  margin: 0;
`;

const FooterSocialIcons: AnyStyledComponent = styled.div`
  text-align: center;

  & > a {
    margin-top: 2rem;
    margin-left: 2rem;

    &:first-of-type {
      margin-left: 0;
    }

    & > img {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: 600px) {
    text-align: right;
  }
`;

const FooterNavItems: AnyStyledComponent = styled.div`
  display: inline-block;
  width: 100%;
  margin: 1rem 0 0 0;
  text-align: center;

  @media (min-width: 600px) {
    float: right;
    width: auto;
    margin: 2rem 0 0 0;
    text-align: right;
  }
`;

const footerLinkStyles = css`
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

const FooterNavAnchorItem: AnyStyledComponent = styled.a`
  ${footerLinkStyles}
`;

const FooterNavLinkItem: AnyStyledComponent = styled(Link)`
  ${footerLinkStyles}
`;

const CopyrightNote: AnyStyledComponent = styled.p`
  font-size: 0.6rem;
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
    margin-top: 3rem;
  }
`;

export default Footer;
