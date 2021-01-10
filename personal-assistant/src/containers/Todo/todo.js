import React, { useReducer, useEffect } from 'react'
import { AllTodoInputs, InputGroup, Title } from './styles'
import FormButton from './components/FormButton/formButton'
import FormInput from './components/FormInput/formInput'
import TodoList from './components/TodoList/TodoList'
import { nanoid } from 'nanoid'

const reducer = (prevState, payload) => ({ ...prevState, ...payload })

const Todo = () => {
  const [item, setItem] = useReducer(reducer, 
    {todoList: JSON.parse(localStorage.getItem('todoList')) || [], searchList: [], 
    searchTerm: '', todo: ''})

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(item.todoList))
  }, [item.todoList])

  const todos = () => {
    if (item.todoList.length === 0) {
      return (<TodoList type="noTodo" />)
    } 
    else if (item.searchTerm.length > 0) {
      if (item.searchList.length === 0) {
        return (<TodoList type="noResults" />)
      }
      return (<TodoList renderedList={item.searchList} value={item} setValue={setItem} />)
    }
    return (<TodoList renderedList={item.todoList} value={item} setValue={setItem} />) 
  }

  return (
    <>
      <Title>To-do List</Title>
      <AllTodoInputs>
        <InputGroup>
          <FormInput type='add' value={item} setValue={setItem} placeholder='To-do item' />
          <FormButton action={() => { item.todo.trim() !== '' && 
                      setItem({ 'todoList': item.todoList.concat({key: nanoid(), todo: item.todo.trim()})}); 
                      setItem({'todo': ('') })}} button='Add' />
        </InputGroup>
        <FormInput type='search' value={item} setValue={setItem} placeholder='Search for specific tasks' />
      </AllTodoInputs>
      <br />
      { todos() }
    </>
  )
}

export default Todo