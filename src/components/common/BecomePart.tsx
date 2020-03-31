import React from "react";
import { Button, Paper, Typography, Grid } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../../util";

interface IBecomePartProps {
  lang: "de" | "en";
}

class BecomePart extends React.PureComponent<IBecomePartProps, {}> {
  render = () => {
    return (
      <StyledPaper elevation={2}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12} sm={7}>
            <StyledClaim variant="h4" color="primary">
              {translated(this.props.lang).partners.claim}
            </StyledClaim>
          </Grid>
          <Grid item xs={12} sm={5}>
            <PartnerButton
              color="primary"
              variant="contained"
              disableFocusRipple={true}
              href="mailto:partners@gesund-zusammen.de"
            >
              {translated(this.props.lang).partners.button}
            </PartnerButton>
          </Grid>
        </Grid>
      </StyledPaper>
    );
  };
}

const StyledPaper: AnyStyledComponent = styled(Paper)`
  && {
    padding: 2rem;
  }
`;

const StyledClaim: AnyStyledComponent = styled(Typography)`
  && {
    margin: 0;
    text-align: center;

    @media (min-width: 600px) {
      text-align: left;
    }
  }
`;

const PartnerButton: AnyStyledComponent = styled(Button)`
  && {
    display: block;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: none;
    text-align: center;
    border-radius: 4px;
    padding: 1rem;
    margin: 2rem auto 0 auto;

    @media (min-width: 600px) {
      margin: 0;
      font-size: 1.4rem;
    }
  }
`;

export default BecomePart;
