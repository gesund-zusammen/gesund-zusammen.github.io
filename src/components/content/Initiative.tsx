import React from "react";
import { Box, Typography, Chip } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

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
}

const DEFAULT_STATE: IInitiativeState = {
  selectedCategory: undefined,
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

  render = () => {
    return (
      <Box marginTop={4} paddingBottom={4}>
        <Typography variant="h3">Filter by</Typography>
        <Box id="initiatives-filter">
          <CategoryChip
            variant="outlined"
            className={this.state.selectedCategory === undefined && "selected"}
            key="all"
            label={`All (${this.categoryInitiativesCount.all})`}
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

    &.selected {
      color: #ffffff;
      background: #0a6eaa;
    }
  }
`;

export default Initiative;
