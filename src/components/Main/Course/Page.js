import React from 'react'
import { toSlug } from '../../../helpers'

import Lab from './Lab'
import Video from './Video'

const pageTypes = {
  video: Video,
  lab: Lab
}

function Page({ page }) {
  const Component = pageTypes[page.type]
  if (Component === undefined) return <div>Invalid page type: {page.type}</div>
  return (
    <div id={toSlug(page.name)} style={{ margin: '20px 0' }}>
      <Component page={page} />
    </div>
  )
}

export default Page
