import React from 'react'

export interface BreadCrumbItemAnchorType {
  children: React.ReactNode;
  href: string;
  positionForStructuredSEO: string;
};

export interface ReactRouterLinkItemProps {
  children: React.ReactNode;
  to: string;
  positionForStructuredSEO: string;
};