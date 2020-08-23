export interface BreadcrumbItemProps {
  routerLink?: string;
  nativeLink?: string;
  children: React.ReactNode;
  selected?: boolean;
  openInNewTab?: boolean;
  index: number;
  linkColor?: string;
  selectedColor?: string;
  text?: string;
}

export interface BreadcrumbPropTypes {
  children: React.ReactElement[];
  Separator?: React.FC<any>;
}
