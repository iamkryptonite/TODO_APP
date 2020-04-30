import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddTask extends Component{
    state={
        content:' ',
        id:null        
    }
    handlechange=(e)=>{
        this.setState({
            content:e.target.value,
            id: Math.random()
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addtask(this.state);
        this.setState({
            content:' '
        })        
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new task</label>
                    <input type="text" onChange={this.handlechange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        addtask: (todo) =>{dispatch({type: 'ADD_TASK',todo: todo})}
    }
}
export default connect(null,mapDispatchToProps)(AddTask)