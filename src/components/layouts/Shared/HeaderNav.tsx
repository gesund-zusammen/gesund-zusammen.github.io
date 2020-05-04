import React from "react";
import { Box, MenuItem, Select, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import styled, { css, AnyStyledComponent } from "styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { withTranslation, WithTranslation } from "react-i18next";

import LogoDE from "../../../images/logo.svg";
import LogoEN from "../../../images/logo_en.svg";

interface IHeaderNavProps extends RouteComponentProps, WithTranslation {}

interface IHeaderNavState {
  navExpanded: boolean;
}

const DEFAULT_STATE: IHeaderNavState = {
  navExpanded: false,
};

class HeaderNav extends React.Component<IHeaderNavProps, IHeaderNavState> {
  constructor(props: IHeaderNavProps) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  toggleNav = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  };

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
      <HeaderNavRoot>
        <HeaderNavLogoBox>
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
          <Hidden smUp>
            {this.state.navExpanded ? (
              <HeaderCloseIcon onClick={this.toggleNav} />
            ) : (
              <HeaderMenuIcon onClick={this.toggleNav} />
            )}
          </Hidden>
        </HeaderNavLogoBox>
        <HeaderNavItemsBox>
          <HeaderNavItems
            className={this.state.navExpanded ? "expanded" : "retracted"}
          >
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
        </HeaderNavItemsBox>
      </HeaderNavRoot>
    );
  };
}

const HeaderNavRoot: AnyStyledComponent = styled(Box)`
  && {
    display: flex;
    flex-wrap: wrap;
  }
`;

const HeaderNavLogoBox: AnyStyledComponent = styled(Box)`
  && {
    flex-basis: 100%;
    flex-grow: 0;
    flex-shrink: 2;

    @media (min-width: 600px) {
      flex-basis: auto;
    }
  }
`;

const HeaderNavItemsBox: AnyStyledComponent = styled(Box)`
  && {
    flex-basis: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: left;

    @media (min-width: 600px) {
      flex-basis: auto;
      text-align: right;
    }
  }
`;

const HeaderLogo: AnyStyledComponent = styled.img`
  display: block;
  float: left;
  margin: 5px 0 0 0;
  width: 160px;

  @media (min-width: 600px) {
    margin: 0;
    width: 260px;
  }
`;

const HeaderMenuIcon: AnyStyledComponent = styled(MenuIcon)`
  && {
    float: right;
  }
`;

const HeaderCloseIcon: AnyStyledComponent = styled(CloseIcon)`
  && {
    float: right;
  }
`;

const HeaderNavItems: AnyStyledComponent = styled.ul`
  display: inline-block;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 1.5rem 0 0 0;
  max-height: 800px;
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;

  &.retracted {
    max-height: 0px;
  }

  @media (min-width: 600px) {
    width: auto;
    height: 2.5rem;
    padding: 0;
    overflow: visible;
    margin-top: 5px;

    &.retracted {
      max-height: 2.5rem;
    }
  }
`;

const HeaderNavItem: AnyStyledComponent = styled.li`
  position: relative;
  float: left;
  width: 100%;

  @media (min-width: 600px) {
    padding: 0 1rem;
    width: auto;

    &:last-of-type {
      padding: 0 0 0 1rem;
    }

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
  }
`;

const HeaderSubnavItems: AnyStyledComponent = styled.ul`
  position: relative;
  display: block;
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  text-align: left;

  @media (min-width: 600px) {
    padding: 0;
    text-align: center;
  }
`;

const HeaderSubnavItem: AnyStyledComponent = styled.li`
  @media (min-width: 600px) {
    display: inline-block;
    border: 1px solid #ffffff;
    border-radius: 2px;
    margin: 10px 0 0 0;
    cursor: pointer;
  }
`;

const HeaderNavItemStyles = css`
  display: inline-block;
  width: 100%;
  font-family: inherit;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;

  @media (min-width: 600px) {
    padding: 0 1rem;
    line-height: 2.5rem;
    width: auto;

    &.active {
      border-bottom: 2px solid #ffffff;
    }
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
    float: right;
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
    margin: 1rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    & > svg {
      color: #003269;
      top: 8px;
      right: 0px;
    }

    @media (min-width: 600px) {
      width: auto;
      border: none;
      margin: 0.3rem 0 0 0;
      padding: 0;

      & > svg {
        top: 0px;
        right: -5px;
      }
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
