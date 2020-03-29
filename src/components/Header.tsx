import React from "react";
import { Box, Typography, Switch } from "@material-ui/core";
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
        <HeaderNav>
          <img src={Logo} alt="#GesundZusammen"></img>
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
              <LangSwitch
                checked={this.props.lang === "de"}
                onChange={this.handleLangChange}
                disableRipple={true}
                color="primary"
                name="langSwitch"
              ></LangSwitch>
            </HeaderLangSwitch>
            <HeaderLangDisplay>{this.props.lang}</HeaderLangDisplay>
          </HeaderNavItems>
        </HeaderNav>
        <HeaderContent>
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
        </HeaderContent>
        <HeaderIllustration>
          <img src={IlluHeader} alt="Patient 0"></img>
        </HeaderIllustration>
      </>
    );
  };
}

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

const LangSwitch: AnyStyledComponent = styled(Switch)`
  margin-top: -4px;
`;

const HeaderLangDisplay: AnyStyledComponent = styled.span`
  display: inline-block;
  float: right;
  font-size: 1rem;
  margin-top: 1.1rem;
  text-transform: uppercase;
`;

const HeaderContent: AnyStyledComponent = styled(Box)`
  float: left;
  font-family: inherit;
  margin: 7rem 0 0 0;
  width: 50%;
`;

const HeaderIllustration: AnyStyledComponent = styled(Box)`
  width: 50%;
  overflow: hidden;
  float: left;

  & > img {
    width: 100%;
    margin: 5rem 0 10rem 0;
  }
`;

export default Header;
