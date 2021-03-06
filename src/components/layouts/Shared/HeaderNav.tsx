import React from "react";
import {
  Box,
  MenuItem,
  Select,
  Hidden,
  Link as AnchorLink,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import styled, { css, AnyStyledComponent } from "styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { withTranslation, WithTranslation } from "react-i18next";

import LogoDE from "../../../images/logo.svg";
import LogoDELight from "../../../images/logo_light.svg";
import LogoEN from "../../../images/logo_en.svg";
import LogoENLight from "../../../images/logo_en_light.svg";

interface IHeaderNavProps extends RouteComponentProps, WithTranslation {
  dark?: boolean;
}

interface IHeaderNavState {
  navExpanded: boolean;
}

const DEFAULT_STATE: IHeaderNavState = {
  navExpanded: false,
};

class HeaderNav extends React.PureComponent<IHeaderNavProps, IHeaderNavState> {
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
            <Hidden xsDown>
              <HeaderLogo
                src={
                  this.props.dark
                    ? this.props.i18n.language === "de"
                      ? LogoDE
                      : LogoEN
                    : this.props.i18n.language === "de"
                    ? LogoDELight
                    : LogoENLight
                }
                alt={
                  this.props.i18n.language === "de"
                    ? "#GesundZusammen"
                    : "#HealthyTogether"
                }
              />
            </Hidden>
            <Hidden smUp>
              <HeaderLogo
                src={this.props.i18n.language === "de" ? LogoDE : LogoEN}
                alt={
                  this.props.i18n.language === "de"
                    ? "#GesundZusammen"
                    : "#HealthyTogether"
                }
              />
            </Hidden>
          </Link>
          <Hidden smUp>
            {this.state.navExpanded ? (
              <HeaderCloseIcon onClick={this.toggleNav} />
            ) : (
              <HeaderMenuIcon onClick={this.toggleNav} />
            )}
          </Hidden>
        </HeaderNavLogoBox>
        <HeaderNavItemsBox
          className={this.state.navExpanded ? "expanded" : "retracted"}
        >
          <HeaderNavItems className={`${this.props.dark && "dark"} underline`}>
            <HeaderNavItem>
              <HeaderNavLinkItem
                color="primary"
                to={`/${this.props.i18n.language}/initiative`}
                activeClassName="active"
                className={this.props.dark && "dark"}
              >
                {this.props.t("header.nav.initiative")}
              </HeaderNavLinkItem>
              <HeaderSubnavItems className="subnav-items">
                <HeaderSubnavItem className={this.props.dark && "dark"}>
                  <HeaderNavLinkSubitem
                    color="primary"
                    to={`/${this.props.i18n.language}/database`}
                    className={`${this.props.dark && "dark"} subnav-item`}
                  >
                    {this.props.t("header.nav.database")}
                  </HeaderNavLinkSubitem>
                </HeaderSubnavItem>
              </HeaderSubnavItems>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavLinkItem
                color="primary"
                to={`/${this.props.i18n.language}/accelerator`}
                activeClassName="active"
                className={this.props.dark && "dark"}
              >
                {this.props.t("header.nav.accelerator")}
              </HeaderNavLinkItem>
              <HeaderSubnavItems className="subnav-items">
                <HeaderSubnavItem className={this.props.dark && "dark"}>
                  <HeaderNavLinkSubitem
                    color="primary"
                    to={`/${this.props.i18n.language}/program`}
                    className={`${this.props.dark && "dark"} subnav-item`}
                  >
                    {this.props.t("header.nav.program")}
                  </HeaderNavLinkSubitem>
                </HeaderSubnavItem>
              </HeaderSubnavItems>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavLinkItem
                color="primary"
                to={`/${this.props.i18n.language}/faq`}
                activeClassName="active"
                className={this.props.dark && "dark"}
              >
                {this.props.t("header.nav.faqs")}
              </HeaderNavLinkItem>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavAnchorItem
                color="primary"
                href="https://www.coronawarn.app/"
                className={this.props.dark && "dark"}
                target="blank"
                rel="noopener noreferrer"
                underline="none"
              >
                {this.props.t("header.nav.app")}
              </HeaderNavAnchorItem>
            </HeaderNavItem>
          </HeaderNavItems>
          <HeaderNavItems>
            <HeaderNavItem className={`lang-selector`}>
              <LangSelect
                color="secondary"
                value={this.props.i18n.language}
                onChange={this.handleLangChange}
                label="Language"
                className={`${this.props.dark && "dark"}`}
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
    margin-bottom: 2rem;
    font-family: Montserrat;

    @media (min-width: 600px) {
      margin-bottom: 0;
    }
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
    max-height: 800px;
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
    z-index: 1000;

    &.retracted {
      max-height: 0px;
    }

    @media (min-width: 600px) {
      flex-basis: auto;
      text-align: right;
      overflow: visible;

      &.retracted {
        max-height: 2.5rem;
      }
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
  padding: 0;
  overflow: hidden;

  &:first-of-type {
    padding: 1.5rem 0 0 0;
  }

  @media (min-width: 600px) {
    width: auto;
    height: 2.5rem;
    overflow: visible;
    margin-top: 5px;

    &:first-of-type {
      padding: 0;
    }

    &.underline {
      border-bottom: 1px solid #ffffff;

      &.dark {
        border-color: #003269;
      }
    }
  }
`;

const HeaderNavItem: AnyStyledComponent = styled.li`
  position: relative;
  float: left;
  width: 100%;

  @media (min-width: 600px) {
    padding: 0 1rem;
    margin: -2px 0 0 0;
    width: auto;

    &.lang-selector {
      padding: 0 0 0 1rem;
    }

    & > .subnav-items {
      transition: opacity 0.3s ease-in-out;
      opacity: 0;
      height: 0;
      overflow: hidden;
    }

    &:hover {
      & > a {
        border-bottom: 3px solid #ffffff;

        &.dark {
          border-color: #003269;
        }
      }

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
    border-radius: 0px 0px 25px 0px;
    margin: 10px 0 0 0;
    cursor: pointer;

    &.dark {
      border-color: #003269;
    }
  }
`;

const SharedLinkStyles = css`
  display: inline-block;
  width: 100%;
  font-family: inherit;
  color: #003269;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;

  @media (min-width: 600px) {
    color: #ffffff;
    padding: 0 1rem;
    line-height: 2.5rem;
    width: auto;

    &.active {
      border-bottom: 3px solid #ffffff;

      &.dark {
        border-color: #003269;
      }
    }

    &.dark {
      color: #003269;
    }
  }
`;

const HeaderNavLinkItem: AnyStyledComponent = styled(NavLink)`
  ${SharedLinkStyles}
`;

const HeaderNavAnchorItem: AnyStyledComponent = styled(AnchorLink)`
  ${SharedLinkStyles}
`;

const HeaderNavLinkSubitem: AnyStyledComponent = styled(NavLink)`
  color: #003269;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 2.5rem;
  margin: 0 1rem;

  @media (min-width: 600px) {
    color: #ffffff;

    &.dark {
      color: #003269;
    }
  }
`;

const LangSelect: AnyStyledComponent = styled(Select)`
  && {
    float: right;
    width: 100%;
    font-size: 1rem;
    padding: 0;
    margin: 1rem 0;
    color: #003269;

    & > svg {
      top: 8px;
      right: 0px;
      color: #003269;
    }

    &.dark {
      color: #949494;

      & > svg {
        color: #949494;
      }
    }

    @media (min-width: 600px) {
      width: auto;
      margin: 0.3rem 0 0 0;

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
