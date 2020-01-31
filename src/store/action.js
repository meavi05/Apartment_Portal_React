export const deleteIngredientAction = (id) =>{
    return {
        type : 'DELETE_INGREDIENT',
        id : id
    }
}

export const addIngredientAction = (id,ingredient) =>{
    return {
        type : 'ADD_INGREDIENT',
        id : id,
        ingredient : ingredient
    }
}

export const initIngredientsAction = (receivedIngredients) =>{
    return {
        type : 'INIT_INGREDIENTS',
        receivedIngredients : receivedIngredients
    }
}