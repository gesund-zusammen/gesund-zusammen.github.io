import React from "react";
import { Box, Container, Grid, Typography, Hidden } from "@material-ui/core";
import styled, { css, AnyStyledComponent } from "styled-components";
import { Link } from "react-router-dom";

import { translated } from "../../../util";

import BgFooter from "../../../images/bg_footer.svg";
import Logo from "../../../images/logo.svg";

import IconWhatsApp from "../../../images/icon_whatsapp.svg";
import IconMessenger from "../../../images/icon_messenger.svg";
import IconEmail from "../../../images/icon_email.svg";

import SocialIconFacebook from "../../../images/footer_icon_facebook.svg";
import SocialIconInvision from "../../../images/footer_icon_invision.svg";
import SocialIconTwitter from "../../../images/footer_icon_twitter.svg";
import SocialIconYoutube from "../../../images/footer_icon_youtube.svg";

import FooterIconEmail from "../../../images/footer_icon_email.svg";

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
          <Box paddingBottom={8}>
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
                <Typography variant="subtitle1">
                  {translated(this.props.lang).footer.shareLink}
                </Typography>
                <CopyBox>
                  <span>https://gesund-zusammen.de</span>
                  <CopyLink
                    onClick={() =>
                      this.copyToClipboard("https://gesund-zusammen.de")
                    }
                  >
                    {translated(this.props.lang).footer.copy}
                  </CopyLink>
                </CopyBox>
                <ShareBox>
                  <Typography variant="subtitle2">
                    {translated(this.props.lang).footer.shareVia}
                  </Typography>
                  <a
                    className="share-icon-link"
                    href="whatsapp://send?text=https://gesund-zusammen.de"
                    data-action="share/whatsapp/share"
                  >
                    <img
                      className="share-icon"
                      src={IconWhatsApp}
                      alt="Share with WhatsApp"
                    ></img>
                  </a>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://gesund-zusammen.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-icon-link"
                  >
                    <img
                      className="share-icon"
                      src={IconMessenger}
                      alt="Share with Messenger"
                    ></img>
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(
                      "Guck dir mal gesund-zusammen.de an",
                    )}&body=${encodeURIComponent(
                      "https://gesund-zusammen.de",
                    )}`}
                    className="share-icon-link"
                  >
                    <img
                      className="share-icon"
                      src={IconEmail}
                      alt="Share via Email"
                    ></img>
                  </a>
                </ShareBox>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <FooterNav>
              <Hidden xsDown>
                <Link to="/" style={{ float: "left" }}>
                  <FooterLogo src={Logo} alt="#GesundZusammen"></FooterLogo>
                </Link>
              </Hidden>
              <FooterSocialIcons>
                <a href="https://twitter.com/gesundzusammen">
                  <img src={SocialIconTwitter} alt="Twitter"></img>
                </a>
                <a href="https://facebook.com">
                  <img src={SocialIconFacebook} alt="Facebook"></img>
                </a>
                <a href="https://invision.com">
                  <img src={SocialIconInvision} alt="Invision"></img>
                </a>
                <a href="https://youtube.com">
                  <img src={SocialIconYoutube} alt="Youtube"></img>
                </a>
              </FooterSocialIcons>
              <FooterEmailLink>
                <a href="mailto:media@gesund-zusammen.de">
                  media@gesund-zusammen.de
                </a>
              </FooterEmailLink>
              <FooterNavItems>
                <FooterNavLinkItem to="/privacy">
                  {translated(this.props.lang).footer.nav.privacy}
                </FooterNavLinkItem>
                <FooterNavAnchorItem href="mailto:responsibledisclosure@gesund-zusammen.de">
                  {translated(this.props.lang).footer.nav.vulnerability}
                </FooterNavAnchorItem>
                <FooterNavAnchorItem href="https://docs.google.com/document/d/1v2kkrdG3i15nlpf4unVyIYlivQI7CVGczSLNe_U7vPs">
                  {translated(this.props.lang).footer.nav.imprint}
                </FooterNavAnchorItem>
              </FooterNavItems>
              <CopyrightNote>&copy; 2020 finleap GmbH</CopyrightNote>
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
    background-size: contain;
  }
`;

const FooterContent: AnyStyledComponent = styled.div`
  text-align: center;
  padding-bottom: 0;

  @media (min-width: 600px) {
    text-align: left;
  }
`;

const CopyBox: AnyStyledComponent = styled.div`
  display: block;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ced7db;
  border-radius: 4px;
  color: #3c3c3c;
  background: #ffffff;
`;

const CopyLink: AnyStyledComponent = styled.span`
  float: right;
  color: #0a6eaa;
  font-weight: 600;
  cursor: pointer;
`;

const ShareBox: AnyStyledComponent = styled.div`
  display: block;
  text-align: center;
  padding: 1rem;

  & .share-icon {
    margin-left: 2rem;
    margin-top: 1rem;

    &:first-of-type {
      margin-left: 0;
    }
  }

  & .share-icon-link {
    margin-left: 2rem;
    margin-top: 1rem;

    &:first-of-type {
      margin-left: 0;
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

const FooterEmailLink: AnyStyledComponent = styled.div`
  margin: 2rem 0 0 0;
  text-align: center;

  & > a {
    padding-left: 20px;
    background-image: url(${FooterIconEmail});
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    text-decoration: none;
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
    float: left;
  }
`;

export default Footer;
