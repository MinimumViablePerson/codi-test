import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/common/Layout'
import Logo from './components/common/Logo'

import Home from './components/Home'

import Menu from './components/Menu'
import MenuItems from './components/Menu/MenuItems'

import Main from './components/Main'
import Course from './components/Main/Course'
import Learn from './components/Main/Learn'
import Chat from './components/Main/Chat'
import GetHelp from './components/Main/GetHelp'
import PageNotFound from './components/Main/PageNotFound'

function App() {
  return (
    <Layout>
      <Menu>
        <Logo />
        <MenuItems />
      </Menu>
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/courses/:name">
            <Course />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/get-help">
            <GetHelp />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Main>
    </Layout>
  )
}

export default App
