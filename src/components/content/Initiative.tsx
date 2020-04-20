import React from "react";
import { Box, Button, Grid } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import styled, { AnyStyledComponent } from "styled-components";

import MuiMarkdown from "../common/MuiMarkdown";
import CTABox from "../common/CTABox";
import PartnerItems from "../common/PartnerItems";

import ContentDE from "../../data/initiative/initiative_de.md";
import ContentEN from "../../data/initiative/initiative_en.md";
import ContentFR from "../../data/initiative/initiative_fr.md";
import ContentIT from "../../data/initiative/initiative_it.md";
import ContentES from "../../data/initiative/initiative_es.md";

interface IInitiativeState {
  letterRevealed: boolean;
}

const DEFAULT_STATE: IInitiativeState = {
  letterRevealed: false,
};

const ContentGridItem: AnyStyledComponent = styled(Grid)`
  && {
    @media (min-width: 600px) {
      &:last-of-type {
        border-left: 1px solid #ced7db;
      }
    }
  }
`;

class Initiative extends React.PureComponent<
  WithTranslation,
  IInitiativeState
> {
  constructor(props: WithTranslation) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  handleRevealContent = () => {
    this.setState({ letterRevealed: true });
  };

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
            }}
          />
        </Box>

        <Box paddingBottom={4} marginTop={4}>
          <LinkButton
            color="primary"
            variant="contained"
            disableFocusRipple={true}
            href={`/${this.props.i18n.language}/database`}
          >
            {this.props.t("initiative.gotoDatabase")}
          </LinkButton>
        </Box>

        <Box id="partners" paddingBottom={4} marginTop={4}>
          <PartnerItems />
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

const LinkButton: AnyStyledComponent = styled(Button)`
  && {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    border-radius: 4px;
    padding: 1rem 2rem;
    margin: 0 auto 2rem auto;
  }
`;

const RevealButton: AnyStyledComponent = styled(Button)`
  && {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    border-radius: 4px;
    padding: 1rem 2rem;
    margin: 2rem auto 0 auto;
  }
`;

export default withTranslation()(Initiative);
