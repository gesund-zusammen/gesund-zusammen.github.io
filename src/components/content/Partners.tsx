import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import PartnerCard from "../common/PartnerCard";
import BecomePart from "../common/BecomePart";

import LogoOmio from "../../images/partners/omio.png";
import LogoBVDS from "../../images/partners/bvds.png";
import LogoWefox from "../../images/partners/wefox.png";
import LogoN26 from "../../images/partners/n26.png";
import LogoFinleap from "../../images/partners/finleap.png";
import LogoGetYourGuide from "../../images/partners/getyourguide.png";
import LogoFreightHub from "../../images/partners/freighthub.png";
import LogoDeliveryHero from "../../images/partners/deliveryhero.png";
import LogoCelonis from "../../images/partners/celonis.png";
import LogoAuto1 from "../../images/partners/auto1.png";
import LogoAdaHealth from "../../images/partners/adahealth.png";
import LogoViaHealth from "../../images/partners/viadata.svg";
import LogoPersonio from "../../images/partners/personio.png";
import LogoMrSpex from "../../images/partners/mrspex.png";
import LogoDatenschutzExperte from "../../images/partners/datenschutzexperte.svg";
import LogoOneFootball from "../../images/partners/onefootball.svg";
import LogoIoniq from "../../images/partners/ioniq.png";
import LogoUserCentrics from "../../images/partners/usercentrics.svg";

interface IPartnersProps {
  lang: "de" | "en";
}

class Partners extends React.PureComponent<IPartnersProps, {}> {
  render = () => {
    return (
      <Box id="partners" paddingBottom={4} marginTop={4}>
        <StyledContent variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
          pretium a diam vestibulum urna eget neque posuere nisl. Elementum
          sodales risus egestas nisl donec urna pharetra. Tellus imperdiet duis
          pellentesque pellentesque amet tortor. Velit consectetur turpis
          mauris, vel sodales massa elit, diam, mauris.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. At etiam interdum in mollis
          malesuada nibh posuere leo. In est elit ultricies blandit aliquam
          nulla id amet quam. Non mollis sed malesuada dolor sagittis volutpat.
          Rhoncus erat ullamcorper viverra nunc, lectus mollis tristique.
        </StyledContent>

        <Box paddingTop={4}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            <PartnerCard
              name="finleap"
              image={LogoFinleap}
              link="https://www.finleap.com"
            ></PartnerCard>
            <PartnerCard
              name="Wefox"
              image={LogoWefox}
              link="https://www.wefox.de/"
            ></PartnerCard>
            <PartnerCard
              name="Via Data"
              image={LogoViaHealth}
              link="https://www.viadata.io/"
            ></PartnerCard>
            <PartnerCard
              name="BVDS"
              image={LogoBVDS}
              link="https://www.deutschestartups.org/"
            ></PartnerCard>
            <PartnerCard
              name="Omio"
              image={LogoOmio}
              link="https://www.omio.com"
            ></PartnerCard>
            <PartnerCard
              name="N26"
              image={LogoN26}
              link="https://www.n26.de/"
            ></PartnerCard>
            <PartnerCard
              name="GetYourGuide"
              image={LogoGetYourGuide}
              link="https://www.getyourguide.com/"
            ></PartnerCard>
            <PartnerCard
              name="FreightHub"
              image={LogoFreightHub}
              link="https://www.freighthub.com/"
            ></PartnerCard>
            <PartnerCard
              name="DeliveryHero"
              image={LogoDeliveryHero}
              link="https://www.deliveryhero.com/"
            ></PartnerCard>
            <PartnerCard
              name="Celonis"
              image={LogoCelonis}
              link="https://www.celonis.com/"
            ></PartnerCard>
            <PartnerCard
              name="Auto1 Group"
              image={LogoAuto1}
              link="https://www.auto1.com/"
            ></PartnerCard>
            <PartnerCard
              name="Ada Health"
              image={LogoAdaHealth}
              link="https://ada.com/"
            ></PartnerCard>
            <PartnerCard
              name="Personio"
              image={LogoPersonio}
              link="https://www.personio.de/"
            ></PartnerCard>
            <PartnerCard
              name="MrSpex"
              image={LogoMrSpex}
              link="https://www.misterspex.de/"
            ></PartnerCard>
            <PartnerCard
              name="OneFootbal"
              image={LogoOneFootball}
              link="https://onefootball.com/"
            ></PartnerCard>
            <PartnerCard
              name="Ioniq"
              image={LogoIoniq}
              link="https://ioniq.com/"
            ></PartnerCard>
            <PartnerCard
              name="Datenschutzexperte"
              image={LogoDatenschutzExperte}
              link="https://www.datenschutzexperte.de/"
            ></PartnerCard>
            <PartnerCard
              name="UserCentrics"
              image={LogoUserCentrics}
              link="https://usercentrics.com/"
            ></PartnerCard>
          </Grid>
        </Box>
        <Box marginTop={4}>
          <BecomePart lang={this.props.lang}></BecomePart>
        </Box>
      </Box>
    );
  };
}

const StyledContent: AnyStyledComponent = styled(Typography)`
  @media (min-width: 600px) {
    column-count: 2;
    column-gap: 1.6rem;
  }
`;

export default Partners;
