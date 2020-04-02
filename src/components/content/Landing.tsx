import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import InfoBox from "../common/InfoBox";
import Partners from "./Partners";

class Landing extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <>
        <Box id="initiative" paddingBottom={4} marginTop={4}>
          <Typography variant="h2">{this.props.t("main.title")}</Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: this.props.t("main.content"),
            }}
          />
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
