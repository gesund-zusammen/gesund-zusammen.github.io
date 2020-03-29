import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

interface IInfoBoxProps {
  title: string;
  content: string;
}

class InfoBox extends React.PureComponent<IInfoBoxProps, {}> {
  render = () => {
    return (
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <StyledCard elevation={0}>
          <StyledCardContent>
            <Typography variant="h3">{this.props.title}</Typography>
            <Typography variant="body2">{this.props.content}</Typography>
          </StyledCardContent>
        </StyledCard>
      </Grid>
    );
  };
}

const StyledCard: AnyStyledComponent = styled(Card)`
  && {
    border-radius: 15px;
    background-color: #0a6eaa;
    color: #ffffff;
    height: 100%;
  }
`;

const StyledCardContent: AnyStyledComponent = styled(CardContent)`
  && {
    padding: 35px;

    &:last-child {
      padding-bottom: 35px;
    }
  }
`;

export default InfoBox;
