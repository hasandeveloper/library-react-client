import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';

const ListLibrary = () => {
  const {state, deleteLibraryAction} = useContext(LibraryContext)
  const deleteLibrary = (libraryId) =>{
    deleteLibraryAction(libraryId)
  }
  return (
    <div>
      <h1> ListLibrary </h1>
      {state.map((library) => {
        return (
          <div key={library.id}>
            <tr>
              <td>Name: {library.name}</td>
              <td><button onClick={() => {deleteLibrary(library.id)}}>Delete</button></td>
            </tr>
          </div>
        )
      })}
    </div>
  )
}


export default ListLibrary