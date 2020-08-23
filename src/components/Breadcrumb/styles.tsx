import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
`;

const BreadCrumbLinkAttributesGenerator = (props: {
  to?: string;
  selected?: string;
  className?: string;
}) => {
  // const isRouterLink = typeof props.to === 'string';

  return {
    // activeClassName: isRouterLink ? '' : 'selected',
    className: `${props.selected && "selected"} ${props.className}`,
  };
};

interface BreadCrumbNativeAnchorProps {
  linkColor?: string;
  selectedColor?: string;
}

export const BreadCrumbNativeAnchor = styled.a.attrs(
  BreadCrumbLinkAttributesGenerator,
)`
  color: ${(props: BreadCrumbNativeAnchorProps) =>
    props.linkColor || "#2276e3"};
  display: inline-block;
  font-size: inherit;
  text-decoration: none;
  padding: 0 0.5rem;
  /* text-align: center; */
  &:hover {
    text-decoration: underline;
  }
  &.selected {
    color: ${(props: BreadCrumbNativeAnchorProps) =>
      props.selectedColor || "#777777"};
    pointer-events: none;
  }
`;

export const UnorderedList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
`;

export const SeparatorWrap = styled.span`
  display: flex;
`;
