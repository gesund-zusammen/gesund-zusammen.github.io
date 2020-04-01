import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../../util";

import InfoBox from "../common/InfoBox";
import Partners from "./Partners";

interface ILandingProps {
  lang: "de" | "en";
}

class Landing extends React.PureComponent<ILandingProps, {}> {
  render = () => {
    return (
      <>
        <Box id="initiative" paddingBottom={4} marginTop={4}>
          <Typography variant="h2">
            {translated(this.props.lang).main.title}
          </Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: translated(this.props.lang).main.content,
            }}
          ></Typography>
          <Box marginTop={4}>
            <Grid container spacing={4}>
              <InfoBox
                title={translated(this.props.lang).boxes.initiative.title}
                content={translated(this.props.lang).boxes.initiative.content}
              ></InfoBox>
              <InfoBox
                title={translated(this.props.lang).boxes.support.title}
                content={translated(this.props.lang).boxes.support.content}
              ></InfoBox>
              <InfoBox
                title={translated(this.props.lang).boxes.ecosystem.title}
                content={translated(this.props.lang).boxes.ecosystem.content}
              ></InfoBox>
            </Grid>
          </Box>
        </Box>

        <Partners lang={this.props.lang}></Partners>
      </>
    );
  };
}

export default Landing;
