import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const linkToCourse = name => '/courses/' + name.toLowerCase().replace(/ /g, '-')

function Course({ className, course: { name } }) {
  return (
    <Link to={linkToCourse(name)} className={className}>
      <div>
        <h2>{name}</h2>
      </div>
    </Link>
  )
}

export default styled(Course)`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 10px;

  div {
    position: relative;
    cursor: pointer;

    border-radius: 50%;

    display: grid;
    place-items: center;

    width: 200px;
    height: 200px;
  }

  & div::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${props => props.course.image});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    z-index: 1;

    filter: brightness(0.35) grayscale(0.6);
    transition: 300ms;

    border: solid 3px #ffffff50;
  }

  & div:hover::before {
    transform: scale(1.1);
    filter: brightness(0.6) grayscale(0);
  }

  h2 {
    color: #ffffffbb;
    text-align: center;
    z-index: 100;
    font-size: 1.7rem;
    transition: 300ms;
  }

  &:hover h2 {
    color: #ffffffff;
    transform: scale(1.4);
  }
`
