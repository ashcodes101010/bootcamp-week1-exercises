import React, { useReducer, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Todo, DescBox, ImgBox } from './styles'


const reducer = (prevState, payload) => ({ ...prevState, ...payload })

const SpecificTodo = () => {
    const { id } = useParams()
    const todos = JSON.parse(localStorage.getItem('todoList'))

    const [item, setItem] = useReducer(reducer, 
        {todoList: todos, task: todos.filter((todo) => todo.key === id)[0] || 0})
    
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(item.todoList))
    }, [item.todoList])

    if (item.task === 0) {
        return (
            <>
                <Todo>Sorry! That task does not exist.</Todo>
                <br />
                <ImgBox src="https://huddle.eurostarsoftwaretesting.com/wp-content/uploads/2018/04/sad-robot.gif" alt="sad robot" />
            </>
        )
    }

    return (
        <>
            <Todo>{item.task.todo}</Todo>
            <DescBox placeholder='Edit description of to-do' maxLength="500" value={item.task.desc} 
                onChange={
                    e => {item.task.desc = e.target.value; setItem({'todoList': item.todoList.map((task) => {
                        if (task.key === id) {return {'key': task.key, 'desc': e.target.value, 'todo': task.todo}}
                        return task
                    })})}
                }
            />
        </>
    ) 
}

export default SpecificTodo