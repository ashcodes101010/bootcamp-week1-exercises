import React from 'react'
import Todo from './containers/Todo/todo'
import Greeting from './containers/Greeting/greeting'
import { Switch, Route } from 'react-router-dom'
import { Background } from './styles'
import Nav from './components/Nav/nav'


const App = () => (
  <div>
    <head>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1"/>
    </head>
    <Background>
      <Nav />
      <Switch>
        <Route path='/todo'>
          <Todo />
        </Route>
        <Route path='/'>
          <Greeting />
        </Route>
      </Switch>
    </Background>
  </div>
)

export default App
