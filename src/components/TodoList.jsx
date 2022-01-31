import React from "react";
import TodoCard from "./TodoCard";





export default function TodoList({todos,todoDelete,todoComplete,setTodoEdit}) {
	
    
    return (
		<>
			<h1 className="display-4"> Lista de tareas</h1>
			{
    
                todos.length ===0 ? <div className='alert alert-success mt-2'><h4>{'Agregue una nueva tarea'}</h4></div>  : 
                todos.map((e)=>{
                    return <TodoCard setTodoEdit={setTodoEdit} todoComplete={todoComplete}  key={e.id} todoDelete={todoDelete} todo={e}


                    />
                })
               
            }
		</>
	);
}
