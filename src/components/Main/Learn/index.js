import React from 'react'
import styled from 'styled-components'

import courses from '../../../data/courses'

import CourseThumbnail from './CourseThumbnail'

function Learn({ className, ...props }) {
  return (
    <div className={className} {...props}>
      {Object.values(courses).map(course => (
        <CourseThumbnail key={course.name} course={course} />
      ))}
    </div>
  )
}

export default styled(Learn)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;

  padding: var(--base-padding);
`
