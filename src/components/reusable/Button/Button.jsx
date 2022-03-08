import React from 'react'
import { StyledButton } from './ButtonElements';

function Button(props) {
  return (
    <StyledButton to={props.to}>{props.text}</StyledButton>
  )
}

export default Button