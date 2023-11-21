import { createSlice } from "@reduxjs/toolkit"

// Un compteur avec un step dynamique

// On utilise un store SOURCE DE VERITE
const initialState = {
    num : 0
}

console.log(initialState)

// rassemble deux choses : algo + data <=> reducer + store
const sliceCounter = createSlice({
    name : "counter",
    initialState,
    reducers : {
        // increment(7)
        increment : (state, action) => {
            const step = action.payload
            state.num += step 
        },
        incrementModulo : (state, action) => {

        }
    }
})

// export une action dans l'ensemble des actions du createSlice 
export const { increment } = sliceCounter.actions