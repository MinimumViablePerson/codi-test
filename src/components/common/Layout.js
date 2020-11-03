import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-template:
    '.' 50px
    'main' 1fr /
    1fr;

  min-height: 100vh;
`

export default Layout
