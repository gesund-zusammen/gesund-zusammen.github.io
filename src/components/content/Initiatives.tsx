import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
} from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import IconArrowRight from "../../images/icon_arrow_right.svg";

import InitiativeData from "../../data/initiatives.json";
import CTABox from "../common/CTABox";

const INITIAL_LIST_LENGTH = 10;
const LIST_LENGTH_INCREMENT = 10;

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

interface IInitiativeState {
  selectedCategory: string | undefined;
  globalSelected: boolean;
  listLength: number;
}

const DEFAULT_STATE: IInitiativeState = {
  selectedCategory: undefined,
  globalSelected: false,
  listLength: INITIAL_LIST_LENGTH,
};

class Initiatives extends React.Component<WithTranslation, IInitiativeState> {
  categoryInitiativesCount: { [slug: string]: number };
  germanInitiativesCount = 0;
  globalInitiativesCount = 0;

  constructor(props: WithTranslation) {
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
        return InitiativeData.categories[i].name[this.props.i18n.language];
      }
    }

    return this.props.t("initiatives.unknownCategory");
  };

  getInitiatives = (categorySlug?: string, global = true): IInitiative[] => {
    let initiatives = InitiativeData.initiatives;
    if (categorySlug) {
      initiatives = initiatives.filter(
        initiative => initiative.category === categorySlug,
      );
    }
    if (!global) {
      initiatives = initiatives.filter(initiative => !initiative.global);
    }
    return initiatives;
  };

  handleShowMore = () => {
    this.setState({
      listLength: this.state.listLength + LIST_LENGTH_INCREMENT,
    });
  };

  handleChipClick = (categorySlug: string | undefined) => {
    this.setState({
      selectedCategory: categorySlug,
      listLength: INITIAL_LIST_LENGTH,
    });
  };

  handleRegionClick = (global: boolean) => {
    this.setState({ globalSelected: global, listLength: INITIAL_LIST_LENGTH });
  };

  render = () => {
    return (
      <Box paddingBottom={4}>
        <Typography variant="h3">
          {this.props.t("initiatives.filter.filterBy")}
        </Typography>
        <Box id="initiatives-filter">
          <Box id="categories-filter">
            <CategoryChip
              variant="outlined"
              className={
                this.state.selectedCategory === undefined && "selected"
              }
              key="all"
              label={`${this.props.t("initiatives.filter.all")} (${
                this.categoryInitiativesCount.all
              })`}
              onClick={() => this.handleChipClick(undefined)}
            />
            {this.getCategories().map(category => (
              <CategoryChip
                variant="outlined"
                className={
                  this.state.selectedCategory === category.slug && "selected"
                }
                key={category.slug}
                label={`${category.name[this.props.i18n.language]} (${
                  this.categoryInitiativesCount[category.slug]
                })`}
                onClick={() => this.handleChipClick(category.slug)}
              />
            ))}
          </Box>
          <Box id="region-filter" paddingBottom={4} marginTop={4}>
            <RegionSelect
              variant="body2"
              onClick={() => this.handleRegionClick(false)}
              className={this.state.globalSelected === false ? "selected" : ""}
            >
              {`${this.props.t("initiatives.filter.germany")} (${
                this.getInitiatives(this.state.selectedCategory, false).length
              })`}
            </RegionSelect>
            <RegionSelect
              variant="body2"
              onClick={() => this.handleRegionClick(true)}
              className={this.state.globalSelected === true ? "selected" : ""}
            >
              {`${this.props.t("initiatives.filter.global")} (${
                this.getInitiatives(this.state.selectedCategory, true).length
              })`}
            </RegionSelect>
          </Box>
        </Box>
        <Box id="initiatives-list" paddingBottom={4} marginTop={4}>
          {this.getInitiatives(
            this.state.selectedCategory,
            this.state.globalSelected,
          ).map(
            (initiative, index) =>
              index < this.state.listLength && (
                <InitiativeCardWrapper
                  key={`${initiative.link}_${initiative.name}`}
                  href={initiative.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InitiativeCard>
                    <InitiativeCardContent>
                      <Typography variant="subtitle2" color="secondary">
                        {this.getCategoryName(initiative.category)}
                      </Typography>
                      <InitiativeCardTitle variant="h4" color="primary">
                        {initiative.name}
                      </InitiativeCardTitle>
                      <Typography variant="body2" color="primary">
                        {initiative.description[this.props.i18n.language]}
                      </Typography>
                    </InitiativeCardContent>
                  </InitiativeCard>
                </InitiativeCardWrapper>
              ),
          )}
        </Box>
        <Box paddingBottom={4}>
          {this.getInitiatives(
            this.state.selectedCategory,
            this.state.globalSelected,
          ).length > this.state.listLength && (
            <ShowMoreButton
              variant="contained"
              color="primary"
              disableFocusRipple={true}
              onClick={this.handleShowMore}
            >
              {this.props.t("initiatives.showMore")}
            </ShowMoreButton>
          )}
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("initiatives.claim")}
            cta={this.props.t("initiatives.cta")}
            href={this.props.t("initiatives.link")}
          />
        </Box>
      </Box>
    );
  };
}

const CategoryChip: AnyStyledComponent = styled(Chip)`
  && {
    font-size: 1rem;
    line-height: 1.7rem;
    padding: 1rem;
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

    @media (min-width: 600px) {
      font-size: 1.1rem;
      padding: 1rem 2rem;
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
    padding: 0.8rem;

    @media (min-width: 600px) {
      padding: 2.2rem 6rem 2.2rem 2.2rem;

      &:hover {
        background-image: url(${IconArrowRight});
        background-position: right 2rem center;
        background-repeat: no-repeat;
      }
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

const InitiativeCardContent: AnyStyledComponent = styled(CardContent)`
  && {
    max-width: 680px;
  }
`;

const ShowMoreButton: AnyStyledComponent = styled(Button)`
  && {
    display: block;
    background-color: #0a6eaa;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: none;
    text-align: center;
    border-radius: 4px;
    margin: 0 auto;
    padding-right: 2rem;
    padding-left: 2rem;

    @media (min-width: 600px) {
      font-size: 1.4rem;
    }
  }
`;

export default withTranslation()(Initiatives);
