import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import PartnerCard from "../common/PartnerCard";
import BecomePart from "../common/BecomePart";

import LogoOmio from "../../images/partners/omio.png";
import LogoBVDS from "../../images/partners/bvds.png";
import LogoWefoxGroup from "../../images/partners/wefoxgroup.png";
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
import LogoTier from "../../images/partners/tier.svg";
import LogoTwoBirds from "../../images/partners/twobirds.png";
import LogoReedSmith from "../../images/partners/reedsmith.svg";
import LogoGlobalCitizen from "../../images/partners/globalcitizen.svg";
import LogoCMSLaw from "../../images/partners/cmslaw.svg";
import LogoSKWSchwarz from "../../images/partners/skwschwarz.jpg";
import LogoBCGDV from "../../images/partners/bcgdv.svg";

interface IPartnersProps {
  lang: "de" | "en";
}

class Partners extends React.PureComponent<IPartnersProps, {}> {
  render = () => {
    return (
      <Box id="partners" paddingBottom={4} marginTop={4}>
        <Typography variant="h2">Founding & Tech Partner</Typography>
        <Box paddingTop={4} paddingBottom={4}>
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
              name="Wefox Group"
              image={LogoWefoxGroup}
              link="https://www.wefoxgroup.com/"
            ></PartnerCard>
            <PartnerCard
              name="Via"
              image={LogoViaHealth}
              link="https://www.viadata.io/"
            ></PartnerCard>
            <PartnerCard
              name="Global Citizen Foundation"
              image={LogoGlobalCitizen}
              link="https://www.globalcitizen.org/"
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
              name="BCG DV"
              image={LogoBCGDV}
              link="https://www.bcgdv.com"
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
              name="Mister Spex"
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
              name="Tier Mobility"
              image={LogoTier}
              link="https://ww.tier.app/"
            ></PartnerCard>
          </Grid>
        </Box>
        <Typography variant="h2">Privacy Partner</Typography>
        <Box paddingTop={4}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
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
            <PartnerCard
              name="Bird & Bird"
              image={LogoTwoBirds}
              link="https://www.twobirds.com/"
              color="#7c7c6e"
              nameColorInverted={true}
            ></PartnerCard>
            <PartnerCard
              name="Reed Smith LLP"
              image={LogoReedSmith}
              link="https://www.reedsmith.com/"
              color="#3d3c3c"
              nameColorInverted={true}
            ></PartnerCard>
            <PartnerCard
              name="CMS"
              image={LogoCMSLaw}
              link="https://cms.law/"
            ></PartnerCard>
            <PartnerCard
              name="SKW Schwarz"
              image={LogoSKWSchwarz}
              color="black"
              nameColorInverted={true}
              link="https://www.skwschwarz.de/"
            ></PartnerCard>
          </Grid>
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <BecomePart lang={this.props.lang}></BecomePart>
        </Box>
      </Box>
    );
  };
}

export default Partners;
