import { createSlice, configureStore } from "@reduxjs/toolkit"

// Un compteur avec un step dynamique

// On utilise un store SOURCE DE VERITE
const initialState = {
    num : 110
}

console.log(initialState)

// rassemble deux choses : algo + data <=> reducer + store
const sliceCounter = createSlice({
    name : "counter",
    initialState,
    reducers : {
        // LES ACTIONS
        increment : (state, action) => {
            const step = action.payload
            state.num += step 
        },
        incrementModulo : (state, action) => {

        }
    }
})

// EXPORT DES ACTIONS
export const { increment } = sliceCounter.actions

// CONFIGURATION GLOBALE POUR REACT 
export default configureStore({
    reducer :{
        counter : sliceCounter.reducer
    }
})