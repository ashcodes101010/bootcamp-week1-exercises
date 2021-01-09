import React from 'react'
import { Todos } from './styles'
import TodoItem from './components/TodoItem/TodoItem'


const TodoList = props => {
    if (props.type) {
      if (props.type === 'noTodo') {
        return ( <Todos><ul><div>You have no to-dos for today!</div></ul></Todos> )
      }
      return ( <Todos><ul><div>No results found</div></ul></Todos> )
    }
    
    return (
      <Todos>
        <ul>
          { props.renderedList.map( ({ todo, key }, index) => 
            <TodoItem item={todo} key={index} taskKey={key} {...props} />)}
        </ul>
      </Todos>
    )
}

export default TodoList