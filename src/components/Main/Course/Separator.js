import styled from 'styled-components'

const Separator = styled.div`
  height: ${props => (props.small ? '30px' : '100px')};
  background-color: #ffffff90;
  width: 2px;
  display: inline-block;
  margin: ${props => (props.small ? '10px' : '0px')} 0;
`

export default Separator
