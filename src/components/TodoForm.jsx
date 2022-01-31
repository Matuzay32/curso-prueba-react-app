import React, { useState ,useEffect} from 'react';

const initialFormValues = {title:'',description:''}

export default function TodoForm({todoAdd,todoEdit,todoUpdate , setTodoEdit}) {

const [formValues, setFormValues]     = useState(initialFormValues);
const {title,description}             =formValues;
const [error, setError]               = useState(null);
const [succesMensage,setSuccesMensage] = useState(null);

useEffect(()=>{
  if(todoEdit !=null){
    setFormValues(todoEdit);
  }else{
    setFormValues(initialFormValues)
  }

},[todoEdit])


const handleInputChange=(e)=>{

  const changedFormValues ={
    ...formValues,
      [e.target.name]:e.target.value,
    

  }
 


  setFormValues(changedFormValues)


}
const handleSubmit=(e)=>{
  e.preventDefault();

  setTimeout(() => {
    setError(null);
      
    }, 4000);
  

  if(title.trim() ===''){
    setError('Debes indicar un titulo');
    return;

  }
  
  if(description.trim() ===''){
    setError('Debes indicar una descripcion');
    return;

  }


  if(todoEdit!= null){

    todoUpdate(formValues);
    setSuccesMensage("Tarea editada con exito")
    setFormValues(initialFormValues);

  }else{

    todoAdd(formValues);
    setSuccesMensage("Tarea agregada con exito")
  }



  setTimeout(() => {
  setSuccesMensage(null)
    
  }, 2000);
  setFormValues(initialFormValues);
  setError(null);


}




  return (
    <div className='container'>
    <h1>{todoEdit ? 'Editar tarea':' Nueva Tarea'}</h1>

    {todoEdit !=null &&
      <button onClick={()=>setTodoEdit(null)} className=' btn btn-primary m-3'> Cancelar Edicion</button>
      
      
      }
    
    <form onSubmit={handleSubmit}>

    <input onChange={handleInputChange}    name='title' value={title} type="text" placeholder='Titulo de la tarea' className='from-control'/>
    
    <textarea onChange={handleInputChange} name='description' value={description} className='from-control mt-3' placeholder='Descripcion'></textarea>
    
    <button className='btn btn-warning btn-block m-3'> {todoEdit?"Editando tarea": 'Agregar Tarea'}</button>

    {error && <div className='alert alert-danger mt-2'><h4>{error}</h4></div>}
    {succesMensage && <div className='alert alert-success mt-2'><h4>{succesMensage}</h4></div>}



    </form>
    
    
    </div>
  );
}
