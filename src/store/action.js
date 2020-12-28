export const deleteIngredientAction = (id) => {
    return {
        type: 'DELETE_INGREDIENT',
        id: id
    }
}

export const addIngredientAction = (id, ingredient) => {
    return {
        type: 'ADD_INGREDIENT',
        id: id,
        ingredient: ingredient
    }
}

export const initIngredientsAction = (receivedIngredients) => {
    return {
        type: 'INIT_INGREDIENTS',
        receivedIngredients: receivedIngredients
    }
}
export const updateIngredientsAction = (id, receivedIngredients) => {
    return {
        type: 'UPDATE_INGREDIENT',
        id: id,
        receivedIngredients: receivedIngredients
    }
}

export const authorizeUserSuccess = (token) => {
    localStorage.setItem('token', token);
    return {
        type: 'LOGIN_USER_SUCCESS',
        token: token
    }
}
export const authorizeUserFailed = () => {
    return {
        type: 'AUTHORIZE_USER_FAILED'
    }
}
export const updateUserData = (userData) => {
    return {
        type: 'UPDATE_USER_DATA',
        userData: userData
    }
}
export const updateTenant = (tenantData) => {
    return {
        type: 'UPDATE_TENANT_DATA',
        tenantData: tenantData
    }
}
export const logOutAction = () => {
    return {
        type: 'LOGOUT_USER'
    }
}

export const addApartmentSuccess = (obj) => {
    return {
        type: 'ADD_APARTMENT_SUCCESS',
        obj: obj
    }
}
export const addApartmentFailed = () => {
    return {
        type: 'ADD_APARTMENT_FAILED',
    }
}
export const deleteTenantSuccess = (email, apartmentId) => {
    return {
        type: 'DELETE_TENANT_SUCCESS',
        email: email,
        apartmentId: apartmentId
    }

}
export const deleteTenantFailed = () => {
    return {
        type: 'DELETE_TENANT_FAILED'
    }

}
export const addTenantSuccess = (values) => {
    return {
        type: 'ADD_TENANT_SUCCESS',
        obj: values
    }

}
export const addTenantFailed = () => {
    return {
        type: 'ADD_TENANT_FAILED'
    }

}

