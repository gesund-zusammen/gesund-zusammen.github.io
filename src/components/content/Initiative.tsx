import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../../util";

import InfoBox from "../common/InfoBox";

interface IInitiativeProps {
  lang: "de" | "en";
}

class Initiative extends React.Component<IInitiativeProps, {}> {
  render = () => {
    return (
      <Box id="initiative" paddingBottom={4} marginTop={4}>
        <Typography variant="h2">
          {translated(this.props.lang).main.title}
        </Typography>
        <StyledContent variant="body1">
          <div
            dangerouslySetInnerHTML={{
              __html: translated(this.props.lang).main.content,
            }}
          />
        </StyledContent>
        <Box marginTop={2}>
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
    );
  };
}

const StyledContent: AnyStyledComponent = styled(Typography)`
  @media (min-width: 600px) {
    column-count: 1;
    column-gap: 1.6rem;
  }
`;

export default Initiative;
