import React from "react";
import { NavLink } from "react-router-dom";

import * as S from "./Breadcrumb.styles";

import { BreadcrumbItemProps } from "./types";

const Meta: React.FC<{
  positionForStructuredSEO: string;
}> = ({ positionForStructuredSEO }) => {
  return <meta itemProp="position" content={positionForStructuredSEO} />;
};

const BreadCrumbItem: React.FC<BreadcrumbItemProps> = ({
  routerLink,
  nativeLink,
  children,
  selected,
  openInNewTab,
  index,
  linkColor,
  selectedColor,
}) => {
  const conditionalProps: {
    selected?: boolean;
    target?: "_blank";
    rel?: "noopener";
    itemProp: "item";
    linkColor?: string;
    selectedColor?: string;
  } = {
    itemProp: "item",
  };

  if (!!selected) {
    conditionalProps.selected = true;
  }

  if (openInNewTab) {
    conditionalProps.target = "_blank";
    conditionalProps.rel = "noopener";
  }

  if (linkColor) {
    conditionalProps.linkColor = linkColor;
  }

  if (selectedColor) {
    conditionalProps.selectedColor = selectedColor;
  }

  if (routerLink) {
    const { selected, ...rest } = conditionalProps;

    return (
      <>
        <S.BreadCrumbNativeAnchor as={NavLink} to={routerLink} {...rest}>
          {children}
        </S.BreadCrumbNativeAnchor>
        <Meta positionForStructuredSEO={index.toString()} />
      </>
    );
  }

  if (nativeLink || !!selected) {
    return (
      <>
        <S.BreadCrumbNativeAnchor href={nativeLink} {...conditionalProps}>
          {children}
        </S.BreadCrumbNativeAnchor>
        <Meta positionForStructuredSEO={index.toString()} />
      </>
    );
  }

  return null;
};

export default BreadCrumbItem;
