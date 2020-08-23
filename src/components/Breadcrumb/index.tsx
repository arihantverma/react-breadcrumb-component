import * as React from "react";
import * as S from "./styles";

import { listItemSEOProps } from "../../utils/constants";
import { nonNullable } from "../../utils/type-guards";
import DefaultSeparator from "../Separator";
import { BreadcrumbItemProps, BreadcrumbPropTypes } from "./types";
import BreadCrumbItem from "./BreadcrumbItem";

const Breadcrumb: React.FC<BreadcrumbPropTypes> & {
  Item: React.FC<BreadcrumbItemProps>;
} = ({ children, Separator = DefaultSeparator }) => {
  if (!nonNullable(children)) {
    return null;
  }

  const wrappedChildren = React.Children.map(
    children,
    (child: React.ReactElement, i) => {
      const isLast = i === (children as { length: number }).length - 1;

      return (
        <S.StyledLi
          aria-current={isLast ? "page" : undefined}
          {...listItemSEOProps}
        >
          <span itemProp="name">
            {isLast
              ? React.cloneElement(child, {
                  selected: true,
                })
              : child}
          </span>
          {isLast ? null : <Separator padding={5} />}
        </S.StyledLi>
      );
    },
  );

  return (
    <nav
      aria-label="breadcrumb"
      itemScope
      itemType="https://schema.org/breadcrumb"
    >
      <S.UnorderedList itemScope itemType="http://schema.org/BreadcrumbList">
        {wrappedChildren}
      </S.UnorderedList>
    </nav>
  );
};

Breadcrumb.Item = BreadCrumbItem;

export default Breadcrumb;
