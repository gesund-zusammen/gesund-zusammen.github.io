import React from "react";
import { Box, Typography, Switch, Grid, Hidden } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../util";

import IlluHeader from "../images/illu_header.svg";
import Logo from "../images/logo.svg";

interface IHeaderProps {
  lang: "de" | "en";
  langChangeCallback: (lang: "de" | "en") => void;
}

class Header extends React.PureComponent<IHeaderProps, {}> {
  handleLangChange = () => {
    this.props.langChangeCallback(this.props.lang === "de" ? "en" : "de");
  };

  render = () => {
    return (
      <>
        <Box paddingBottom={4} marginTop={4}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <img src={Logo} alt="#GesundZusammen"></img>
            </Grid>
            <Grid item xs={12} sm={6}>
              <HeaderNavItems>
                <HeaderNavItem href="#">
                  {translated(this.props.lang).header.nav.initiative}
                </HeaderNavItem>
                <HeaderNavItem href="#">
                  {translated(this.props.lang).header.nav.projects}
                </HeaderNavItem>
                <HeaderNavItem href="#">
                  {translated(this.props.lang).header.nav.supporters}
                </HeaderNavItem>
                <HeaderNavItem href="https://docs.google.com/document/d/1v7Z7puca9oy7kG_AZmVCZyxVRcBqRC9cGd4e344aGaA">
                  {translated(this.props.lang).header.nav.faqs}
                </HeaderNavItem>
                <HeaderLangSwitch>
                  <StyledSwitch
                    checked={this.props.lang === "de"}
                    onChange={this.handleLangChange}
                    disableRipple={true}
                    color="primary"
                    name="langSwitch"
                  ></StyledSwitch>
                  <LangDisplay>{this.props.lang}</LangDisplay>
                </HeaderLangSwitch>
              </HeaderNavItems>
            </Grid>
          </Grid>
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h1" style={{ fontFamily: "inherit" }}>
                {translated(this.props.lang).header.title}
              </Typography>
              <Typography
                variant="body1"
                style={{ fontFamily: "inherit", color: "#ffffff" }}
              >
                {translated(this.props.lang).header.content}
              </Typography>
              <Typography variant="caption" style={{ fontFamily: "inherit" }}>
                {translated(this.props.lang).header.claim}
              </Typography>
            </Grid>
            <Hidden xsDown>
              <Grid item xs={12} sm={6}>
                <HeaderIllustration
                  src={IlluHeader}
                  alt="Patient 0"
                ></HeaderIllustration>
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </>
    );
  };
}

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

const StyledSwitch: AnyStyledComponent = styled(Switch)`
  margin-top: -4px;
`;

const LangDisplay: AnyStyledComponent = styled.span`
  display: inline-block;
  float: right;
  font-size: 1rem;
  margin-top: 0.7rem;
  text-transform: uppercase;
`;

const HeaderIllustration: AnyStyledComponent = styled.img`
  width: 100%;
`;

export default Header;
