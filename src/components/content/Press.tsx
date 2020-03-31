import React from "react";
import { Box, Typography, Avatar, Grid, Link } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { translated } from "../../util";
import PressContactPhoto from "../../images/solveigh_rathenow.png";
import Logo from "../../../images/logo.svg";
import BecomePart from "../common/BecomePart";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
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
        <Grid container spacing={5} justify="flex-start" alignItems="center">
          <Grid item xs={12} sm={6}>
            <StyledAvatar alt="Solveigh Ratenow" src={PressContactPhoto} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container direction="row" alignItems="center">
              <Typography variant="body1">
                {translated(this.props.lang).press.pressContactTitle}
              </Typography>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <Typography variant="h5">
                  {translated(this.props.lang).press.pressContactName}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StyledEmailIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {translated(this.props.lang).press.pressContactEmail}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StyledPhoneIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {translated(this.props.lang).press.pressContactPhone}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr></hr>
        <Typography variant="h2">Resources</Typography>
        <Typography variant="body1">
          Download the GesundZusammen logo in various formats.
        </Typography>
        <Link to="/" style={{ float: "left" }}>
          <DownloadLogo src={Logo} alt="#GesundZusammen"></DownloadLogo>
        </Link>
        <Typography variant="body1">
          Includes EPS, JPG, and PNG formats.
        </Typography>
        <Typography variant="body1">For digital and print.</Typography>
        <hr></hr>
        <Box paddingBottom={4} marginTop={4}>
          <BecomePart lang={this.props.lang}></BecomePart>
        </Box>
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

const StyledEmailIcon: AnyStyledComponent = styled(EmailIcon)`
  color: #0a6eaa;
  padding-right: 1rem;
`;
const StyledPhoneIcon: AnyStyledComponent = styled(PhoneIcon)`
  color: #0a6eaa;
  padding-right: 1rem;
`;

const DownloadLogo: AnyStyledComponent = styled.img`
  display: block;
  margin: 0 auto;
  background-color: #003269;
  border-radius: 4px;
  @media (min-width: 600px) {
    margin: 0;
    float: left;
  }
`;

export default PressContact;
