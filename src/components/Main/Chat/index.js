import React from 'react'
import styled from 'styled-components'

function Chat({ className, ...props }) {
  return (
    <div className={className} {...props}>
      <h1>Chat</h1>
    </div>
  )
}

export default styled(Chat)``
