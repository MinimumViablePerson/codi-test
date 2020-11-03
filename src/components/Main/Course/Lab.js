import React from 'react'
import styled from 'styled-components'

import Text from './Text'

function Lab({ className, page: { id, name, content } }) {
  const text = content ? <Text content={content} /> : null

  return (
    <div className={className}>
      <h2>{name}</h2>

      {text}

      <iframe
        src={`https://codesandbox.io/s/${id}?autoresize=1&eslint=1&fontsize=14&hidenavigation=1&previewwindow=tests&theme=dark`}
        loading="lazy"
        title={name}
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  )
}

export default styled(Lab)`
  & iframe {
    width: 90vw;
    max-width: 1400px;
    height: 80vh;
    border: 0;
    border-radius: 10px;
    overflow: hidden;
  }
`

// src={`https://codesandbox.io/embed/${id}?codemirror=1`}
// src={`https://codesandbox.io/s/${id}?autoresize=1&eslint=1&fontsize=14&hidenavigation=1&previewwindow=tests&theme=dark`}
