import styled from "styled-components";

const BreadCrumbLinkAttributesGenerator = (props: {
  to?: string;
  selected?: string;
  className?: string;
}) => {
  return {
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
  padding: 0 5px;
  &:hover {
    text-decoration: underline;
  }
  &.selected {
    color: ${(props: BreadCrumbNativeAnchorProps) =>
      props.selectedColor || "#777777"};
    pointer-events: none;
    padding: 0;
  }
`;
