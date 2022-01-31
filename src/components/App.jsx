import React, { useState , useEffect} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const todosList = [


];
const localTodos = JSON.parse( localStorage.getItem('todos'));

export default function App() {
const [todos, setTodos] 		= useState(localTodos||todosList);
const [todoEdit, setTodoEdit] 	= useState(null);

useEffect(()=>{
	localStorage.setItem('todos',JSON.stringify(todos))

},[todos])

const todoAdd = (todo)=>{

  const newTodo = {
    id:Date.now(),
    ...todo,
    completed : false
  }

  const changeTodos = [
    newTodo,
    ...todos
   

  ]

  setTodos(changeTodos)

}
const todoUpdate = (todoEdit) => {
	const changeTodos = todos.map((todo) => 	todo.id === todoEdit.id ? todoEdit    : todo);
	setTodos(changeTodos);

};
const todoDelete = (todoId) => {
		if(todoEdit&&todoId === todoEdit.id){
			setTodoEdit(null);
		}
		const changeTodos = todos.filter((todo) => {
			return todo.id != todoId;
		});


		setTodos(changeTodos);
};
const todoComplete = (todoId) => {
		const changeTodos = todos.map((todo) => 	todo.id === todoId ?  { ...todo, completed: !todo.completed }  : todo);
		setTodos(changeTodos);
};




	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-8">
					<h1 className=" display-3">Seccion de tareas </h1>
					
					<TodoList setTodoEdit={setTodoEdit} todoComplete={todoComplete} todoDelete={todoDelete} todos={todos}/>
				</div>

				<div className="col-4">
					<h1>Formulario</h1>
					<TodoForm todoUpdate={todoUpdate} todoAdd ={todoAdd} todoEdit={todoEdit} setTodoEdit={setTodoEdit} />
				</div>
			</div>
		</div>
	);
}
