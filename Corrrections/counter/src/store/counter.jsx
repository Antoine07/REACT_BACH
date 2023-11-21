import { createSlice, configureStore } from "@reduxjs/toolkit"

// Un compteur avec un step dynamique

// On utilise un store SOURCE DE VERITE
const initialState = {
    num : 110, 
    step : 7, 
    count : 0
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
            state.step = step 
            state.num += step 
            state.count += 1
        },
        decrement : (state, action) => {

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