import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import Fade from "react-reveal";

import ImageCard from "./ImageCard";

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
  link?: string;
  image: string;
  imageXL?: boolean;
  color?: string;
  nameColorInverted?: boolean;
  countries?: string[];
}

interface IPartnerData {
  categories: ICategory[];
  partners: IPartner[];
}

interface IPartnerItemsProps extends WithTranslation {
  data: IPartnerData;
  categorySlug?: string;
}

class PartnerItems extends React.Component<IPartnerItemsProps, {}> {
  getCategories = (categorySlug?: string): ICategory[] => {
    let categories = this.props.data.categories;
    if (categorySlug) {
      categories = categories.filter(
        category => category.slug === categorySlug,
      );
    }
    return categories;
  };

  getPartners = (categorySlug?: string): IPartner[] => {
    let partners = this.props.data.partners;
    if (categorySlug) {
      partners = partners.filter(partner => partner.slug === categorySlug);
    }
    partners = partners.filter(
      partner =>
        !partner.countries ||
        partner.countries.includes(this.props.i18n.language),
    );
    return partners;
  };

  render = () => {
    return (
      <Box id="partners" paddingBottom={4} marginTop={4}>
        {this.getCategories(this.props.categorySlug).map((category, index) => {
          const categoryKey: string = "category-" + index;
          return (
            <Fade key={categoryKey} right cascade>
              <div id={`wrapper-${categoryKey}`}>
                {!!this.getPartners(category.slug).length && (
                  <Typography variant="h2">
                    {category.name[this.props.i18n.language]}
                  </Typography>
                )}
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
                          <ImageCard
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
            </Fade>
          );
        })}
      </Box>
    );
  };
}

export default withTranslation()(PartnerItems);
