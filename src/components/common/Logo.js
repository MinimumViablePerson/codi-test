import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Logo = ({ className }) => (
  <NavLink className={className} exact to="/">
    Codi
  </NavLink>
)

export default styled(Logo)`
  font-family: Cabin, sans-serif;
  color: #ffffffdd;
  font-size: 1.5rem;
  padding: 0 var(--base-padding);
  transition: color 1s;

  &.active {
    color: #ffffffff;
  }
`
