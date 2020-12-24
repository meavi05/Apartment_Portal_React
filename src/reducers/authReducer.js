import jwtDecode from 'jwt-decode'
import storage from 'redux-persist/lib/storage';
const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER_REQUEST': {
            return Object.assign({}, state, {
                'isAuthenticating': true,
                'statusText': null
            });
        }
        case 'LOGIN_USER_SUCCESS': {
            console.log(jwtDecode(action.token))
            return Object.assign({}, state, {
                'isAuthenticating': false,
                'isAuthenticated': true,
                'token': action.token,
                'userName': jwtDecode(action.token).userName,
                'statusText': 'You have been successfully logged in.'
            });
        }
        case 'LOGIN_USER_FAILURE': {
            return Object.assign({}, state, {
                'isAuthenticating': false,
                'isAuthenticated': false,
                'token': null,
                'userName': null,
                'statusText': `Authentication Error: ${action.status} ${action.statusText}`
            });
        }
        case 'LOGOUT_USER': {
            storage.removeItem('persist:root')
            return Object.assign({}, state, {
                'isAuthenticated': false,
                'token': null,
                'userName': null,
                'statusText': 'You have been successfully logged out.'
            });
        }
        default:
            return state;
    }
}
export default authReducer;