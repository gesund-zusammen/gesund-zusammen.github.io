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
        <StyledCard>
          <StyledCardContent>
            <StyledTitle variant="h4">{this.props.title}</StyledTitle>
            <Typography variant="body2" style={{ textAlign: "justify" }}>
              {this.props.content}
            </Typography>
          </StyledCardContent>
        </StyledCard>
      </Grid>
    );
  };
}

const StyledTitle: AnyStyledComponent = styled(Typography)`
  && {
    margin-bottom: 0.4rem;
  }
`;

const StyledCard: AnyStyledComponent = styled(Card)`
  && {
    border-radius: 15px;
    background-color: #0a6eaa;
    color: #ffffff;
    height: 100%;
    box-shadow: 0px 2px 24px #e3e6eb;
  }
`;

const StyledCardContent: AnyStyledComponent = styled(CardContent)`
  && {
    padding: 1.5rem 2rem 2rem 1.5rem;

    &:last-child {
      padding-bottom: 2rem;
    }
  }
`;

export default InfoBox;
