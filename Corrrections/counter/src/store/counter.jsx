import { createSlice, configureStore } from "@reduxjs/toolkit"

// Un compteur avec un step dynamique

// On utilise un store SOURCE DE VERITE
const initialState = {
    num : 110, 
    step : 7, 
    count : 0,
    message : '' // les messages d'erreur à gérer 
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
        decrementSimple : (state, action) => {
            // on vérifie que l'on peut avant retirer le step au nombre sinon on laisse la dernière valeur pour le compteur
            state.num =  state.num > 0 ? state.num  - 1 : state.num
        },
        decrement : (state, action) => {
            // on vérifie que l'on peut avant retirer le step au nombre sinon on laisse la dernière valeur pour le compteur
            state.num =  ( state.num - state.step > 0 ) ? state.num -1 * state.step : state.num
        },
    }
})

// EXPORT DES ACTIONS
export const { increment, decrementSimple, decrement } = sliceCounter.actions

// CONFIGURATION GLOBALE POUR REACT 
export default configureStore({
    reducer :{
        counter : sliceCounter.reducer
    }
})