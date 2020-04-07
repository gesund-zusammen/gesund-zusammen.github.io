import React from "react";
import { Box, Container, Grid, Typography, Hidden } from "@material-ui/core";
import styled, { css, AnyStyledComponent } from "styled-components";
import { Link } from "react-router-dom";
import { withTranslation, WithTranslation } from "react-i18next";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import FooterShareBox from "../Shared/FooterShareBox";

import BgFooter from "../../../images/bg_footer.svg";
import Logo from "../../../images/logo.svg";

import SocialIconTwitter from "../../../images/footer_icon_twitter.svg";
import LogoGithub from "../../../images/logo_github.svg";

class Footer extends React.PureComponent<WithTranslation, {}> {
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
                  <Typography variant="h2" style={{ color: "#ffffff" }}>
                    {this.props.t("footer.title")}
                  </Typography>
                  <Typography variant="body1" style={{ color: "#ffffff" }}>
                    {this.props.t("footer.claim")}
                  </Typography>
                </FooterContent>
                <FooterShareBox />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TwitterTimelineEmbedWrapper>
                  <Typography variant="h2" style={{ color: "#ffffff" }}>
                    {this.props.t("footer.twitter.title")}
                  </Typography>
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="gesundzusammen"
                    options={{ height: "100%" }}
                  />
                </TwitterTimelineEmbedWrapper>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <FooterNav>
              <Hidden xsDown>
                <Link
                  to={`/${this.props.i18n.language}/`}
                  style={{ float: "left" }}
                >
                  <FooterLogo src={Logo} alt="#GesundZusammen" />
                </Link>
              </Hidden>
              <FooterSocialIcons>
                <a href="https://twitter.com/gesundzusammen">
                  <img src={SocialIconTwitter} alt="Twitter" />
                </a>
                <a href="https://github.com/gesund-zusammen/gesund-zusammen.github.io">
                  <img src={LogoGithub} alt="Github" />
                </a>
              </FooterSocialIcons>
              <FooterNavItems>
                <FooterNavLinkItem to={`/${this.props.i18n.language}/apply`}>
                  {this.props.t("program.cta")}
                </FooterNavLinkItem>
                <FooterNavLinkItem to={`/${this.props.i18n.language}/privacy`}>
                  {this.props.t("footer.nav.privacy")}
                </FooterNavLinkItem>
                <FooterNavAnchorItem href="mailto:responsibledisclosure@gesund-zusammen.de">
                  {this.props.t("footer.nav.vulnerability")}
                </FooterNavAnchorItem>
                <FooterNavLinkItem to={`/${this.props.i18n.language}/press`}>
                  {this.props.t("footer.nav.press")}
                </FooterNavLinkItem>
                <FooterNavLinkItem to={`/${this.props.i18n.language}/imprint`}>
                  {this.props.t("footer.nav.imprint")}
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
  background-color: #003269;
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
  color: #ffffff;
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

const TwitterTimelineEmbedWrapper: AnyStyledComponent = styled.div``;

export default withTranslation()(Footer);
