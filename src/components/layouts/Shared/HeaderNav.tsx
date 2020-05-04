import React from "react";
import { Box, MenuItem, Select } from "@material-ui/core";
import styled, { css, AnyStyledComponent } from "styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { withTranslation, WithTranslation } from "react-i18next";

import LogoDE from "../../../images/logo.svg";
import LogoEN from "../../../images/logo_en.svg";

interface IHeaderNavProps extends RouteComponentProps, WithTranslation {}

class HeaderNav extends React.Component<IHeaderNavProps, {}> {
  handleLangChange = (selected: any) => {
    const newLang = selected.target.value as string;
    this.props.i18n.changeLanguage(newLang, () => {
      const pathSegments = this.props.location.pathname.split("/");
      const [, , ...path] = pathSegments;
      this.props.history.push(`/${newLang}/${path.join("/")}`);
    });
  };

  render = () => {
    return (
      <Box display="flex">
        <Box flexShrink={0} flexGrow={0}>
          <Link to={`/${this.props.i18n.language}/`}>
            <HeaderLogo
              src={this.props.i18n.language === "de" ? LogoDE : LogoEN}
              alt={
                this.props.i18n.language === "de"
                  ? "#GesundZusammen"
                  : "#HealthyTogether"
              }
            />
          </Link>
        </Box>
        <Box flexShrink={0} flexGrow={1} style={{ textAlign: "right" }}>
          <HeaderNavItems>
            <HeaderNavItem>
              <HeaderNavLinkItem
                to={`/${this.props.i18n.language}/initiative`}
                activeClassName="active"
              >
                {this.props.t("header.nav.initiative")}
              </HeaderNavLinkItem>
              <HeaderSubnavItems className="subnav-items">
                <HeaderSubnavItem>
                  <HeaderNavLinkSubitem
                    to={`/${this.props.i18n.language}/database`}
                  >
                    {this.props.t("header.nav.database")}
                  </HeaderNavLinkSubitem>
                </HeaderSubnavItem>
              </HeaderSubnavItems>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavLinkItem
                to={`/${this.props.i18n.language}/accelerator`}
                activeClassName="active"
              >
                {this.props.t("header.nav.accelerator")}
              </HeaderNavLinkItem>
              <HeaderSubnavItems className="subnav-items">
                <HeaderSubnavItem>
                  <HeaderNavLinkSubitem
                    className="subnav-item"
                    to={`/${this.props.i18n.language}/program`}
                  >
                    {this.props.t("header.nav.program")}
                  </HeaderNavLinkSubitem>
                </HeaderSubnavItem>
              </HeaderSubnavItems>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavLinkItem
                to={`/${this.props.i18n.language}/faq`}
                activeClassName="active"
              >
                {this.props.t("header.nav.faqs")}
              </HeaderNavLinkItem>
            </HeaderNavItem>
            <HeaderNavItem className="no-border">
              <LangSelect
                value={this.props.i18n.language}
                onChange={this.handleLangChange}
                label="Language"
                disableUnderline
              >
                <LangSelectMenuItem value={"en"}>EN</LangSelectMenuItem>
                <LangSelectMenuItem value={"de"}>DE</LangSelectMenuItem>
                <LangSelectMenuItem value={"fr"}>FR</LangSelectMenuItem>
                <LangSelectMenuItem value={"it"}>IT</LangSelectMenuItem>
                <LangSelectMenuItem value={"es"}>ES</LangSelectMenuItem>
              </LangSelect>
            </HeaderNavItem>
          </HeaderNavItems>
        </Box>
      </Box>
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

const HeaderNavItems: AnyStyledComponent = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const HeaderNavItem: AnyStyledComponent = styled.li`
  float: left;
  height: 2.5rem;
  padding: 0 1rem;
  border-bottom: 1px solid #ffffff;

  &.no-border {
    border-bottom: none;
  }

  & > .subnav-items {
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }

  &:hover {
    & > .subnav-items {
      opacity: 1;
      height: auto;
    }
  }
`;

const HeaderSubnavItems: AnyStyledComponent = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const HeaderSubnavItem: AnyStyledComponent = styled.li`
  float: right;
  border: 1px solid #ffffff;
  border-radius: 2px;
  margin: 10px 10px 0 0;
`;

const HeaderNavItemStyles = css`
  display: inline-block;
  font-family: inherit;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 2.5rem;
  padding: 0 1rem;

  &.active {
    border-bottom: 2px solid #ffffff;
  }
`;

const HeaderNavLinkItem: AnyStyledComponent = styled(NavLink)`
  ${HeaderNavItemStyles}
`;

const HeaderNavLinkSubitem: AnyStyledComponent = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 2.5rem;
  margin: 0 1rem;
`;

const LangSelect: AnyStyledComponent = styled(Select)`
  && {
    font-size: 1rem;
    margin-top: 0.3rem;
    margin-bottom: 0;

    & > svg {
      color: #003269;
      top: 2px;
      right: -4px;
    }
  }
`;

const LangSelectMenuItem: AnyStyledComponent = styled(MenuItem)`
  && {
    font-size: 1rem;
    margin: 0;
  }
`;

export default withRouter(withTranslation()(HeaderNav));
