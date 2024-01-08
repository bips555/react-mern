/* eslint-disable no-unreachable */
import styled from "styled-components";
export const Heading = ({ type, value }) => {
  switch (type) {
    case "h1": {
      return <h1>{value}</h1>;
      break;
    }
    case "h2": {
      return <h2>{value}</h2>;
      break;
    }
    case "h3": {
      return <h3>{value}</h3>;
      break;
    }
    case "h4": {
      return <h4>{value}</h4>;
      break;
    }

    case "h5": {
      return <h5>{value}</h5>;
      break;
    }
    default: {
      return { value };
      break;
    }
  }
};
export const H1 = ({ value }) => {
  return <h1>{value}</h1>;
};
export const H2 = ({ value }) => {
  return <h2>{value}</h2>;
};
export const H3 = ({ value }) => {
  return <h3>{value}</h3>;
};
export const H4 = ({ value }) => {
  return <h4>{value}</h4>;
};
export const H5 = ({ value }) => {
  return <h5>{value}</h5>;
};
export const Title = styled.h1`
  color: papayawhip;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 0px 20px;
  margin-top: 10px;
`;
export const Divider = styled.hr`
  border-color: white;
`;
