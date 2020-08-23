import React from "react";
import styled from "styled-components";

const SeparatorSpan = styled.span`
  padding: ${(props: { padding: number }) => `0 ${props.padding}px`};
`;

const Separator: React.FC<{
  padding: number;
}> = ({ padding }) => {
  return <SeparatorSpan padding={padding}>/</SeparatorSpan>;
};

export default Separator;
