import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import ArrowIcon from "../../../images/icon_arrow_right_dark.svg";
import NewsData from "../../../data/latestnews.json";

interface INewsItem {
  date: string;
  outlet: string;
  teaser: string;
  link: string;
}

class LatestNews extends React.Component<WithTranslation> {
  getNewsItems = (limit?: number): Array<INewsItem> => {
    const news = NewsData.sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date),
    );
    if (limit) {
      return news.slice(0, limit);
    }
    return news;
  };

  render = () => {
    return (
      <LatestNewsBox id="latest-news" marginTop={4}>
        <LatestNewsContainer maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h2">
                {this.props.t("latestNews.title")}
              </Typography>
              <Typography variant="body1">
                {this.props.t("latestNews.content")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              {this.getNewsItems(3).map(newsItem => {
                return (
                  <NewsItem key={newsItem.link} href={newsItem.link}>
                    <Typography variant="h6">{newsItem.outlet}</Typography>
                    <Typography variant="body1">
                      &quot;{newsItem.teaser}&quot;
                    </Typography>
                  </NewsItem>
                );
              })}
            </Grid>
            <Grid item xs={12}>
              <Separator />
            </Grid>
          </Grid>
        </LatestNewsContainer>
      </LatestNewsBox>
    );
  };
}

const LatestNewsBox: AnyStyledComponent = styled(Box)`
  background-color: #e9e6e6;
`;

const LatestNewsContainer: AnyStyledComponent = styled(Container)`
  padding: 4rem 0 0;
`;

const NewsItem: AnyStyledComponent = styled.a`
  display: block;
  padding: 1rem 4rem 1rem 0;
  background-image: url(${ArrowIcon});
  background-size: 24px 24px;
  background-position: right center;
  background-repeat: no-repeat;
  border-bottom: 1px solid #0a6eaa;
  color: #003269;
  text-decoration: none;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

const Separator: AnyStyledComponent = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #ced7db;
`;

export default withTranslation()(LatestNews);
