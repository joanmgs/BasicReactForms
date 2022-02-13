//@ts-nocheck
import React, { useState } from 'react';

function ControlledForm() {
  const [todo, setTodo] = useState({
    todoName: "title #1",
    todoDescription: "description of the todo",
    todoState: "Select state of the task",
    todoCheck: false,
  });
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    // Simple Validation
    if(!todo.todoName.trim() || !todo.todoDescription.trim() || !todo.todoState || todo.todoState === "Select state of the task") {
      setError(true);
      console.log("entra")
      return;
    };

    setError(false);
  };
  const handleChange = e => {
    const { name, type, checked, value } = e.target;
    // setTodo({
    //   ...todo, // it allows keep the changes and avoid erase the object
    //   [name]: type === "checkbox" ? checked : value, // name of field in input and value catched with onChange
    // });

    // Another way of do it
    setTodo(old => ({
        ...old,
        [name]: type === "checkbox" ? checked : value,
    }));
  };

  const DrawError = () => (<div className="alert-danger">Required</div>);

  return (
    <>
      <h2>Controlled Form</h2>
      <form 
        className='controlled-form'
        onSubmit={handleSubmit}
      >
        {error && <DrawError />} 
        <input 
          type="text" 
          placeholder='Add to-do title'
          name='todoName'
          onChange={handleChange}
          value={todo.todoName} //bind the input value with the state, onChange track the changes in the input and update the object
        />
        <textarea 
          name="todoDescription"
          placeholder='Add to-do description'
          onChange={handleChange}
          value={todo.todoDescription}
        ></textarea>
        <select 
          name="todoState"
          onChange={handleChange}
          value={todo.todoState}
        >
          <option disabled>Select state of the task</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <div className='checkbox-container'>
          <input
            id='todoCheckBox'
            type="checkbox"
            name='todoCheck'
            onChange={handleChange}
            checked={todo.todoCheck} //instead of value because is a checkbox
          />
          <label htmlFor='todoCheckBox'>
            Important?
          </label>
        </div>
        <button type='submit'>
          Add!
        </button>
      </form>
    </>
  );
};

export default ControlledForm;
