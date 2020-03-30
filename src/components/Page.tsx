import React from "react";

import LayoutLanding from "./layouts/Landing";
import Initiative from "./content/Initiative";
import Partners from "./content/Partners";
import Faq from "./content/Faq";

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
          <Initiative lang={this.state.lang}></Initiative>
          <Partners lang={this.state.lang}></Partners>
          <Faq lang={this.state.lang}></Faq>
        </LayoutLanding>
      </>
    );
  };
}

export default Page;
