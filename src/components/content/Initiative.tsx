import React from "react";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import {
  Box,
  Button,
  Grid,
  Typography,
  Hidden,
  FormControl,
  Select,
} from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import styled, { AnyStyledComponent } from "styled-components";

import MuiMarkdown from "../common/MuiMarkdown";
import CTABox from "../common/CTABox";
import PartnerItems from "../common/PartnerItems";

import InitiativePartners from "../../data/partners_initiative.json";

import ContentDE from "../../data/initiative/initiative_de.md";
import ContentEN from "../../data/initiative/initiative_en.md";
import ContentFR from "../../data/initiative/initiative_fr.md";
import ContentIT from "../../data/initiative/initiative_it.md";
import ContentES from "../../data/initiative/initiative_es.md";

import IlluContent from "../../images/illu_initiative_content.svg";
import LiBulletIcon from "../../images/li_bullet_icon.svg";

import { IAppState } from "../../reducer";
import actions from "../../actions";

const ContentImage: AnyStyledComponent = styled.img`
  width: 100%;
`;

const StyledMarkdownContent: AnyStyledComponent = styled(MuiMarkdown)`
  && {
    ul {
      padding: 0;
      list-style: none;
    }

    li {
      padding: 0 0 0 2rem;
      background: url(${LiBulletIcon}) no-repeat;
      background-position: top 0.3rem left 0;
    }
  }
`;

const LinkButton: AnyStyledComponent = styled(Button)`
  && {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: none;
    text-align: center;
    color: #00aac8;
    background: transparent;
    border: 3px solid #00aac8;
    border-radius: 25px;
    padding: 0.6rem 4rem;
    margin: 2rem auto 0;
    box-shadow: none;
  }
`;

const mapStateToProps = (state: IAppState) => ({
  country: state.country,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      setCountry: actions.setCountry,
    },
    dispatch,
  );

class Initiative extends React.PureComponent<
  ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> &
    WithTranslation,
  {}
> {
  getMarkdown(language: string) {
    switch (language) {
      case "de":
        return ContentDE;
      case "fr":
        return ContentFR;
      case "it":
        return ContentIT;
      case "es":
        return ContentES;
      default:
        return ContentEN;
    }
  }

  handleCountrySelect = (country: string | null) => {
    this.props.setCountry(country);
  };

  render = () => {
    return (
      <>
        <Box id="initiative" paddingBottom={4} marginTop={4}>
          <Grid container spacing={4}>
            <Hidden xsDown>
              <Grid item xs={12} sm={6}>
                <ContentImage src={IlluContent} />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={6}>
              <StyledMarkdownContent
                markdown={this.getMarkdown(this.props.i18n.language)}
                overrides={{
                  a: {
                    component: LinkButton,
                    props: {
                      variant: "contained",
                      disableFocusRipple: true,
                    },
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box id="partners" paddingBottom={4} marginTop={8}>
          <Typography variant="h2" color="primary">
            {this.props.t("partners.header")}
          </Typography>
          <Box id="region-filter" paddingBottom={2}>
            <Hidden smUp>
              <FormControl variant="outlined" fullWidth>
                <Select
                  native
                  value={this.props.country ? this.props.country : undefined}
                  onChange={(
                    event: React.ChangeEvent<{ name?: string; value: unknown }>,
                  ) =>
                    this.handleCountrySelect(
                      (event.target.value as string | null) === "all"
                        ? null
                        : (event.target.value as string | null),
                    )
                  }
                  inputProps={{
                    name: "country",
                    id: "filter-select",
                  }}
                >
                  <option value="all">{`${this.props.t(
                    "country.all",
                  )}`}</option>
                  <option value="de">{`${this.props.t("country.de")}`}</option>
                  <option value="at">{`${this.props.t("country.at")}`}</option>
                  <option value="it">{`${this.props.t("country.it")}`}</option>
                  <option value="es">{`${this.props.t("country.es")}`}</option>
                  <option value="fr">{`${this.props.t("country.fr")}`}</option>
                  <option value="uk">{`${this.props.t("country.uk")}`}</option>
                </Select>
              </FormControl>
            </Hidden>
            <Hidden xsDown>
              <CountrySelect
                variant="body2"
                onClick={() => this.handleCountrySelect(null)}
                className={this.props.country === null ? "selected" : ""}
              >
                {`${this.props.t("country.all")}`}
              </CountrySelect>
              <CountrySelect
                variant="body2"
                onClick={() => this.handleCountrySelect("de")}
                className={this.props.country === "de" ? "selected" : ""}
              >
                {`${this.props.t("country.de")}`}
              </CountrySelect>
              <CountrySelect
                variant="body2"
                onClick={() => this.handleCountrySelect("at")}
                className={this.props.country === "at" ? "selected" : ""}
              >
                {`${this.props.t("country.at")}`}
              </CountrySelect>
              <CountrySelect
                variant="body2"
                onClick={() => this.handleCountrySelect("it")}
                className={this.props.country === "it" ? "selected" : ""}
              >
                {`${this.props.t("country.it")}`}
              </CountrySelect>
              <CountrySelect
                variant="body2"
                onClick={() => this.handleCountrySelect("es")}
                className={this.props.country === "es" ? "selected" : ""}
              >
                {`${this.props.t("country.es")}`}
              </CountrySelect>
              <CountrySelect
                variant="body2"
                onClick={() => this.handleCountrySelect("fr")}
                className={this.props.country === "fr" ? "selected" : ""}
              >
                {`${this.props.t("country.fr")}`}
              </CountrySelect>
              <CountrySelect
                variant="body2"
                onClick={() => this.handleCountrySelect("uk")}
                className={this.props.country === "uk" ? "selected" : ""}
              >
                {`${this.props.t("country.uk")}`}
              </CountrySelect>
            </Hidden>
          </Box>

          <PartnerItems
            data={InitiativePartners}
            categorySlug="founders"
            country={this.props.country ? this.props.country : undefined}
            onlyCountryPartners={this.props.country === null}
          />
          <PartnerItems
            data={InitiativePartners}
            excludeCategorySlug="founders"
            country={this.props.country ? this.props.country : undefined}
            onlyCountryPartners={this.props.country !== null}
          />
        </Box>

        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("partners.claim")}
            cta={this.props.t("partners.cta")}
            href={this.props.t("partners.link")}
          />
        </Box>
      </>
    );
  };
}

const CountrySelect: AnyStyledComponent = styled(Typography)`
  && {
    display: inline-block;
    font-family: Montserrat;
    font-weight: 700;
    text-align: center;
    color: #93989b;
    width: 50%;
    padding: 0.5rem 0;
    cursor: pointer;
    border-bottom: 2px solid #0a6eaa;

    &:hover {
      color: #0a6eaa;
      font-weight: 700;
    }

    &.selected {
      font-weight: 700;
      color: #0a6eaa;
      border: 2px solid #0a6eaa;
      border-radius: 25px 0px 0px 0px;
    }

    @media (min-width: 600px) {
      width: auto;
      padding: 0.5rem 2rem;
    }
  }
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Initiative));
