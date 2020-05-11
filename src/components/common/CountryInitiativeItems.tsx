import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import CountryInitiativeData from "../../data/countries.json";
import Fade from "react-reveal";
import Card from "./ImageCard";

interface ICategory {
  slug: string;
  name: {
    en: string;
    de: string;
  };
}

interface ICountryInitiative {
  name: {
    en: string;
    de: string;
    it: string;
    es: string;
    fr: string;
  };
  slug: string;
  link: string;
  image: string;
}

class CountryInitiativeItems extends React.PureComponent<WithTranslation, {}> {
  countryInitiativesData: {
    categories: ICategory[];
    initiatives: ICountryInitiative[];
  } = CountryInitiativeData;

  getCategories = (): ICategory[] => {
    return this.countryInitiativesData.categories;
  };

  getInitiatives = (categorySlug?: string): ICountryInitiative[] => {
    let initiatives = this.countryInitiativesData.initiatives;
    if (categorySlug) {
      initiatives = initiatives.filter(
        initiative => initiative.slug === categorySlug,
      );
    }
    return initiatives;
  };

  render = () => {
    return (
      <Box id="initiatives" paddingBottom={4} marginTop={4}>
        <Fade right cascade fraction={0.01}>
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
                    {this.getInitiatives(category.slug).map(
                      (countryInitiative, countryInitiativeIndex) => {
                        const countryInitiativeCardKey: string =
                          "category-" +
                          index +
                          "-initiative-" +
                          countryInitiativeIndex;
                        return (
                          <Card
                            key={countryInitiativeCardKey}
                            name={
                              countryInitiative.name[this.props.i18n.language]
                            }
                            image={
                              require(`../../images/countries/${countryInitiative.image}`)
                                .default
                            }
                            link={countryInitiative.link}
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

export default withTranslation()(CountryInitiativeItems);
