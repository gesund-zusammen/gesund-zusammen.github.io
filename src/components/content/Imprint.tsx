import React from "react";
import { Box, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

class PrivacyPolicy extends React.PureComponent {
  render = () => {
    return (
      <PrivacyWrapper paddingBottom={4}>
        <Typography variant="h2">Address</Typography>
        <Typography variant="body1">
          Gesund Zusammen gGmbH i.G.
          <br />
          Urbanstr. 71
          <br />
          10967 Berlin, Germany
        </Typography>
        <Typography variant="h2">Contact</Typography>
        <Typography variant="body1">
          Tel .: +49 (0) 30 609865290
          <br />
          Email: media@gesund-zusammen.de
        </Typography>
        <Typography variant="h2">Managing Directors</Typography>
        <Typography variant="body1">
          Ramin Niroumand <br />
          Julian Bernhard Edward Teicke
          <br />
        </Typography>
        <Typography variant="h2">Commercial Register</Typography>
        <Typography variant="body1">
          Amtsgericht Charlottenburg
          <br />
          HRB [Aktualisierung nach erfolgreicher Eintragung] B <br />
          VAT ID: [Aktualisierung nach erfolgreicher Eintragung]
          <br />
        </Typography>
        <Typography variant="h2">
          The following information is legally required according to German law
        </Typography>
        <Typography variant="body1">
          Responsible for content according to § 55 RStV Abs. 2: Ramin
          Niroumand, see address above. Note on external links: In a judgment
          dated 12 May 1998, “Liability for Links” (312 O 85/98) the regional
          court (LG) of Hamburg decided that the owner of a website is
          responsible for the contents on linked pages of external websites.
          This can only be prevented by explicitly distancing oneself from these
          contents. We hereby disclaim responsibility for the contents of all
          linked pages on our website and declare that we do not adopt this
          content as its own.
        </Typography>
        <Typography variant="h2">Disclaimer</Typography>
        <Typography variant="body1">
          The information provided on this website has been carefully checked
          and is updated regularly. However, no guarantee can be given that all
          information is always complete, correct and / or up to date. This
          applies especially to all links to other websites, which are directly
          or indirectly. We reserve all information to supplement without prior
          notice, to remove and / or modify.
        </Typography>
        <Typography variant="h2">Copyright</Typography>
        <Typography variant="body1">
          All product names mentioned on this website, product names, brand
          names and logos are trademarks and / or property of their respective
          owners. All text and graphics on this site: &copy; Gesund Zusammen gGmbH i.G. or the
          copyright holders.
        </Typography>
      </PrivacyWrapper>
    );
  };
}

const PrivacyWrapper: AnyStyledComponent = styled(Box)`
  && {
    @media (min-width: 600px) {
      padding-right: 16rem;
    }
  }
`;

export default PrivacyPolicy;
