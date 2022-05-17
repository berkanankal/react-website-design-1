import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${(props) => (props.primary ? "#01BF71" : "#010606")};
  color: ${(props) => (props.dark ? "#010606" : "#fff")};
  white-space: nowrap;
  padding: ${(props) => (props.big ? "14px 48px" : "12px 30px")};
  font-size: ${(props) => (props.fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => (props.primary ? "#fff" : "#01BF71")};
  }
`;
