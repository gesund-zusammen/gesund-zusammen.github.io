import React from "react";
import { Switch, IconButton, Menu, MenuItem, Hidden } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import styled, { css, AnyStyledComponent } from "styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { withTranslation, WithTranslation } from "react-i18next";

import Logo from "../../../images/logo.svg";

interface IHeaderNavProps extends RouteComponentProps, WithTranslation {}

interface IHeaderNavState {
  menuAnchor: null | Element;
}

const DEFAULT_STATE: IHeaderNavState = {
  menuAnchor: null,
};

class HeaderNav extends React.Component<IHeaderNavProps, IHeaderNavState> {
  constructor(props: IHeaderNavProps) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  handleMenuIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ menuAnchor: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ menuAnchor: null });
  };

  handleLangChange = () => {
    const newLang = this.props.i18n.language === "de" ? "en" : "de";
    this.props.i18n.changeLanguage(newLang, () => {
      const pathSegments = this.props.location.pathname.split("/");
      const [, , ...path] = pathSegments;
      this.props.history.push(`/${newLang}/${path.join("/")}`);
    });
  };

  render = () => {
    return (
      <>
        <Link to={`/${this.props.i18n.language}/`}>
          <HeaderLogo src={Logo} alt="#GesundZusammen" />
        </Link>

        <HeaderLangSwitch>
          <StyledSwitch
            checked={this.props.i18n.language === "de"}
            onChange={this.handleLangChange}
            disableRipple={true}
            color="primary"
            name="langSwitch"
          />
          <LangDisplay>
            {this.props.i18n.language === "de" ? "en" : "de"}
          </LangDisplay>
        </HeaderLangSwitch>

        <Hidden smUp>
          <MenuToggleButton
            edge="end"
            color="inherit"
            aria-label="main-menu"
            onClick={this.handleMenuIconClick}
          >
            <MenuIcon />
          </MenuToggleButton>
          <HeaderNavMenu
            id="main-menu"
            anchorEl={this.state.menuAnchor}
            open={Boolean(this.state.menuAnchor)}
            onClose={this.handleMenuClose}
            keepMounted
          >
            <MenuItem onClick={this.handleMenuClose}>
              <HeaderNavLinkItem to={`/${this.props.i18n.language}/program`}>
                {this.props.t("program.header.title")}
              </HeaderNavLinkItem>
            </MenuItem>
            <MenuItem onClick={this.handleMenuClose}>
              <HeaderNavLinkItem to={`/${this.props.i18n.language}/database`}>
                {this.props.t("header.nav.initiatives")}
              </HeaderNavLinkItem>
            </MenuItem>
            <MenuItem onClick={this.handleMenuClose}>
              <HeaderNavLinkItem to={`/${this.props.i18n.language}/partners`}>
                {this.props.t("header.nav.supporters")}
              </HeaderNavLinkItem>
            </MenuItem>
            <MenuItem onClick={this.handleMenuClose}>
              <HeaderNavLinkItem to={`/${this.props.i18n.language}/faq`}>
                {this.props.t("header.nav.faqs")}
              </HeaderNavLinkItem>
            </MenuItem>
          </HeaderNavMenu>
        </Hidden>

        <Hidden smDown>
          <HeaderNavItems>
            <HeaderNavLinkItem to={`/${this.props.i18n.language}/program`}>
              {this.props.t("program.header.title")}
            </HeaderNavLinkItem>
            <HeaderNavLinkItem to={`/${this.props.i18n.language}/database`}>
              {this.props.t("header.nav.initiatives")}
            </HeaderNavLinkItem>
            <HeaderNavLinkItem to={`/${this.props.i18n.language}/partners`}>
              {this.props.t("header.nav.supporters")}
            </HeaderNavLinkItem>
            <HeaderNavLinkItem to={`/${this.props.i18n.language}/faq`}>
              {this.props.t("header.nav.faqs")}
            </HeaderNavLinkItem>
          </HeaderNavItems>
        </Hidden>
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

const MenuToggleButton: AnyStyledComponent = styled(IconButton)`
  && {
    float: left;

    @media (min-width: 600px) {
      float: right;
    }
  }
`;

const HeaderNavMenu: AnyStyledComponent = styled(Menu)`
  @media (min-width: 600px) {
    display: inline-block;
    width: 100%;
    margin-top: 1rem;
    float: right;
    width: auto;
    margin-top: 0;
    text-align: right;
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

const headerNavItemStyles = css`
  color: #00aac8;
  display: inline-block;
  width: 50%;
  font-family: inherit;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 3rem;

  @media (min-width: 600px) {
    color: #ffffff;
    display: inline-block;
    width: auto;
    margin-left: 2rem;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const HeaderNavLinkItem: AnyStyledComponent = styled(Link)`
  ${headerNavItemStyles}
`;

const HeaderLangSwitch: AnyStyledComponent = styled.div`
  float: right;

  @media (min-width: 600px) {
    margin-left: 1.3rem;
    margin-top: 4px;
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

export default withRouter(withTranslation()(HeaderNav));
