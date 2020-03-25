const initialState = {
    ingredients : [],
    loading : false,
    error : false,
    authenicatedUser : false
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
           // alert("update the ingredients")
                let updatedIngredients = state.ingredients.filter(ing => 
                    ing.id !==action.id)
                updatedIngredients = [...updatedIngredients,action.receivedIngredients]
                return {...state,ingredients : updatedIngredients};
        }
        case 'AUTHORIZE_USER' :{

                 const newState = {...state,authenicatedUser : !state.authenicatedUser};
                 console.log(newState);
                 return newState;
         }
        default:
        return state;
    }
}

export default reducer;

