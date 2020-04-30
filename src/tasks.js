import React from 'react'
import {connect} from 'react-redux'
const Todos = (props)=>{    
    function handleclick(id){
        props.deleteTask(id);
    }    
    const todolist= props.todos.length ? (
        props.todos.map(todo =>{
            return (
                <div className="collection-item  grey darken-4 white-text" key={todo.id}>
                    <span onClick={()=>handleclick(todo.id)}>
                        {todo.content}
                    </span>
                </div>
            )
        })
    ) : (
        <p className="white-text">You have no tasks left</p>
    )
    return (
        <div className="todos collection grey darken-4">
          { todolist }
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        todos:state.todos
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        deleteTask: (id) =>{dispatch({type: 'DELETE_TASK',id: id})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos)

