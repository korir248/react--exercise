import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItems extends Component {
    getStyle = ()=>{
        
    //     if(this.props.todo.isCompleted) {
    //         return {
    //             color: 'green' 
    //         }
    // }else{
    //     return {color: 'red'}
    // }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.id}: {this.props.todo.title} </p>
            </div>
        )
    }
}
TodoItems.propTypes ={
    todo: PropTypes.object.isRequired
}

export default TodoItems
