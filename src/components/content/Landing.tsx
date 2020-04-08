import React from "react";
import { Box, Grid } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import MuiMarkdown from "../common/MuiMarkdown";
import InfoBox from "../common/InfoBox";
import Partners from "./Partners";

import ContentDE from "../../data/landing/landing_de.md";
import ContentEN from "../../data/landing/landing_en.md";

class Landing extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <>
        <Box id="initiative" paddingBottom={4} marginTop={4}>
          <MuiMarkdown
            markdown={this.props.i18n.language === "de" ? ContentDE : ContentEN}
          ></MuiMarkdown>
          <Box marginTop={4}>
            <Grid container spacing={4}>
              <InfoBox
                title={this.props.t("boxes.initiative.title")}
                content={this.props.t("boxes.initiative.content")}
              />
              <InfoBox
                title={this.props.t("boxes.support.title")}
                content={this.props.t("boxes.support.content")}
              />
              <InfoBox
                title={this.props.t("boxes.ecosystem.title")}
                content={this.props.t("boxes.ecosystem.content")}
              />
            </Grid>
          </Box>
        </Box>

        <Partners />
      </>
    );
  };
}

export default withTranslation()(Landing);
