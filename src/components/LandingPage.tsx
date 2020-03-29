import React from "react";
import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  Switch,
} from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import InfoBox from "./InfoBox";

import Logo from "../images/logo.svg";
import BgHeader from "../images/bg_header.svg";
import BgFooter from "../images/bg_footer.svg";
import IlluHeader from "../images/illu_header.svg";
import IlluFaq from "../images/illu_faq.svg";

import LogoFinleap from "../images/logo_finleap.svg";
import LogoVia from "../images/logo_via.svg";
import LogoWefox from "../images/logo_wefox.svg";

import Copy from "../data/copy.json";

interface ILandingPageState {
  lang: "de" | "en";
}

const DEFAULT_STATE: ILandingPageState = {
  lang: "de",
};

class LandingPage extends React.Component<{}, ILandingPageState> {
  constructor(props: {}) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  translated = () => {
    return Copy[this.state.lang];
  };

  handleLangChange = () => {
    this.setState({ lang: this.state.lang === "de" ? "en" : "de" });
  };

  render = () => {
    return (
      <>
        <Header component="header">
          <HeaderContainer maxWidth="md">
            <HeaderNav>
              <img src={Logo} alt="#GesundZusammen"></img>
              <HeaderNavItems>
                <HeaderNavItem href="#">
                  {this.translated().header.nav.initiative}
                </HeaderNavItem>
                <HeaderNavItem href="#">
                  {this.translated().header.nav.projects}
                </HeaderNavItem>
                <HeaderNavItem href="#">
                  {this.translated().header.nav.supporters}
                </HeaderNavItem>
                <HeaderLangSwitch>
                  <Switch
                    checked={this.state.lang === "de"}
                    onChange={this.handleLangChange}
                    disableRipple={true}
                    color="primary"
                    name="langSwitch"
                  ></Switch>
                </HeaderLangSwitch>
                <HeaderLangDisplay>{this.state.lang}</HeaderLangDisplay>
              </HeaderNavItems>
            </HeaderNav>
            <HeaderContent>
              <Typography variant="h1" style={{ fontFamily: "inherit" }}>
                {this.translated().header.title}
              </Typography>
              <Typography variant="body1" style={{ fontFamily: "inherit" }}>
                {this.translated().header.content}
              </Typography>
              <Typography variant="caption" style={{ fontFamily: "inherit" }}>
                {this.translated().header.claim}
              </Typography>
            </HeaderContent>
          </HeaderContainer>
        </Header>
        <Box id="maincontent" paddingBottom={4} marginTop={4}>
          <Container maxWidth="md">
            <Typography variant="h2">{this.translated().main.title}</Typography>
            <Typography variant="body1">
              {this.translated().main.content}
            </Typography>
          </Container>
        </Box>
        <Box id="infoboxes" paddingBottom={4} marginTop={4}>
          <Container maxWidth="md">
            <Grid container spacing={4}>
              <InfoBox
                title={this.translated().boxes.initiative.title}
                content={this.translated().boxes.initiative.content}
              ></InfoBox>
              <InfoBox
                title={this.translated().boxes.support.title}
                content={this.translated().boxes.support.content}
              ></InfoBox>
              <InfoBox
                title={this.translated().boxes.ecosystem.title}
                content={this.translated().boxes.ecosystem.content}
              ></InfoBox>
            </Grid>
          </Container>
        </Box>
        <Box
          id="faq"
          paddingBottom={4}
          marginTop={4}
          style={{ overflow: "hidden" }}
        >
          <Container maxWidth="md">
            <FaqImage src={IlluFaq} alt="FAQ"></FaqImage>
          </Container>
        </Box>
        <Footer component="footer">
          <Container maxWidth="md">
            <Typography variant="h3">
              {this.translated().footer.title}
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={3} style={{ textAlign: "center" }}>
                <img src={LogoFinleap}></img>
              </Grid>
              <Grid item xs={3} style={{ textAlign: "center" }}>
                <img src={LogoWefox}></img>
              </Grid>
              <Grid item xs={3} style={{ textAlign: "center" }}>
                <img src={LogoVia}></img>
              </Grid>
            </Grid>
            <Button color="secondary" disableFocusRipple={true}>
              {this.translated().footer.button}
            </Button>
            <FooterNav>
              <img src={Logo} alt="#GesundZusammen"></img>
            </FooterNav>
          </Container>
        </Footer>
      </>
    );
  };
}

const Header: AnyStyledComponent = styled(Box)`
  font-family: "Open Sans", sans-serif;
  color: #ffffff;
  background-image: url(${BgHeader});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  padding-bottom: 8rem;
`;

const HeaderContainer: AnyStyledComponent = styled(Container)`
  background-image: url(${IlluHeader});
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50% auto;
`;

const HeaderNav: AnyStyledComponent = styled.div`
  font-family: inherit;
  display: block;
  padding: 3rem 0 0 0;
  overflow: hidden;

  && img {
    float: left;
  }
`;

const HeaderNavItems: AnyStyledComponent = styled.div`
  font-family: inherit;
  display: inline-bock;
  float: right;
`;

const HeaderNavItem: AnyStyledComponent = styled.a`
  font-family: inherit;
  display: inline-block;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 160%;
  margin-left: 1.3rem;
  margin-top: 0.7rem;

  &:first-of-type {
    margin-left: 0;
  }
`;

const HeaderLangSwitch: AnyStyledComponent = styled.div`
  display: inline-block;
  margin-left: 1.3rem;
`;

const HeaderLangDisplay: AnyStyledComponent = styled.span`
  display: inline-block;
  float: right;
  font-size: 1rem;
  margin-top: 1.2rem;
  text-transform: uppercase;
`;

const HeaderContent: AnyStyledComponent = styled.div`
  font-family: inherit;
  margin-top: 5rem;
  padding-bottom: 8rem;
  width: 50%;
`;

const FaqImage: AnyStyledComponent = styled.img`
  float: right;
`;

const Footer: AnyStyledComponent = styled(Box)`
  font-family: "Open Sans", sans-serif;
  color: #ffffff;
  padding: 3rem 0 3rem 0;
  background-image: url(${BgFooter});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const FooterNav: AnyStyledComponent = styled.div`
  display: block;
  padding: 2rem 0;
  margin: 3rem 0 0 0;
  border-top: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
`;

export default LandingPage;
