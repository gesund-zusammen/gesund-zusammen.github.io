import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
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

import OpenLetter from "../../data/initiative/open_letter.md";

interface IInitiativeState {
  letterRevealed: boolean;
}

const DEFAULT_STATE: IInitiativeState = {
  letterRevealed: false,
};

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
          ></MuiMarkdown>
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

        <Box id="open-letter" paddingBottom={4} marginTop={4}>
          <Typography variant="h3">Open Letter</Typography>
          <ContentRevealBox className={this.state.letterRevealed && "revealed"}>
            <MuiMarkdown markdown={OpenLetter} />
          </ContentRevealBox>
          {!this.state.letterRevealed && (
            <RevealButton
              color="primary"
              variant="contained"
              disableFocusRipple={true}
              onClick={this.handleRevealContent}
            >
              {this.props.t("initiative.letter.show")}
            </RevealButton>
          )}
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

const ContentRevealBox: AnyStyledComponent = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  max-height: 400px;

  &.revealed {
    max-height: 9999px;

    &:after {
      display: none;
    }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+0,1+90 */
    background: -moz-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 90%,
      rgba(255, 255, 255, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 90%,
      rgba(255, 255, 255, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 90%,
      rgba(255, 255, 255, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
