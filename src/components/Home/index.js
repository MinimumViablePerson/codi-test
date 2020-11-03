// import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

function Home() {
  return <Redirect to="/learn" />
  // const { user } = useAuth0()
  // return (
  //   <div>
  //     <pre>{JSON.stringify(user, null, 2)}</pre>
  //   </div>
  // )
}

export default styled(Home)``
