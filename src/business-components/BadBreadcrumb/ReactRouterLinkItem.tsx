import React from "react";
import * as Styled from "./styles";

import { ReactRouterLinkItemProps } from "./types";
import { listItemSEOProps } from "../../utils/constants";

const ReactRouterLinkItem: React.FC<ReactRouterLinkItemProps> = ({
  children,
  to,
  positionForStructuredSEO,
}) => (
  <li {...listItemSEOProps}>
    <Styled.ReactRouterBreadcrumbCrumbItem to={to} itemProp="item">
      <span itemProp="name">{children}</span>
    </Styled.ReactRouterBreadcrumbCrumbItem>
    <meta itemProp="position" content={positionForStructuredSEO} />
  </li>
);

export default ReactRouterLinkItem;
