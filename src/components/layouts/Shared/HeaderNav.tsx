import React from "react";
import { MenuItem, Select } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { withTranslation, WithTranslation } from "react-i18next";

import LogoDE from "../../../images/logo.svg";
import LogoEN from "../../../images/logo_en.svg";

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
            alt={
              this.props.i18n.language === "de"
                ? "#GesundZusammen"
                : "#HealthyTogether"
            }
          />
        </Link>
        <HeaderNavItems>
          <HeaderNavItemWithSubitems>
            <HeaderNavLinkItem to={`/${this.props.i18n.language}/initiative`}>
              {this.props.t("header.nav.initiative")}
            </HeaderNavLinkItem>
            <HeaderNavLinkSubitem
              className="subnav-item"
              to={`/${this.props.i18n.language}/database`}
            >
              {this.props.t("header.nav.database")}
            </HeaderNavLinkSubitem>
          </HeaderNavItemWithSubitems>
          <HeaderNavItemWithSubitems>
            <HeaderNavLinkItem to={`/${this.props.i18n.language}/accelerator`}>
              {this.props.t("header.nav.accelerator")}
            </HeaderNavLinkItem>
            <HeaderNavLinkSubitem
              className="subnav-item"
              to={`/${this.props.i18n.language}/program`}
            >
              {this.props.t("program.header.title")}
            </HeaderNavLinkSubitem>
          </HeaderNavItemWithSubitems>

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

const HeaderNavLinkItem: AnyStyledComponent = styled(Link)`
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
  }
`;

const HeaderNavLinkSubitem: AnyStyledComponent = styled(Link)`
  position: absolute;
  right: 0;
  display: block;
  font-family: inherit;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 3rem;

  @media (min-width: 600px) {
    display: inline-block;
    width: auto;
  }
`;

const HeaderNavItemWithSubitems: AnyStyledComponent = styled.div`
  position: relative;
  display: inline-block;
  overflow: visible;

  & > .subnav-item {
    display: none;
  }

  &:hover {
    & > .subnav-item {
      display: block;
    }
  }
`;

const HeaderLangSwitch: AnyStyledComponent = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
    margin-left: 2rem;
  }
`;

export default withRouter(withTranslation()(HeaderNav));
