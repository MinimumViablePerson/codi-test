import React from 'react'
import styled from 'styled-components'

import { useAuth0 } from '@auth0/auth0-react'

import { ReactComponent as Icon } from '../../assets/svgs/user-icon.svg'

function SignInButton({ className }) {
  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    isLoading,
    logout
  } = useAuth0()
  let content

  if (isLoading) {
    content = <button>Loading...</button>
  } else if (!isAuthenticated) {
    content = (
      <button onClick={loginWithRedirect}>
        Sign in <Icon className="user-icon" />
      </button>
    )
  } else {
    content = (
      <div className="user">
        <p>{user.given_name || user.name || user.nickname} </p>
        {user.picture ? (
          <img
            className="user-avatar"
            src={user.picture}
            alt="profile"
            onClick={logout}
          />
        ) : (
          <Icon className="user-icon" onClick={logout} />
        )}
      </div>
    )
  }

  return <div className={className}>{content}</div>
}

export default styled(SignInButton)`
  button {
    cursor: pointer;
    border: solid 1px var(--white);
    border-radius: 3px;

    background-color: transparent;
    color: var(--white);

    padding: 3px 15px;
    font-size: 1rem;

    display: flex;
    align-items: center;

    transition: 200ms;
  }

  button:hover {
    background-color: var(--white);
    color: var(--black);
  }

  button:hover .user-icon path {
    fill: var(--black);
  }

  .user {
    display: flex;
    align-items: center;
  }

  .user-avatar {
    width: 30px;
    border-radius: 50%;
    margin-left: 10px;
  }

  .user-icon {
    width: 25px;
    margin-left: 10px;
  }

  .user-icon path {
    fill: var(--white);
  }
`
