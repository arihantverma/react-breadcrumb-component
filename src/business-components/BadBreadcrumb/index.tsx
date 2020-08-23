import React from "react";
import * as Styled from "./styles";

import NativeLinkItem from "./NativeLinkItem";
import ReactRouterLinkItem from "./ReactRouterLinkItem";
import LastItem from "./LastItem";
import Separator from "../../components/Separator";

const SeparatorComp = () => {
  return <Separator padding={5} />;
};

const BadBreadcrumb: React.FC<{
  countryName?: string;
  countryUrl?: string;
  cityUrl?: string;
  cityName?: string;
  hotelName: string;
}> = ({
  countryName = "",
  countryUrl = "",
  cityUrl = "",
  cityName = "",
  hotelName = "",
}) => {
  const showCountry = countryName && countryUrl;
  const showCity = cityUrl && cityName;

  let positionForStructuredSEOForHotelName = "3";

  if (showCountry && showCity) {
    positionForStructuredSEOForHotelName = "5";
  }

  if ((!showCountry && showCity) || (showCountry && !showCity)) {
    positionForStructuredSEOForHotelName = "4";
  }

  return (
    <div itemScope itemType="https://schema.org/breadcrumb">
      {/* ul */}
      <Styled.BreadCrumbList
        itemScope
        itemType="http://schema.org/BreadcrumbList"
      >
        {/* li */}
        <NativeLinkItem href="https://goibibo.com" positionForStructuredSEO="1">
          Goibibo
        </NativeLinkItem>

        <SeparatorComp />

        {/* li */}
        <ReactRouterLinkItem to="/hotels/" positionForStructuredSEO="2">
          Hotel Booking
        </ReactRouterLinkItem>

        <SeparatorComp />

        {/* li */}
        {showCountry && (
          <NativeLinkItem href={countryUrl} positionForStructuredSEO="1">
            <span>{countryName}</span>
          </NativeLinkItem>
        )}

        {showCountry && <SeparatorComp />}

        {/* li */}
        {showCity && (
          <NativeLinkItem
            positionForStructuredSEO={countryUrl ? "4" : "3"}
            href={cityUrl}
          >
            <span>{cityName}</span>
          </NativeLinkItem>
        )}

        {showCity && <SeparatorComp />}

        {/* li */}

        {hotelName && (
          <LastItem
            positionForStructuredSEO={positionForStructuredSEOForHotelName}
          >
            <span>{hotelName}</span>
          </LastItem>
        )}
      </Styled.BreadCrumbList>
    </div>
  );
};

export default BadBreadcrumb;
