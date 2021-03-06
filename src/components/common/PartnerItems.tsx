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
  excludeCategorySlug?: string;
  country?: string;
  onlyCountryPartners?: boolean;
}

class PartnerItems extends React.PureComponent<IPartnerItemsProps, {}> {
  getCategories = (): ICategory[] => {
    return this.props.data.categories
      .filter(category =>
        this.props.excludeCategorySlug
          ? category.slug !== this.props.excludeCategorySlug
          : true,
      )
      .filter(category =>
        this.props.categorySlug
          ? category.slug === this.props.categorySlug
          : true,
      );
  };

  getPartners = (categorySlug?: string): IPartner[] => {
    return this.props.data.partners
      .filter(partner => (categorySlug ? partner.slug === categorySlug : true))
      .filter(partner => {
        if (this.props.country) {
          if (this.props.onlyCountryPartners) {
            return (
              partner.countries &&
              partner.countries.includes(this.props.country)
            );
          }
          return (
            !partner.countries || partner.countries.includes(this.props.country)
          );
        } else {
          if (this.props.onlyCountryPartners) {
            return !partner.countries;
          }
        }
        return true;
      });
  };

  render = () => {
    return (
      <Box id="partners" paddingBottom={4} marginTop={4}>
        {this.getCategories().map((category, index) => {
          const categoryKey: string = "category-" + index;
          return (
            <Fade key={categoryKey} right cascade fraction={0.01}>
              <div id={`wrapper-${categoryKey}`}>
                {!!this.getPartners(category.slug).length && (
                  <>
                    <Typography variant="h3" color="secondary">
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
                  </>
                )}
              </div>
            </Fade>
          );
        })}
      </Box>
    );
  };
}

export default withTranslation()(PartnerItems);
