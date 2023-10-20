import React from "react";
import styled from "styled-components";

export const Button = ({
  children,
  onClick,
  title,
  color = "var(--primary)",
}) => {
  return (
    <BUTTON color={color} title={title} onClick={onClick}>
      {children}
    </BUTTON>
  );
};

const BUTTON = styled.button`
  /* background-color: var(--primary); */
  color: ${(props) => props.color};
  background-color: transparent;
  border-radius: 0.25rem;
  letter-spacing: 2px;
  padding: 0.75rem 1.5rem;
  border: 1px solid ${(props) => props.color};
  font-size: var(--button);
  cursor: pointer;
  position: relative;
  transition: color 0.5s ease-in, box-shadow 0.5s ease-in;
  overflow: hidden;
  z-index: 1;
  &:hover {
    transition-delay: 0s, 0.5s;
    color: var(--background);
    box-shadow: 0 0 10px ${(props) => props.color},
      0 0 20px ${(props) => props.color}, 0 0 40px ${(props) => props.color};
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50px;
    z-index: -1;
    width: 0;
    height: 100%;
    background-color: ${(props) => props.color};
    transform: skewX(35deg);
    transition: 0.5s ease-in;
  }
  &:hover::before {
    width: 200%;
  }
`;
