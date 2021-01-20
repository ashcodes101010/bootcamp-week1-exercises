import React from 'react'
import { TextInput } from './styles'


const FormInput = ({ type, placeholder, value, setValue }) => {
  
    const searchChange = e => {
      setValue({ 'searchList': value.todoList.filter(({ todo }) => todo.toLowerCase().includes(e.target.value.toLowerCase()))})
      setValue({ 'searchTerm': e.target.value })
    }
  
    if (type === 'search') {
      return (
        <div>
          <TextInput placeholder={placeholder} value={value.searchTerm} 
                     onChange={e => searchChange(e)} />
        </div>
      )
    }
    return (
      <div>
        <TextInput placeholder={placeholder} 
                   value={value.todo} onChange={e => setValue({ 'todo': e.target.value })} />
      </div>
    )
}

export default FormInput