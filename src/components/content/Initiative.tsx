import React from "react";
import { Box, Card, CardContent, Typography, Chip } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../../util";

import IconArrowRight from "../../images/icon_arrow_right.svg";

import InitiativeData from "../../data/initiatives.json";

interface ICategory {
  slug: string;
  name: {
    en: string;
    de: string;
  };
}

interface IInitiative {
  name: string;
  link: string;
  category: string;
  description: {
    de: string;
    en: string;
  };
  global?: boolean;
}

interface IInitiativeProps {
  lang: "de" | "en";
}

interface IInitiativeState {
  selectedCategory: string | undefined;
  globalSelected: boolean;
}

const DEFAULT_STATE: IInitiativeState = {
  selectedCategory: undefined,
  globalSelected: false,
};

class Initiative extends React.Component<IInitiativeProps, IInitiativeState> {
  categoryInitiativesCount: { [slug: string]: number };

  constructor(props: IInitiativeProps) {
    super(props);
    this.state = DEFAULT_STATE;

    this.categoryInitiativesCount = {
      all: this.getInitiatives().length,
    };

    this.getCategories().forEach(category => {
      this.categoryInitiativesCount[category.slug] = this.getInitiatives(
        category.slug,
      ).length;
    });
  }

  getCategories = (): ICategory[] => {
    return InitiativeData.categories;
  };

  getCategoryName = (slug: string): string => {
    for (let i = 0; i < InitiativeData.categories.length; i++) {
      if (InitiativeData.categories[i].slug === slug) {
        return InitiativeData.categories[i].name[this.props.lang];
      }
    }

    return "Unknown";
  };

  getInitiatives = (categorySlug?: string, global?: boolean): IInitiative[] => {
    let initiatives = InitiativeData.initiatives;
    if (categorySlug) {
      initiatives = initiatives.filter(
        initiative => initiative.category === categorySlug,
      );
    }
    if (global) {
      initiatives = initiatives.filter(initiative => initiative.global);
    }
    return initiatives;
  };

  handleChipClick = (categorySlug: string | undefined) => {
    this.setState({ selectedCategory: categorySlug });
  };

  handleRegionClick = (global: boolean) => {
    this.setState({ globalSelected: global });
  };

  render = () => {
    return (
      <Box paddingBottom={4}>
        <Typography variant="h3">Filter by</Typography>
        <Box id="initiatives-filter">
          <Box id="categories-filter">
            <CategoryChip
              variant="outlined"
              className={
                this.state.selectedCategory === undefined && "selected"
              }
              key="all"
              label={`${
                translated(this.props.lang).initiative.filter.global
              } (${this.categoryInitiativesCount.all})`}
              onClick={() => this.handleChipClick(undefined)}
            ></CategoryChip>
            {this.getCategories().map(category => (
              <CategoryChip
                variant="outlined"
                className={
                  this.state.selectedCategory === category.slug && "selected"
                }
                key={category.slug}
                label={`${category.name[this.props.lang]} (${
                  this.categoryInitiativesCount[category.slug]
                })`}
                onClick={() => this.handleChipClick(category.slug)}
              ></CategoryChip>
            ))}
          </Box>
          <Box id="region-filter" paddingBottom={4} marginTop={4}>
            <RegionSelect
              variant="body2"
              onClick={() => this.handleRegionClick(false)}
              className={this.state.globalSelected === false ? "selected" : ""}
            >
              {translated(this.props.lang).initiative.filter.germany}
            </RegionSelect>
            <RegionSelect
              variant="body2"
              onClick={() => this.handleRegionClick(true)}
              className={this.state.globalSelected === true ? "selected" : ""}
            >
              {translated(this.props.lang).initiative.filter.global}
            </RegionSelect>
          </Box>
        </Box>
        <Box id="initiatives-list" paddingBottom={4} marginTop={4}>
          {this.getInitiatives(
            this.state.selectedCategory,
            this.state.globalSelected,
          ).map(initiative => (
            <InitiativeCardWrapper
              key={initiative.link}
              href={initiative.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InitiativeCard>
                <CardContent>
                  <Typography variant="subtitle2" color="secondary">
                    {this.getCategoryName(initiative.category)}
                  </Typography>
                  <InitiativeCardTitle variant="h4" color="primary">
                    {initiative.name}
                  </InitiativeCardTitle>
                  <Typography variant="body2" color="primary">
                    {initiative.description[this.props.lang]}
                  </Typography>
                </CardContent>
              </InitiativeCard>
            </InitiativeCardWrapper>
          ))}
        </Box>
      </Box>
    );
  };
}

const CategoryChip: AnyStyledComponent = styled(Chip)`
  && {
    font-size: 1.1rem;
    line-height: 1.7rem;
    padding: 1rem 2rem;
    color: #0a6eaa;
    border: 1px solid #0a6eaa;
    margin: 0 1rem 1rem 0;

    &:hover,
    &:focus {
      color: #ffffff;
      background-color: #003269 !important;
    }

    &.selected {
      color: #ffffff;
      background: #0a6eaa;
    }
  }
`;

const RegionSelect: AnyStyledComponent = styled(Typography)`
  && {
    display: inline-block;
    font-weight: 700;
    text-align: center;
    color: #0a6eaa;
    width: 50%;
    padding: 0.5rem 0;
    cursor: pointer;

    &.selected {
      border-bottom: 2px solid #0a6eaa;
    }

    @media (min-width: 600px) {
      width: auto;
      padding: 0.5rem 3rem;
    }
  }
`;

const InitiativeCardWrapper: AnyStyledComponent = styled.a`
  text-decoration: none;
`;

const InitiativeCard: AnyStyledComponent = styled(Card)`
  && {
    border-radius: 15px;
    box-shadow: 0px 2px 24px #e3e6eb;
    margin-bottom: 2rem;
    padding: 2.2rem;

    &:hover {
      background-image: url(${IconArrowRight});
      background-position: right 2rem center;
      background-repeat: no-repeat;
    }
  }
`;

const InitiativeCardTitle: AnyStyledComponent = styled(Typography)`
  && {
    margin-top: 0.5rem;
    margin-bottom: 0.7rem;
    line-height: 1.4;
  }
`;

export default Initiative;
