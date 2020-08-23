import React from "react";

import * as Styled from "./styles";
import { BreadCrumbItemAnchorType } from "./types";
import { listItemSEOProps } from "../../utils/constants";

const NativeLinkItem: React.FC<BreadCrumbItemAnchorType> = ({
  children,
  href,
  positionForStructuredSEO,
}) => (
  <li {...listItemSEOProps}>
    <Styled.PrimaryLink href={href} itemProp="item">
      <span itemProp="name">{children}</span>
    </Styled.PrimaryLink>

    <meta itemProp="position" content={positionForStructuredSEO} />
  </li>
);

export default NativeLinkItem;
