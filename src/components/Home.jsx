import React from 'react'
import AddLibrary from './AddLibrary'
import ListLibrary from './ListLibrary'
import { LibraryContextProvider } from '../context/LibraryContext'

const Home = () => {
  return (
    <>
      <LibraryContextProvider>
        <AddLibrary/>
        <ListLibrary/>
      </LibraryContextProvider>
    </>
  )
}

export default Home;