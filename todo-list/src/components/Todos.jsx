import React, { useState } from 'react'
import  TodoItems  from './TodoItems'
// import PropTypes from 'prop-types'
import PropTypes from 'prop-types'

const Todos=()=>{
    const [todo, addTodo] = useState(initialState)
    return (
            <div>
            <div>
                <h2>Add To do</h2>
            <section>
                <form>
                    <div className="add-todo">
                        <input type="text" placeholder="Add todo"></input>
                    </div>
                    <div className="add-todo">
                        <button type="submit" onClick={showTodo}>Add</button>
                    </div>
                </form>
            </section>
            </div>
            <div className="todos">
            <h3>My todos</h3>
            {/* {this.props.todos.map((todo)=>(
                <TodoItems key={todo.id}todo={todo}/>
            ))} */}
                
            </div>
            </div>
        )            
    }
const showTodo = (e) =>{
    e.preventDefault()
    console.log(1)


}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos
