import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { Link } from "react-router-dom";

import { translated } from "../../../util";

import BgFooter from "../../../images/bg_footer.svg";
import Logo from "../../../images/logo.svg";
import IconWhatsApp from "../../../images/icon_whatsapp.svg";
import IconMessenger from "../../../images/icon_messenger.svg";
import IconEmail from "../../../images/icon_email.svg";

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
                  <Typography variant="h2">Sharing is caring</Typography>
                  <Typography variant="body1">
                    Refer to your community who haven&apos;t heard about us yet.
                    The more the faster to overcome this situation!
                  </Typography>
                </FooterContent>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">Share our link</Typography>
                <CopyBox>
                  <span>https://gesund-zusammen.de</span>
                  <CopyLink
                    onClick={() =>
                      this.copyToClipboard("https://gesund-zusammen.de")
                    }
                  >
                    Copy
                  </CopyLink>
                </CopyBox>
                <ShareBox>
                  <Typography variant="subtitle2">or share via</Typography>
                  <img
                    className="share-icon"
                    src={IconWhatsApp}
                    alt="Share with WhatsApp"
                  ></img>
                  <img
                    className="share-icon"
                    src={IconMessenger}
                    alt="Share with Messenger"
                  ></img>
                  <img
                    className="share-icon"
                    src={IconEmail}
                    alt="Share via Email"
                  ></img>
                </ShareBox>
              </Grid>
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

  & > .share-icon {
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
