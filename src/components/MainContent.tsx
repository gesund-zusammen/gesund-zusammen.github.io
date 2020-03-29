import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../util";

import InfoBox from "./InfoBox";

interface IMainContentProps {
  lang: "de" | "en";
}

class MainContent extends React.PureComponent<IMainContentProps, {}> {
  render = () => {
    return (
      <>
        <Typography variant="h2">
          {translated(this.props.lang).main.title}
        </Typography>
        <StyledMainContent variant="body1">
          {translated(this.props.lang).main.content}
        </StyledMainContent>
        <Box marginTop={6}>
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
      </>
    );
  };
}

const StyledMainContent: AnyStyledComponent = styled(Typography)`
  column-count: 2;
  column-gap: 1.7rem;
`;

export default MainContent;
