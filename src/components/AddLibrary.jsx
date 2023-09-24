import React, { useState, useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';

const AddLibrary = () => {
   const {state, addLibraryAction} = useContext(LibraryContext)
   console.log(state)
   const [name, setName] = useState("");

   
   const handleNameChange = (e) => {
        setName(e.target.value)
   };

   const handleSubmit = (e) => {
    e.preventDefault()
    addLibraryAction(name)
   }
   
  
  return (
    <div>
        <title>Library</title>
        <form onSubmit={handleSubmit}>
            <input type={name} onChange={handleNameChange}></input>
            <button type="submit">Add</button>
        </form>
    </div>
  )
};

export default AddLibrary;