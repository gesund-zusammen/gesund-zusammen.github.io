import React from "react";
import { Box, Container, Hidden } from "@material-ui/core";
import styled, { css, AnyStyledComponent } from "styled-components";
import { Link } from "react-router-dom";
import { withTranslation, WithTranslation } from "react-i18next";

import SocialIconTwitter from "../../../images/footer_icon_twitter.svg";
import SocialIconLinkedin from "../../../images/footer_icon_linkedin.svg";
import LogoGithub from "../../../images/footer_icon_github.svg";

import LogoDE from "../../../images/logo_light.svg";
import LogoEN from "../../../images/logo_en_light.svg";

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
          <FooterLinks>
            <Hidden xsDown>
              <Link
                to={`/${this.props.i18n.language}/`}
                style={{ float: "left" }}
              >
                <FooterLogo
                  src={this.props.i18n.language === "de" ? LogoDE : LogoEN}
                  alt={
                    this.props.i18n.language === "de"
                      ? "#GesundZusammen"
                      : "#HealthyTogether"
                  }
                />
              </Link>
            </Hidden>
            <FooterSocialIcons>
              <a
                href="https://www.linkedin.com/company/healthytogether/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={SocialIconLinkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://twitter.com/gesundzusammen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={SocialIconTwitter} alt="Twitter" />
              </a>
              <a
                href="https://github.com/gesund-zusammen/gesund-zusammen.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LogoGithub} alt="Github" />
              </a>
            </FooterSocialIcons>
          </FooterLinks>
          <FooterNav>
            <FooterNavItems>
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
            <CopyrightNote>&copy; 2020 Healthy Together gGmbH</CopyrightNote>
          </FooterNav>
        </Container>
      </FooterWrapper>
    );
  };
}

const FooterWrapper: AnyStyledComponent = styled(Box)`
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #ffffff;
  padding: 4rem 0 2rem 0;
  background-color: #003269;
`;

const FooterLinks: AnyStyledComponent = styled.div`
  display: block;
  overflow: hidden;
  padding: 0 0 2rem 0;
  margin: 0;
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
  margin: 0;
`;

const FooterSocialIcons: AnyStyledComponent = styled.div`
  text-align: center;
  margin: 1rem 0;

  & > a {
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
  text-align: center;

  @media (min-width: 600px) {
    float: right;
    width: auto;
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
  margin-top: 1rem;

  @media (min-width: 600px) {
    text-align: left;
  }
`;

export default withTranslation()(Footer);
