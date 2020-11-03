import React from 'react'
import styled from 'styled-components'

import Separator from './Separator'
import { safeMarkdown } from '../../../helpers'

function Text({ className, content }) {
  return (
    <div className={className}>
      <Separator small />
      <div className="text-wrapper">
        <div
          className="text-content markdown-body"
          dangerouslySetInnerHTML={{ __html: safeMarkdown(content) }}
        ></div>
      </div>
      <Separator small />
    </div>
  )
}

export default styled(Text)`
  display: grid;
  place-items: center;

  & .text-wrapper {
    background-color: var(--white);
    padding: 5px;
    width: 80vw;
    max-width: 800px;
    display: inline-block;
    border-radius: 10px;
    text-align: left;
  }

  & .text-content {
    border: solid 1px #00000050;
    padding: 30px;
    border-radius: 5px;
    background-color: var(--white);
    color: var(--black);
    font-family: sans-serif;
  }
`
