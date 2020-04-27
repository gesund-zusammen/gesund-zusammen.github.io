import React from "react";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { Box, Button, Grid } from "@material-ui/core";
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

import { IAppState } from "../../reducer";
import actions from "../../actions";

const ContentGridItem: AnyStyledComponent = styled(Grid)`
  && {
    @media (min-width: 600px) {
      &:last-of-type {
        border-left: 1px solid #ced7db;
      }
    }
  }
`;

const LinkButton: AnyStyledComponent = styled(Button)`
  && {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    border-radius: 4px;
    padding: 0.6rem 2rem;
    margin: 4rem auto 0;
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

  render = () => {
    return (
      <>
        <Box id="initiative" paddingBottom={4} marginTop={4}>
          <MuiMarkdown
            markdown={this.getMarkdown(this.props.i18n.language)}
            overrides={{
              ul: {
                component: Grid,
                props: {
                  container: true,
                  spacing: 8,
                },
              },
              li: {
                component: ContentGridItem,
                props: {
                  item: true,
                  xs: 12,
                  sm: 6,
                },
              },
              a: {
                component: LinkButton,
                props: {
                  color: "primary",
                  variant: "contained",
                  disableFocusRipple: true,
                },
              },
            }}
          />
        </Box>

        <Box id="partners" paddingBottom={4} marginTop={8}>
          <PartnerItems
            data={InitiativePartners}
            country={this.props.country ? this.props.country : undefined}
            onlyCountryPartners={this.props.country === "it"}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Initiative));
