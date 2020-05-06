import React from "react";
import {
  Box,
  Typography,
  Chip,
  Button,
  Hidden,
  FormControl,
  Select,
} from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import CTABox from "../common/CTABox";
import InitiativeCard from "../common/InitiativeCard";

import InitiativeData from "../../data/initiatives.json";

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
  globalSelected: true,
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

  handleCategorySelect = (categorySlug: string | undefined) => {
    if (categorySlug === "all") {
      categorySlug = undefined;
    }
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
            <Hidden smUp>
              <FormControl variant="outlined" fullWidth>
                <Select
                  native
                  value={this.state.selectedCategory}
                  onChange={(
                    event: React.ChangeEvent<{ name?: string; value: unknown }>,
                  ) =>
                    this.handleCategorySelect(
                      event.target.value as string | undefined,
                    )
                  }
                  inputProps={{
                    name: "category",
                    id: "filter-select",
                  }}
                >
                  <option aria-label="all" value="all">{`${this.props.t(
                    "initiatives.filter.all",
                  )} (${this.categoryInitiativesCount.all})`}</option>
                  {this.getCategories().map(category => (
                    <option key={category.slug} value={category.slug}>
                      {`${category.name[this.props.i18n.language]} (${
                        this.categoryInitiativesCount[category.slug]
                      })`}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Hidden>
            <Hidden xsDown>
              <CategoryChip
                variant="outlined"
                className={
                  this.state.selectedCategory === undefined && "selected"
                }
                key="all"
                label={`${this.props.t("initiatives.filter.all")} (${
                  this.categoryInitiativesCount.all
                })`}
                onClick={() => this.handleCategorySelect(undefined)}
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
                  onClick={() => this.handleCategorySelect(category.slug)}
                />
              ))}
            </Hidden>
          </Box>
          <Box
            id="region-filter"
            paddingBottom={4}
            marginTop={2}
            style={{ textAlign: "center" }}
          >
            <RegionSelect
              variant="body2"
              onClick={() => this.handleRegionClick(true)}
              className={this.state.globalSelected === true ? "selected" : ""}
            >
              {`${this.props.t("initiatives.filter.global")} (${
                this.getInitiatives(this.state.selectedCategory, true).length
              })`}
            </RegionSelect>
            <RegionSelect
              variant="body2"
              onClick={() => this.handleRegionClick(false)}
              className={this.state.globalSelected === false ? "selected" : ""}
            >
              {`${this.props.t("initiatives.filter.germany")} (${
                this.getInitiatives(this.state.selectedCategory, false).length
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
                <InitiativeCard
                  key={`${initiative.link}_${initiative.name}`}
                  link={initiative.link}
                  category={this.getCategoryName(initiative.category)}
                  name={initiative.name}
                  description={
                    initiative.description[
                      this.props.i18n.language === "de" ? "de" : "en"
                    ]
                  }
                />
              ),
          )}
        </Box>
        <Box paddingBottom={4}>
          {this.getInitiatives(
            this.state.selectedCategory,
            this.state.globalSelected,
          ).length > this.state.listLength && (
            <ShowMoreButton
              color="primary"
              variant="outlined"
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
    font-weight: normal;
    color: #93989b;
    text-align: center;
    width: 50%;
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover {
      color: #0a6eaa;
      font-weight: 700;
    }

    &.selected {
      font-weight: 700;
      color: #0a6eaa;
      border: 2px solid #0a6eaa;
      border-radius: 25px 0px 0px 0px;
    }

    @media (min-width: 600px) {
      width: auto;
      padding: 0.5rem 3rem;
    }
  }
`;

const ShowMoreButton: AnyStyledComponent = styled(Button)`
  && {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    border-radius: 15px;
    margin: 0 auto;
    padding-right: 2rem;
    padding-left: 2rem;

    &:hover {
      color: #ffffff;
      background-color: #003269 !important;
    }
  }
`;

export default withTranslation()(Initiatives);
