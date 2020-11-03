import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const MenuItem = styled(NavLink)`
  cursor: pointer;
  font-size: 1.1rem;
  color: #ffffff90;

  &.active {
    color: #ffffff;
  }
`

export default MenuItem
