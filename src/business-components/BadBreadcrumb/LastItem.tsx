import React from "react";
import * as Styled from "./styles";

import { listItemSEOProps } from "../../utils/constants";

const LastItem: React.FC<{
  positionForStructuredSEO: string;
  children: React.ReactNode;
}> = ({ positionForStructuredSEO, children }) => (
  <li {...listItemSEOProps}>
    <Styled.LastItem itemProp="item">
      <span itemProp="name">{children}</span>
    </Styled.LastItem>
    <meta itemProp="position" content={positionForStructuredSEO} />
  </li>
);

export default LastItem;
