import React from 'react'
import Todo from './containers/Todo/todo'
import Greeting from './containers/Greeting/greeting'
import SpecificTodo from './containers/SpecificTodo/specificTodo'
import { Switch, Route } from 'react-router-dom'
import { Background } from './styles'
import Nav from './components/Nav/nav'


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
