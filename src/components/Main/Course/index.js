import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import Page from './Page'
import Separator from './Separator'
import SideMenu from './SideMenu'

import courses from '../../../data/courses'
import { intersperse } from '../../../helpers'

function Course({ className }) {
  const { name } = useParams()
  const course = courses[name]

  if (course === undefined) return <div>Course not found</div>

  const pages = course.pages.map(page => <Page key={page.name} page={page} />)

  return (
    <div className={className}>
      <img className="background" alt="background" src={course.image} />
      <div className="container">
        <SideMenu course={course} />
        <div className="content">
          <h1>{course.name}</h1>
          {intersperse(pages, <Separator />, 'separator')}
        </div>
      </div>
    </div>
  )
}

export default styled(Course)`
  position: relative;
  height: 100%;
  text-align: center;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .container {
    backdrop-filter: blur(25px) grayscale(0.3) brightness(0.15);
    width: 100%;
  }

  .content {
    padding: 10px;
  }
`
