import React from "react";
import BadBreadcrumb from "./business-components/BadBreadcrumb";
import Breadcrumb from "./components/Breadcrumb";
import { BreadcrumbItemProps } from "./components/Breadcrumb/types";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as Styled from "./App.styles";

const countryName = "India";
const countryUrl = "https://www.goibibo.com/hotels/india/";
const cityName = "Bengaluru";
const cityUrl = "https://www.goibibo.com/hotels/hotels-in-bangalore-ct/";
const hotelName = "Taj Bangalore";

const badBreadcrumbProps = {
  countryName,
  countryUrl,
  cityName,
  cityUrl,
  hotelName,
};

const CustomSeparator: React.FC = () => {
  return <span style={{ padding: "0 10px" }}>{">"}</span>;
};

const breadCrumbData: Pick<
  BreadcrumbItemProps,
  "text" | "nativeLink" | "routerLink"
>[] = [
  {
    text: "Goibibo",
    nativeLink: "https://goibibo.com/",
  },
  {
    text: "Hotel Booking",
    routerLink: "/hotels/",
  },
  {
    text: countryName,
    nativeLink: countryUrl,
  },
  {
    text: cityName,
    nativeLink: cityUrl,
  },
  {
    text: hotelName,
  },
];

function App() {
  return (
    <Styled.Padding>
      <Router>
        <Switch>
          <Route path="/" exact>
            <BadBreadcrumb {...badBreadcrumbProps} />

            <Breadcrumb>
              {breadCrumbData.map(
                ({ text, ...restBreadcrumbItemData }, index) => {
                  return (
                    <Breadcrumb.Item {...{ ...restBreadcrumbItemData, index }}>
                      {text}
                    </Breadcrumb.Item>
                  );
                },
              )}
            </Breadcrumb>

            <Breadcrumb Separator={CustomSeparator}>
              <span>First Item</span>
              <span>Second Item</span>
              <span>Third Item</span>
            </Breadcrumb>
          </Route>

          {/* React Router Link Page */}
          <Route path="/hotels">HOTELS HOME PAGE!</Route>
        </Switch>
      </Router>
    </Styled.Padding>
  );
}

export default App;
