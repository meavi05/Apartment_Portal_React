
import axios from 'axios'
import customAxios from './../utils/customAxios'
//import jwtDecode from 'jwt-decode';

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
export const loadDataForUser = (email) => {
    return (dispatch) => {
        var url = `http://localhost:8080/getUserData/${email}`
        customAxios.get(url)
            .then(response => {
                console.log(response.data)
                dispatch(updateUserData(response.data))
            }
            )
            .catch(error => {
                alert('Error Occurred while fetching user Data')
            })

    }
}

export const registerUser = (userData) => {
    console.log('Register new user.. ' + userData)
    fetch('http://localhost:8080/addUser', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json()).then(responseData => {
        console.log('Success')
    }).catch(error => {
        alert(error.message)
    })
}


export function authorizeUserAction(email, password) {
    const params = new URLSearchParams({
        email: email,
        password: password
    }).toString();

    const url = "http://localhost:8080/login?" + params;
    var data = {};
    return dispatch => {
        axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            // let decodedToken = jwtDecode(response.data);
            dispatch(authorizeUserSuccess(response.data))
            dispatch(loadDataForUser(email))
        }).catch(error => {
            console.log(error.response)
            dispatch(authorizeUserFailed())
        })
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
export const addApartmentAction = (values) => {

    return dispatch => {
        // alert('in action')
        var obj = values
        fetch('http://localhost:8080/addApartment', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json()).then(responseData => {
            dispatch(addApartmentSuccess(responseData))
        }).catch(error => {
            alert(error.message)
            dispatch(addApartmentFailed())
        })

    }
}
export const addTenantAction = (values) => {

    return dispatch => {
        // alert('in action')
        var obj = values
        fetch('http://localhost:8080/addTenant', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json()).then(responseData => {
            dispatch(addTenantSuccess({ ...obj, ...responseData }))
        }).catch(error => {
            alert(error.message)
            dispatch(addTenantFailed())
        })

    }
}
export const deleteTenant = (email, apartmentId) => {
    return dispatch => {
        fetch(`http://localhost:8080/deleteTenant/${email}`, {
            method: 'DELETE'
        }).then(response => {
            dispatch(deleteTenantSuccess(email, apartmentId))
        }).catch(error => {
            alert(error.message)
            dispatch(deleteTenantFailed())
        })

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

export const getAllTenants = (apartmentId) => {
    return (dispatch) => {
        var url = `http://localhost:8080/getTenants/${apartmentId}`
        fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json()).then(
            responseData => {
                console.log(responseData)
                // dispatch(updateUserData(responseData))
            }
        )
            .catch(error => {
                alert('Error Occurred while fetching user Data')
            })

    }
}

