import React, { useState } from 'react'
import  TodoItems  from './TodoItems'
// import PropTypes from 'prop-types'

const Todos=()=>{
    const [todo, setTodo] = useState("")

    const onSubmit = (e) =>{
        e.preventDefault()
        console.log("Add Todo:" +todo )
        
    }


    return (
            <div>
            <div>
                <h2>Add To do</h2>
            <section>
                <form onSubmit={onSubmit}>
                    <div className="add-todo">
                    <input
				type='text'
				placeholder='Add todo...'
				value={todo}
				onChange={(event) => setTodo(event.target.value)}
			></input>
                    </div>
                    <div className="add-todo-btn">
                        <button type="submit" >Add</button>
                    </div>
                </form>
            </section>
            </div>
            <div className="todos">
            <h3>My todos</h3>
        
            <TodoItems todo={todo}/>
                
            </div>
            </div>
        )            
    }

export default Todos
