import React from "react";
import { Switch } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { Link } from "react-router-dom";

import { translated } from "../util";

import Logo from "../images/logo.svg";

interface IHeaderProps {
  lang: "de" | "en";
  langChangeCallback: (lang: "de" | "en") => void;
}

class HeaderNav extends React.Component<IHeaderProps, {}> {
  handleLangChange = () => {
    this.props.langChangeCallback(this.props.lang === "de" ? "en" : "de");
  };

  render = () => {
    return (
      <>
        <Link to="/">
          <HeaderLogo src={Logo} alt="#GesundZusammen"></HeaderLogo>
        </Link>
        <HeaderNavItems>
          <HeaderNavItem href="#initiative">
            {translated(this.props.lang).header.nav.initiative}
          </HeaderNavItem>
          <HeaderNavItem href="https://docs.google.com/document/d/1jIgISaBz1R0Sy_-1fOsy9JAmj--YB4IUfaUgmhWrLsk">
            {translated(this.props.lang).header.nav.projects}
          </HeaderNavItem>
          <HeaderNavItem href="#partners">
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
      </>
    );
  };
}

const HeaderLogo: AnyStyledComponent = styled.img`
  display: block;
  margin: 0 auto;

  @media (min-width: 600px) {
    margin: 0;
    float: left;
  }
`;

const HeaderNavItems: AnyStyledComponent = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 1rem;
  text-align: center;

  @media (min-width: 600px) {
    float: right;
    width: auto;
    margin-top: 0;
    text-align: right;
  }
`;

const HeaderNavItem: AnyStyledComponent = styled.a`
  display: inline-block;
  width: 50%;
  font-family: inherit;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 3rem;

  @media (min-width: 600px) {
    display: inline-block;
    width: auto;
    margin-left: 2rem;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const HeaderLangSwitch: AnyStyledComponent = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
    margin-left: 1.3rem;
  }
`;

const StyledSwitch: AnyStyledComponent = styled(Switch)`
  margin-top: -4px;
`;

const LangDisplay: AnyStyledComponent = styled.span`
  display: inline-block;
  font-size: 1rem;
  margin-top: 0.7rem;
  text-transform: uppercase;
`;

export default HeaderNav;
