import React from 'react';
import Tasks from '../tasks';
import AddTasks from '../addtasks';
const Home = () =>{
    return (
        <div className="container">
            <h1 className="center black-text">Tasks</h1>
            <AddTasks/>
            <Tasks />                                                 
        </div>       
    )
}
export default Home