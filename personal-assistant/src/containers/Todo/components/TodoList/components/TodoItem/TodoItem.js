import React from 'react'
import { Delete, StyledLink } from './styles'


const TodoItem = ({ taskKey, item, renderedList, setValue, value }) => {
    const remove = (list, label) => {
      setValue({ [label]: list.filter(({ key }) => key !== taskKey) })
    }

    const link = `/todo/${taskKey}`

    return (
      <li>
        <StyledLink to={link}>{item}</StyledLink> 
        <Delete onClick={ () =>  { renderedList !== value.todoList && remove(value.searchList, 'searchList'); 
          remove(value.todoList, 'todoList') }}>x</Delete>
      </li>
    )
}

export default TodoItem