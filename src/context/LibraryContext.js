import React, { useReducer, createContext } from 'react'

export const LibraryContext = createContext();

//initial state
const INITIAL_STATE = [10,20]

//reducer
const libraryReducer = (state, action) => {
    if(action.type === "ADD_LIBRARY"){
        return [...state, action.payload]
    }
};


export const LibraryContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(libraryReducer, INITIAL_STATE)

    //Add todo action

    const addLibraryAction = (name) => {
        dispatch({
            type: "ADD_LIBRARY",
            payload: name
        })
    }
    return(
        <>
            <LibraryContext.Provider value={{state, addLibraryAction}}>{children}</LibraryContext.Provider>
        </>
    )
}



