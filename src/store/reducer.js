import * as actionTypes from './action'
const initialState = {
    ingredients : [],
    loading : false,
    error : false
}

const reducer = (state=initialState,action) =>{
    switch(action.type) {
        case 'DELETE_INGREDIENT' : {
            return  alert("hello.. you are in delete ingredient reducer for "+ action.id)
        }
        case 'INIT_INGREDIENTS' : {
            return {...state, ingredients: action.receivedIngredients}
        }
        case 'ADD_INGREDIENT' :{
            const addedIngredient = {id : action.id,...action.ingredient}
            const updatedIngredients = [...state.ingredients,...addedIngredient]
            return {...state, ingredients : updatedIngredients}
        }
        default:
        return state;
    }
}

export default reducer;

