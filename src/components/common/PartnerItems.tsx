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
  partnerData: { categories: ICategory[]; partners: IPartner[] } = PartnerData;

  constructor(props: WithTranslation) {
    super(props);
    this.partnerData.partners = this.partnerData.partners.map(partner => {
      return {
        ...partner,
        image: require(`../../images/partners/${partner.image}`).default,
      };
    });
    console.warn(this.partnerData);
  }

  getCategories = (): ICategory[] => {
    return this.partnerData.categories;
  };

  getCategoryName = (slug: string): string => {
    for (let i = 0; i < this.partnerData.categories.length; i++) {
      if (this.partnerData.categories[i].slug === slug) {
        return this.partnerData.categories[i].name[this.props.i18n.language];
      }
    }

    return this.props.t("partners.unknownCategory");
  };

  getPartners = (categorySlug?: string): IPartner[] => {
    let partners = this.partnerData.partners;
    if (categorySlug) {
      partners = partners.filter(partner => partner.slug === categorySlug);
    }
    return partners;
  };

  render = () => {
    return (
      <Box id="partners" paddingBottom={4} marginTop={4}>
        <Fade right cascade>
          {this.getCategories().map((category, index) => {
            const categoryKey: string = "category-" + index;
            return (
              <div key={categoryKey}>
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
                    {this.getPartners(category.slug).map(
                      (partner, partnerIndex) => {
                        const partnerCardKey: string =
                          "category-" + index + "-partner-" + partnerIndex;
                        return (
                          <PartnerCard
                            key={partnerCardKey}
                            name={partner.name}
                            image={partner.image}
                            link={partner.link}
                            color={partner.color}
                            imageXL={partner.imageXL}
                            nameColorInverted={partner.nameColorInverted}
                          />
                        );
                      },
                    )}
                  </Grid>
                </Box>
              </div>
            );
          })}
          ;
        </Fade>
      </Box>
    );
  };
}

export default withTranslation()(PartnerItems);
