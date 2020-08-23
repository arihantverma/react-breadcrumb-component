import styled from "styled-components";
import { Link } from "react-router-dom";

export const S = styled.div``;

const blue = "#2274e0";

export const PrimaryLink = styled.a`
  color: ${blue};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const BreadCrumbList = styled.ol`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0;

  a {
    padding: 0 5px;
  }
`;

export const ReactRouterBreadcrumbCrumbItem = styled(Link)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  color: ${blue};
  &:hover {
    color: ${blue};
    text-decoration: underline;
  }
  &.active {
    color: #fff;
  }
`;

export const LastItem = styled.li`
  color: grey;
`;
