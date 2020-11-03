import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'

function Video({ className, page: { name, id } }) {
  const options = { playerVars: { rel: 0 } }
  return (
    <div className={className}>
      <h2>{name}</h2>
      <YouTube
        videoId={id}
        id={name}
        opts={options}
        onEnd={() => console.log(`You've just finished watching ${name}!`)}
      />
    </div>
  )
}

export default styled(Video)`
  & iframe {
    border-radius: 1;
    height: 55vw;
    max-height: 450px;

    width: 90vw;
    max-width: 800px;
  }

  & h2 {
    margin-bottom: 10px;
  }
`
