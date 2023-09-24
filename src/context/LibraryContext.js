import React, { useReducer, createContext } from 'react'
import axios from 'axios';
import { LIBRARY_URL } from '../utils/apiURL';

export const LibraryContext = createContext();

//initial state
const INITIAL_STATE = []   // add getLibrary function which call via axios for libraries get request and return to this INITIAL_STATE variable

//token
const token = localStorage.getItem("token");

//reducer
const libraryReducer = (state, action) => {
    if(action.type === "ADD_LIBRARY"){

        // Add ajax code for library create request
            const createLibrary = async (state) => {
                try{
                   const response = await
                   axios.post(LIBRARY_URL, {
                        api_v1_library:{
                            name: action.payload
                        }
                   },{
                    headers: {
                        'Authorization': `${token}`
                    }
                  })
                  if(response.status === 201){
                    debugger
                    // return [...state, response.data]
                  }
                  
                }catch(error){
                    // debugger
                }
            }
            createLibrary(state);
            // debugger
        // return [...state, action.payload]
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



