import React from "react";
import { Link, Typography } from "@material-ui/core";
import Markdown, { MarkdownOptions } from "markdown-to-jsx";

interface IMuiMarkdownProps {
  markdown: string;
  overrides?: MarkdownOptions["overrides"];
}

class MuiMarkdown extends React.PureComponent<IMuiMarkdownProps, {}> {
  render = () => {
    return (
      <Markdown
        options={{
          overrides: {
            h1: {
              component: Typography,
              props: {
                variant: "h1",
              },
            },
            h2: {
              component: Typography,
              props: {
                variant: "h2",
              },
            },
            h3: {
              component: Typography,
              props: {
                variant: "h3",
              },
            },
            h4: {
              component: Typography,
              props: {
                variant: "h4",
              },
            },
            h5: {
              component: Typography,
              props: {
                variant: "h5",
              },
            },
            h6: {
              component: Typography,
              props: {
                variant: "h6",
              },
            },
            p: {
              component: Typography,
              props: {
                variant: "body1",
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
