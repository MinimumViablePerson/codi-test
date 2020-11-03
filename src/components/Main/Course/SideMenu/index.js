import React from 'react'
import styled from 'styled-components'

import { toSlug } from '../../../../helpers'

const icons = {
  video: `/assets/icons/video-icon.png`,
  lab: `/assets/icons/lab-icon.png`
}

function SideMenu({ className, course }) {
  return (
    <div className={className}>
      <ul>
        {course.pages.map(page => (
          <a key={`menu-item-${page.name}`} href={`#${toSlug(page.name)}`}>
            <li>
              <img src={icons[page.type]} alt="page type icon" /> {page.name}
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}

export default styled(SideMenu)`
  background-color: #000000dd;
  text-align: left;

  position: fixed;
  top: 100px;
  left: -220px;
  width: 250px;
  /* height: 100%; */

  backdrop-filter: grayscale(0.8) blur(5px);
  transition: 300ms;

  ul {
    padding-top: 10px;
  }

  li {
    padding: 5px 10px;
    list-style: none;

    display: flex;
    align-items: center;
  }

  li:hover {
    background-color: #ffffff70;
  }

  li img {
    width: 20px;
    filter: invert(100%);
    margin-right: 10px;
  }

  &:hover {
    left: 0;
  }
`
