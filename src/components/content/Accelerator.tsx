import React from "react";
import { Box, Grid } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import MuiMarkdown from "../common/MuiMarkdown";
import InfoBox from "../common/InfoBox";
import Partners from "./Partners";

import ContentDE from "../../data/accelerator/accelerator_de.md";
import ContentEN from "../../data/accelerator/accelerator_en.md";
import ContentFR from "../../data/accelerator/accelerator_fr.md";
import ContentIT from "../../data/accelerator/accelerator_it.md";
import ContentES from "../../data/accelerator/accelerator_es.md";

class Accelerator extends React.PureComponent<WithTranslation, {}> {
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
        <Box id="accelerator" paddingBottom={4} marginTop={4}>
          <MuiMarkdown
            markdown={this.getMarkdown(this.props.i18n.language)}
          ></MuiMarkdown>
          <Box marginTop={4}>
            <Grid container spacing={4}>
              <InfoBox
                title={this.props.t("accelerator.box1.title")}
                content={this.props.t("accelerator.box1.content")}
              />
              <InfoBox
                title={this.props.t("accelerator.box2.title")}
                content={this.props.t("accelerator.box2.content")}
              />
              <InfoBox
                title={this.props.t("accelerator.box3.title")}
                content={this.props.t("accelerator.box3.content")}
              />
            </Grid>
          </Box>
        </Box>

        <Partners />
      </>
    );
  };
}

export default withTranslation()(Accelerator);
