import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import PartnerData from "../../data/partners.json";
import Fade from "react-reveal";
import Card from "./ImageCard";

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

interface IPartnerItemsProps extends WithTranslation {
  categorySlug?: string;
}

class PartnerItems extends React.Component<IPartnerItemsProps, {}> {
  partnerData: { categories: ICategory[]; partners: IPartner[] } = PartnerData;

  getCategories = (categorySlug?: string): ICategory[] => {
    let categories = this.partnerData.categories;
    if (categorySlug) {
      categories = categories.filter(
        category => category.slug === categorySlug,
      );
    }
    return categories;
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
          {this.getCategories(this.props.categorySlug).map(
            (category, index) => {
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
                            <Card
                              key={partnerCardKey}
                              name={partner.name}
                              image={
                                require(`../../images/partners/${partner.image}`)
                                  .default
                              }
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
            },
          )}
          ;
        </Fade>
      </Box>
    );
  };
}

export default withTranslation()(PartnerItems);
