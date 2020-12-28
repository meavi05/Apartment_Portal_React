import { actions } from './../components/ImportComponents'
import axios from 'axios'
import customAxios from './../utils/customAxios'

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
            dispatch(actions.authorizeUserSuccess(response.data))
            dispatch(actions.loadDataForUser(email))
        }).catch(error => {
            console.log(error.response)
            dispatch(actions.authorizeUserFailed())
        })
    }
}

export const loadDataForUser = (email) => {
    return (dispatch) => {
        var url = `http://localhost:8080/getUserData/${email}`
        customAxios.get(url)
            .then(response => {
                console.log(response.data)
                dispatch(actions.updateUserData(response.data))
            }
            )
            .catch(error => {
                alert('Error Occurred while fetching user Data')
            })

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
            dispatch(actions.addApartmentSuccess(responseData))
        }).catch(error => {
            alert(error.message)
            dispatch(actions.addApartmentFailed())
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
            dispatch(actions.addTenantSuccess({ ...obj, ...responseData }))
            dispatch(actions.updateTenant({}))
        }).catch(error => {
            alert(error.message)
            dispatch(actions.addTenantFailed())
        })

    }
}
export const deleteTenant = (email, apartmentId) => {
    return dispatch => {
        fetch(`http://localhost:8080/deleteTenant/${email}`, {
            method: 'DELETE'
        }).then(response => {
            dispatch(actions.deleteTenantSuccess(email, apartmentId))
        }).catch(error => {
            alert(error.message)
            dispatch(actions.deleteTenantFailed())
        })

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