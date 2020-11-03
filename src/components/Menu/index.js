import styled from 'styled-components'

const Menu = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;

  background-color: var(--bg-lighter);
  border-bottom: solid 1px var(--border-color);

  display: grid;
  place-items: center;
  grid-template-columns: 100px 1fr;

  z-index: 5;
`

export default Menu
