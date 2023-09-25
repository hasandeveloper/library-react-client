import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';

const ListLibrary = () => {
  const {state} = useContext(LibraryContext)
  return (
    <div>
      <h1> ListLibrary </h1>
      {state.map((library) => {
        return (
          <div key={library.id}>
            <ul>
              <li>Name: {library.name}</li>
              <li>Created: {library.created_at}</li>
              <li>Updated: {library.updated_at}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}


export default ListLibrary