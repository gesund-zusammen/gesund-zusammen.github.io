import React from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import styled, { AnyStyledComponent } from "styled-components";

import CTABox from "../common/CTABox";
import Projects from "../common/Projects";

import LogoFinleap from "../../images/partners/finleap.png";
import LogoWeFox from "../../images/partners/wefoxgroup.png";
import LogoTOA from "../../images/partners/toa.png";

class Program extends React.Component<WithTranslation, {}> {
  render = () => {
    return (
      <>
        <Box paddingBottom={8} marginTop={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3" style={{ hyphens: "none" }}>
                Das #Gesundzusammen Accelerator Programm
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ContentBorderBox>
                <Typography variant="body1">
                  Der #Gesundzusammen Accelerator wird organisiert von
                </Typography>
                <PartnerImageBox>
                  <Grid container spacing={4}>
                    <Grid item xs={6} sm={4}>
                      <PartnerImage src={LogoFinleap} />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <PartnerImage src={LogoWeFox} />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <PartnerImage src={LogoTOA} />
                    </Grid>
                  </Grid>
                </PartnerImageBox>
                <Typography variant="body1">
                  mit Unterstützung vieler Technologie-Unternehmen (i.e. N26,
                  DeliveryHero, Celonis, Ada Health) sowie dem Bundesverband
                  Deutscher Startups.
                </Typography>
              </ContentBorderBox>
            </Grid>
          </Grid>
        </Box>

        <Box paddingBottom={8} marginTop={8}>
          <Typography variant="h3">The program offers</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <OfferingBox>
                <Typography variant="h5">
                  €20,000 of equity-free capital
                </Typography>
                <Typography variant="body2">No strings attached.</Typography>
              </OfferingBox>
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <OfferingBox>
                <Typography variant="h5">
                  €20,000 of equity-free capital
                </Typography>
                <Typography variant="body2">No strings attached.</Typography>
              </OfferingBox>
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <OfferingBox>
                <Typography variant="h5">
                  €20,000 of equity-free capital
                </Typography>
                <Typography variant="body2">No strings attached.</Typography>
              </OfferingBox>
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <OfferingBox>
                <Typography variant="h5">
                  €20,000 of equity-free capital
                </Typography>
                <Typography variant="body2">No strings attached.</Typography>
              </OfferingBox>
            </Grid>
          </Grid>
        </Box>

        <Box paddingBottom={8} marginTop={8}>
          <CTABox
            claim={this.props.t("program.claim")}
            cta={this.props.t("program.cta")}
            href={this.props.t("program.link")}
          />
        </Box>

        <Box paddingBottom={8} marginTop={8}>
          <CenterTextBox>
            <Typography variant="body1" style={{ fontWeight: 700 }}>
              The open call is aimed at teams of all sizes, stages* and
              backgrounds (startup, researchers, inventors, tinkerers).
              <Typography
                variant="body1"
                color="secondary"
                style={{ fontWeight: 700 }}
              >
                Call is open until April 17th, 2020.
              </Typography>
            </Typography>
            <Typography variant="body2">
              *No legal entity? No worries, we’ll help you set one up.
            </Typography>
          </CenterTextBox>
        </Box>

        <Box paddingBottom={8} marginTop={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3">
                Batch #1 of the program will:
              </Typography>
              <Typography variant="body2">
                The program for Batch #1 will end with a virtual demo day on{" "}
                <Typography variant="body2" color="secondary">
                  June 1st, 2020
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ContentBorderBox>
                <Typography variant="body2">
                  Finance a minimum of 5 innovative solutions, possibly
                  expanding the scope to 10
                </Typography>
                <br />
                <br />
                <Typography variant="body2">
                  Review all applications by an acclaimed jury on a rolling
                  basis
                </Typography>
                <br />
                <br />
                <Typography variant="body2">
                  Constantly expand the network of partners involved
                </Typography>
              </ContentBorderBox>
            </Grid>
          </Grid>
        </Box>

        <Projects />
      </>
    );
  };
}

const ContentBorderBox: AnyStyledComponent = styled.div`
  @media (min-width: 600px) {
    border-left: 1px solid #ced7db;
    padding-left: 2rem;
  }
`;

const PartnerImageBox: AnyStyledComponent = styled.div`
  padding: 1rem 0;
`;

const PartnerImage: AnyStyledComponent = styled.img`
  width: 100%;
  height: auto;
`;

const OfferingBox: AnyStyledComponent = styled(Paper)`
  && {
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0px 2px 24px #e3e6eb;
  }
`;

const CenterTextBox: AnyStyledComponent = styled.div`
  text-align: center;
`;

export default withTranslation()(Program);
