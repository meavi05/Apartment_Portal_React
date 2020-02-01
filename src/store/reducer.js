const initialState = {
    ingredients : [],
    loading : false,
    error : false
}

const reducer = (state=initialState,action) =>{
    switch(action.type) {
        case 'DELETE_INGREDIENT' : {
            const updatedIngredients = state.ingredients.filter(ing => ing.id !== action.id)
            return  {...state, ingredients : updatedIngredients}
        }
        case 'INIT_INGREDIENTS' : {
            return {...state, ingredients: action.receivedIngredients}
        }
        case 'ADD_INGREDIENT' :{
            const addedIngredient = {id : action.id,...action.ingredient}
            const updatedIngredients = [...state.ingredients,addedIngredient]
            return {...state, ingredients : updatedIngredients}
        }
        case 'UPDATE_INGREDIENT' :{
            alert("update the ingredients")
            return state;
        }
        default:
        return state;
    }
}

export default reducer;

