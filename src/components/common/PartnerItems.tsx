import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import PartnerData from "../../data/partners.json";
import Fade from "react-reveal";
import PartnerCard from "./PartnerCard";
import LogoFinleap from "../../images/partners/finleap.png";

interface ICategory {
  slug: string;
  name: {
    en: string;
    de: string;
  };
}

interface IPartner {
  name: string;
  slug: string;
  link: string;
  image: string;
  imageXL?: boolean;
  color?: string;
  nameColorInverted?: boolean;
}

class PartnerItems extends React.Component<WithTranslation, {}> {
  getCategories = (): ICategory[] => {
    return PartnerData.categories;
  };

  getCategoryName = (slug: string): string => {
    for (let i = 0; i < PartnerData.categories.length; i++) {
      if (PartnerData.categories[i].slug === slug) {
        return PartnerData.categories[i].name[this.props.i18n.language];
      }
    }

    return this.props.t("partners.unknownCategory");
  };

  getPartners = (categorySlug?: string): IPartner[] => {
    let partners = PartnerData.partners;
    if (categorySlug) {
      partners = partners.filter(partner => partner.slug === categorySlug);
    }
    return partners;
  };

  render = () => {
    return (
      <Box id="partners" paddingBottom={4} marginTop={4}>
        <Fade right cascade>
          {this.getCategories().map(category => {
            return (
              <>
                <Typography variant="h2">
                  {category.name[this.props.i18n.language]}
                </Typography>
                <Box paddingTop={4} paddingBottom={4}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}
                  >
                    {this.getPartners(category.slug).map(partner => {
                      return (
                        <PartnerCard
                          name={partner.name}
                          image={LogoFinleap}
                          link={partner.link}
                        />
                      );
                    })}
                  </Grid>
                </Box>
              </>
            );
          })}
          ;
        </Fade>
      </Box>
    );
  };
}

export default withTranslation()(PartnerItems);
