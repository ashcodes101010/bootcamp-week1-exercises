import React from 'react'
import { Delete } from './styles'


const TodoItem = ({ taskKey, item, renderedList, setValue, value }) => {
    const remove = (list, label) => {
      setValue({ [label]: list.filter(({ key }) => key !== taskKey) })
    }
    return (
      <li>
        { item }
        <Delete onClick={ () =>  { renderedList !== value.todoList && remove(value.searchList, 'searchList'); 
          remove(value.todoList, 'todoList') }}>x</Delete>
      </li>
    )
}

export default TodoItem