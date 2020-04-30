const initstate = {
    todos: [
        {id: 1,content:'deploy covid-19 project'},
        {id: 2,content:'learn mongoDB'}
      ]
}
const rootReducer =(state = initstate,action) =>{
    let newTask;
    if(action.type === 'DELETE_TASK'){
         newTask = state.todos.filter(todo=>{
            return action.id!=todo.id
        })
        return {
            ...state,
            todos:newTask
        } 
    }
    else if(action.type === 'ADD_TASK'){
        newTask = [...state.todos,action.todo];
        return {
            ...state,
            todos:newTask
        } 
    } 
    return state        
}
export default rootReducer; 
