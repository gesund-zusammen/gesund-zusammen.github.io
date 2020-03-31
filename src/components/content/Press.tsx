import React from "react";
import { Box, Typography, Avatar, Grid } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { translated } from "../../util";
import PressContactPhoto from "../../images/solveigh_rathenow.png";

interface IPressProps {
  lang: "de" | "en";
}
class PressContact extends React.PureComponent<IPressProps, {}> {
  render = () => {
    return (
      <PressContactWrapper>
        <Typography variant="h2">
          {translated(this.props.lang).press.pageHeader}
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <StyledAvatar alt="Solveigh Ratenow" src={PressContactPhoto} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              Head of Venture Comnunications
            </Typography>
            <Typography variant="h5">
              {translated(this.props.lang).press.pressContactName}
            </Typography>
          </Grid>
        </Grid>
      </PressContactWrapper>
    );
  };
}

const PressContactWrapper: AnyStyledComponent = styled(Box)`
  && {
    @media (min-width: 595px) {
      padding-right: 16rem;
    }
  }
  text-align: left;
`;

const StyledAvatar: AnyStyledComponent = styled(Avatar)`
  border: 8px solid rgba(0, 170, 200, 0.3);
`;
export default PressContact;
