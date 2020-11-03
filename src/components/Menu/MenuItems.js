import React from 'react'
import styled from 'styled-components'

import MenuItem from './MenuItem'
import SignInButton from './SignInButton'

function MenuItems({ className }) {
  return (
    <div className={className}>
      <MenuItem to="/learn">Learn</MenuItem>
      <a
        href="https://wearecodigoers.slack.com/"
        target="_blank"
        rel="noreferrer"
      >
        Chat
      </a>
      <SignInButton />
    </div>
  )
}

export default styled(MenuItems)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`
