import React from 'react';

export default function TodoCard({todo,todoDelete,todoComplete,setTodoEdit}) {


   return <div className='card m-4'>
    <div className='card-body'>

        <h3 className='card-title'>
            {todo.title}
        <button onClick={()=>setTodoEdit(todo)} className='btn btn-danger m-4'>Editar</button>

        </h3>
        <p className='card-text'>
            {todo.description}
        </p>
        <hr/>
        <div className='d-flex justify-content-end'>

        <button onClick={()=>todoComplete(todo.id)}  className={`${todo.completed ?'btn m-4 btn-success':'btn btn-warning'}`}>{todo.completed?"Terminada":"Terminar"}</button>
       
        <button onClick={()=>todoDelete(todo.id)} className='btn btn-warning m-3'> Borrar</button>

        </div>
       
    </div>
  </div>
}
