import React, { Component } from 'react'
import PropTypes from 'prop-types'

const TodoItems = ()=>{
    getStyle = ()=>{
        
    //     if(this.props.todo.isCompleted) {
    //         return {
    //             color: 'green' 
    //         }
    // }else{
    //     return {color: 'red'}
    // }
    }
    return (
            <div >
                <p>{this.props.todo.id}: {this.props.todo.title} </p>
        
            </div>
        )
    }

TodoItems.propTypes ={
    todo: PropTypes.object.isRequired
}

export default TodoItems
