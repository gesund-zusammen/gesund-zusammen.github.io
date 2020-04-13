import React from "react";
import { MenuItem } from "@material-ui/core";
import styled, { css, AnyStyledComponent } from "styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { withTranslation, WithTranslation } from "react-i18next";

import LogoDE from "../../../images/logo.svg";
import LogoEN from "../../../images/logo_en.svg";
import Select from "@material-ui/core/Select";

interface IHeaderNavProps extends RouteComponentProps, WithTranslation {}

class HeaderNav extends React.Component<IHeaderNavProps, {}> {
  handleLangChange = (selected: any) => {
    const newLang = selected.target.value;
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
          <HeaderLogo
            src={this.props.i18n.language === "de" ? LogoDE : LogoEN}
            alt="#GesundZusammen"
          />
        </Link>
        <HeaderNavItems>
          {window.location.hostname !== "gesund-zusammen.de" && (
            <HeaderNavLinkItem to={`/${this.props.i18n.language}/initiative`}>
              {this.props.t("header.nav.initiative")}
            </HeaderNavLinkItem>
          )}
          {window.location.hostname === "gesund-zusammen.de" && (
            <HeaderNavLinkItem to={`/${this.props.i18n.language}/program`}>
              {this.props.t("program.header.title")}
            </HeaderNavLinkItem>
          )}
          <HeaderNavLinkItem to={`/${this.props.i18n.language}/database`}>
            {this.props.t("header.nav.initiatives")}
          </HeaderNavLinkItem>
          <HeaderNavLinkItem to={`/${this.props.i18n.language}/partners`}>
            {this.props.t("header.nav.supporters")}
          </HeaderNavLinkItem>
          <HeaderNavLinkItem to={`/${this.props.i18n.language}/faq`}>
            {this.props.t("header.nav.faqs")}
          </HeaderNavLinkItem>
          <HeaderLangSwitch>
            <Select
              value={this.props.i18n.language}
              onChange={this.handleLangChange}
              label="Language"
              disableUnderline
            >
              <MenuItem value={"en"}>EN</MenuItem>
              <MenuItem value={"de"}>DE</MenuItem>
              <MenuItem value={"fr"}>FR</MenuItem>
              <MenuItem value={"it"}>IT</MenuItem>
              <MenuItem value={"es"}>ES</MenuItem>
            </Select>
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

const headerNavItemStyles = css`
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

const HeaderNavLinkItem: AnyStyledComponent = styled(Link)`
  ${headerNavItemStyles}
`;

const HeaderLangSwitch: AnyStyledComponent = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
    margin-left: 1.3rem;
  }
`;

export default withRouter(withTranslation()(HeaderNav));
