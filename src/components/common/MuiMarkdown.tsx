import React from "react";
import { Link, Typography } from "@material-ui/core";
import Markdown, { MarkdownOptions } from "markdown-to-jsx";

interface IMuiMarkdownProps {
  markdown: string;
  overrides?: MarkdownOptions["overrides"];
  className?: string;
}

class MuiMarkdown extends React.PureComponent<IMuiMarkdownProps, {}> {
  render = () => {
    return (
      <Markdown
        className={this.props.className}
        options={{
          overrides: {
            h1: {
              component: Typography,
              props: {
                variant: "h1",
                color: "primary",
              },
            },
            h2: {
              component: Typography,
              props: {
                variant: "h2",
                color: "primary",
              },
            },
            h3: {
              component: Typography,
              props: {
                variant: "h3",
                color: "primary",
              },
            },
            h4: {
              component: Typography,
              props: {
                variant: "h4",
                color: "primary",
              },
            },
            h5: {
              component: Typography,
              props: {
                variant: "h5",
                color: "primary",
              },
            },
            h6: {
              component: Typography,
              props: {
                variant: "h6",
                color: "primary",
              },
            },
            p: {
              component: Typography,
              props: {
                variant: "body1",
                color: "textPrimary",
              },
            },
            a: {
              component: Link,
            },
            ...this.props.overrides,
          },
        }}
      >
        {this.props.markdown}
      </Markdown>
    );
  };
}

export default MuiMarkdown;
