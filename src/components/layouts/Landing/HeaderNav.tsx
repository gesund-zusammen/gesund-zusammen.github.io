import React from "react";
import { MenuItem } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
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
          <HeaderLangSwitch>
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

const HeaderLangSwitch: AnyStyledComponent = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
    margin-left: 1.3rem;
  }
`;

export default withRouter(withTranslation()(HeaderNav));
