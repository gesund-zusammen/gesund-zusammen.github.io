import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import PartnerCard from "../common/PartnerCard";
import CTABox from "../common/CTABox";

import LogoOmio from "../../images/partners/omio.png";
import LogoBVDS from "../../images/partners/bvds.png";
import LogoData4Life from "../../images/partners/data4life.svg";
import LogoWefoxGroup from "../../images/partners/wefoxgroup.png";
import LogoN26 from "../../images/partners/n26.png";
import LogoFinleap from "../../images/partners/finleap.png";
import LogoGetYourGuide from "../../images/partners/getyourguide.png";
import LogoFreightHub from "../../images/partners/freighthub.png";
import LogoDeliveryHero from "../../images/partners/deliveryhero.png";
import LogoCelonis from "../../images/partners/celonis.png";
import LogoAdaHealth from "../../images/partners/adahealth.png";
import LogoViaHealth from "../../images/partners/viadata.svg";
import LogoPersonio from "../../images/partners/personio.png";
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
import LogoDoctorly from "../../images/partners/doctorly.png";
import LogoFischerAppelt from "../../images/partners/fischerappelt.jpg";
import LogoDeloitte from "../../images/partners/deloitte.jpg";
import LogoMyData from "../../images/partners/mydata.png";
import LogoFreiraum from "../../images/partners/freiraum.jpg";
import LogoStoryMachine from "../../images/partners/storymachine.png";
import LogoJoliBerlin from "../../images/partners/joliberlin.jpg";

class Partners extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <Box id="partners" paddingBottom={4} marginTop={4}>
        <Typography variant="h2">
          {this.props.t("partners.type.founders")}
        </Typography>
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
            />
            <PartnerCard
              name="Wefox Group"
              image={LogoWefoxGroup}
              link="https://www.wefoxgroup.com/"
            />
            <PartnerCard
              name="Via"
              image={LogoViaHealth}
              link="https://www.viadata.io/"
            />
            <PartnerCard
              name="Global Citizen Foundation"
              image={LogoGlobalCitizen}
              link="https://www.globalcitizenfoundation.org/"
            />
            <PartnerCard
              name="Data4Life"
              image={LogoData4Life}
              link="https://www.data4life.care/"
            />
            <PartnerCard
              name="BVDS"
              image={LogoBVDS}
              link="https://www.deutschestartups.org/"
            />
            <PartnerCard
              name="BCG DV"
              image={LogoBCGDV}
              link="https://www.bcgdv.com"
            />
            <PartnerCard
              name="N26"
              image={LogoN26}
              link="https://www.n26.de/"
            />
            <PartnerCard
              name="GetYourGuide"
              image={LogoGetYourGuide}
              link="https://www.getyourguide.com/"
            />
            <PartnerCard
              name="FreightHub"
              image={LogoFreightHub}
              link="https://www.freighthub.com/"
            />
            <PartnerCard
              name="DeliveryHero"
              image={LogoDeliveryHero}
              link="https://www.deliveryhero.com/"
            />
            <PartnerCard
              name="Omio"
              image={LogoOmio}
              link="https://www.omio.com"
            />
            <PartnerCard
              name="Celonis"
              image={LogoCelonis}
              link="https://www.celonis.com/"
            />
            <PartnerCard
              name="Ada Health"
              image={LogoAdaHealth}
              link="https://ada.com/"
            />
            <PartnerCard
              name="Personio"
              image={LogoPersonio}
              link="https://www.personio.de/"
            />
            <PartnerCard
              name="OneFootball"
              image={LogoOneFootball}
              link="https://onefootball.com/"
            />
            <PartnerCard
              name="Ioniq"
              image={LogoIoniq}
              link="https://ioniq.com/"
            />
            <PartnerCard
              name="Tier Mobility"
              image={LogoTier}
              link="https://ww.tier.app/"
            />
            <PartnerCard
              name="doctorly"
              image={LogoDoctorly}
              link="https://www.doctorly.de/"
            />
          </Grid>
        </Box>
        <Typography variant="h2">
          {this.props.t("partners.type.privacy")}
        </Typography>
        <Box paddingTop={4} paddingBottom={4}>
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
            />
            <PartnerCard
              name="Deloitte"
              image={LogoDeloitte}
              link="https://www2.deloitte.com/dl/de/services/legal.html"
            />
            <PartnerCard
              name="MyData"
              image={LogoMyData}
              link="https://mydata.org/"
            />
            <PartnerCard
              name="UserCentrics"
              image={LogoUserCentrics}
              link="https://usercentrics.com/"
            />
            <PartnerCard
              name="Bird & Bird"
              image={LogoTwoBirds}
              link="https://www.twobirds.com/"
              color="#7c7c6e"
              nameColorInverted={true}
            />
            <PartnerCard
              name="Reed Smith LLP"
              image={LogoReedSmith}
              link="https://www.reedsmith.com/"
              color="#3d3c3c"
              nameColorInverted={true}
            />
            <PartnerCard
              name="CMS"
              image={LogoCMSLaw}
              link="https://cms.law/"
            />
            <PartnerCard
              name="SKW Schwarz"
              image={LogoSKWSchwarz}
              color="black"
              nameColorInverted={true}
              link="https://www.skwschwarz.de/"
            />
          </Grid>
        </Box>
        <Typography variant="h2">
          {this.props.t("partners.type.agencies")}
        </Typography>
        <Box paddingTop={4} paddingBottom={4}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            <PartnerCard
              name="fischerAppelt"
              image={LogoFischerAppelt}
              link="https://www.fischerappelt.de/"
            />
            <PartnerCard
              name="Story Machine"
              image={LogoStoryMachine}
              link="https://www.storymachine.de/"
            />
            <PartnerCard
              name="JOLI BERLIN"
              image={LogoJoliBerlin}
              link="https://www.joliberlin.com/"
            />
          </Grid>
        </Box>
        <Typography variant="h2">
          {this.props.t("partners.type.further")}
        </Typography>
        <Box paddingTop={4} paddingBottom={4}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            <PartnerCard
              name="Freiraum"
              image={LogoFreiraum}
              link="http://www.freiraum-berlin.org/"
            />
          </Grid>
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("partners.claim")}
            cta={this.props.t("partners.cta")}
            href={this.props.t("partners.link")}
          />
        </Box>
      </Box>
    );
  };
}

export default withTranslation()(Partners);
