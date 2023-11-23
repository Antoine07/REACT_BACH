import { createSlice, configureStore } from "@reduxjs/toolkit"

// Un compteur avec un step dynamique

// On utilise un store SOURCE DE VERITE
const initialState = {
    num : 110, 
    step : 7, 
    count : 0,
    message : '', // les messages d'erreur à gérer 
}

const MAX_VAL_RANDOM = 100;

console.log(initialState)

// rassemble deux choses : algo + data <=> reducer + store
const sliceCounter = createSlice({
    name : "counter",
    initialState,
    reducers : {
        // LES ACTIONS
        increment : (state, action) => {
            state.message = '';
            const step = action.payload
            state.step = step 
            state.num += step 
            state.count += 1
        },
        decrementSimple : (state, action) => {
            state.message = '';
            // on vérifie que l'on peut avant retirer le step au nombre sinon on laisse la dernière valeur pour le compteur
            if ( state.num  - 1 < 0 ) 
            {
                state.message = "Attention vous ne pouvez plus décrémenter";
                return ;
            }

            state.num = state.num  - 1

        },
        decrement : (state, action) => {
            state.message = '';
            if ( state.num  - state.step < 0 ) 
            {
                state.message = "Attention vous ne pouvez plus décrémenter";
                return ;
            }
            // on vérifie que l'on peut avant retirer le step au nombre sinon on laisse la dernière valeur pour le compteur
            state.num =  state.num -1 * state.step 
        },
        incrementAlea : (state) => {
            state.message = '';
            const step = Math.floor( Math.random()*MAX_VAL_RANDOM )
            state.step = step 
            state.num += step 
            state.count += 1
        }
    }
})

// EXPORT DES ACTIONS
export const { increment, decrementSimple, decrement, incrementAlea } = sliceCounter.actions

// CONFIGURATION GLOBALE POUR REACT 
export default configureStore({
    reducer :{
        counter : sliceCounter.reducer
    }
})