import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 2rem;
  text-transform: uppercase;
  border-radius: 8px;
  border: none;
  color: white;
  font-weight: bolder;
  font-size: larger;
  cursor: pointer;
  transition: all 200ms ease;
  border: 5px solid transparent;
  &:hover {
    border: 5px solid white;
  }
  background: MediumAquamarine;
  ${(props) =>
    props.secondary &&
    css`
      background: hotpink;
    `}
`;

function Button({ children, secondary, ...otherProps }) {
  return (
    <StyledButton secondary={secondary} {...otherProps}>
      {children}
    </StyledButton>
  );
}

export default Button;
