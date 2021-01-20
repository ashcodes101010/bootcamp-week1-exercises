import React from 'react'
import Todo from './containers/Todo'
import Greeting from './containers/Greeting'
import SpecificTodo from './containers/SpecificTodo'
import { Switch, Route } from 'react-router-dom'
import { Background } from './styles'
import Nav from './components/Nav'


const App = () => (
  <div>
    <Background>
      <Nav />
      <Switch>
        <Route path='/todo/:id'>
          <SpecificTodo />
        </Route>
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
