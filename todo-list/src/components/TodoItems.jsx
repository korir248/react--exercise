import React from 'react'
// import PropTypes from 'prop-types'

const TodoItems = (props)=>{
    let todoText= document.createElement('h4')
    
    return (
            <div >
                {props.todo}
        
            </div>
        )
    }


export default TodoItems
