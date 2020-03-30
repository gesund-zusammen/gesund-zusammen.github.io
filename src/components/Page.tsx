import React from "react";

import LayoutLanding from "./LayoutLanding";
import MainContent from "./MainContent";
import Partners from "./Partners";
import Faq from "./Faq";

interface IPageState {
  lang: "de" | "en";
}

const DEFAULT_STATE: IPageState = {
  lang: "de",
};

class Page extends React.Component<{}, IPageState> {
  constructor(props: {}) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  handleLangChange = (lang: "de" | "en") => {
    this.setState({ lang });
  };

  render = () => {
    return (
      <>
        <LayoutLanding
          lang={this.state.lang}
          langChangeCallback={this.handleLangChange}
        >
          <MainContent lang={this.state.lang}></MainContent>
          <Partners lang={this.state.lang}></Partners>
          <Faq lang={this.state.lang}></Faq>
        </LayoutLanding>
      </>
    );
  };
}

export default Page;
