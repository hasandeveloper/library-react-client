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
    // if(action.type === "ADD_LIBRARY"){
        switch(action.type) {
            case "ADD_LIBRARY":
              return [...state, action.payload]
            case "EDIT_LIBRARY":
              // code block
              break;
            default:
              return state
          }

        
    // }
};


export const LibraryContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(libraryReducer, INITIAL_STATE)

    //Add todo action

    const addLibraryAction = async (name) => {

                    // Add ajax code for library create request
                    let response
                    try{
                       response = await
                       axios.post(LIBRARY_URL, {
                            api_v1_library:{
                                name: name
                            }
                       },{
                        headers: {
                            'Authorization': `${token}`
                        }
                      })
                      
                      if(response.status === 201){
                            dispatch({
                                type: "ADD_LIBRARY",
                                payload: response.data
                            })
                      }

                    }catch(error){
                        alert(error)
                    }
    }
    return(
        <>
            <LibraryContext.Provider value={{state, addLibraryAction}}>{children}</LibraryContext.Provider>
        </>
    )
}



