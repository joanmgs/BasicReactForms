//@ts-nocheck
import React, { useRef } from 'react'

function NoControlledForm() {
  const formNoControlled = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    const data = new FormData(formNoControlled.current);
    // ...data.entries() => is the name and value in an array of each field of the form
    const objData = Object.fromEntries([...data.entries()]); // transform all the entries in an object

    const { todoDescription, todoName, todoState } = objData;

    if (!todoDescription.trim() || !todoName.trim() || todoState === undefined) { 
      console.log("Not Admitted");
      return;
    };

    console.log("Passed!!");
  };

  return (
    <>
      <h2>No controlled form</h2>
      <form className='no-controlled-form' ref={formNoControlled} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Add to-do title'
          name='todoName'
          defaultValue="To-do title #1"
        />
        <textarea 
          name="todoDescription"
          placeholder='Add to-do description'
          defaultValue="To-do description #1"
        ></textarea>
        <select 
          name="todoState"
          defaultValue="DEFAULT"
        >
          <option value="DEFAULT" disabled>Select state of the task</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button type='submit'>Add!</button>
      </form>
    </>
  );
};

export default NoControlledForm
