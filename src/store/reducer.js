const initialState = {
    ingredients: [],
    loading: false,
    error: false,
    authenicatedUser: false,
    userData: {
        apartments: []
    },
    apartments: [],
    tenant: {
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_INGREDIENT': {
            const updatedIngredients = state.ingredients.filter(ing => ing.id !== action.id)
            return { ...state, ingredients: updatedIngredients }
        }
        case 'INIT_INGREDIENTS': {
            return { ...state, ingredients: action.receivedIngredients }
        }
        case 'ADD_INGREDIENT': {
            const addedIngredient = { id: action.id, ...action.ingredient }
            const updatedIngredients = [...state.ingredients, addedIngredient]
            return { ...state, ingredients: updatedIngredients }
        }
        case 'UPDATE_INGREDIENT': {
            // alert("update the ingredients")
            let updatedIngredients = state.ingredients.filter(ing =>
                ing.id !== action.id)
            updatedIngredients = [...updatedIngredients, action.receivedIngredients]
            return { ...state, ingredients: updatedIngredients };
        }
        case 'AUTHORIZE_USER_SUCCESS': {

            const newState = { ...state, authenicatedUser: true };
            console.log(newState);
            return newState;
        }
        case 'AUTHORIZE_USER_FAILED': {

            const newState = { ...state, authenicatedUser: false };
            console.log(newState);
            return newState;
        }
        case 'UPDATE_USER_DATA': {
            const newState = { ...state, userData: action.userData, apartments: action.userData.apartments };
            console.log(newState);
            return newState;
        }
        case 'UPDATE_TENANT_DATA': {
            const newState = { ...state, tenant: action.tenantData };
            console.log(newState);
            return newState;
        }
        case 'ADD_APARTMENT_SUCCESS': {
            const apartmentsUnderUser = [...state.userData.apartments]
            const updatedUserApartmentsUnderUser = [...apartmentsUnderUser, action.obj]
            console.log(updatedUserApartmentsUnderUser);
            const updatedUserData = { ...state.userData, apartments: updatedUserApartmentsUnderUser }
            const userApartments = [...state.apartments, action.obj]
            return { ...state, userData: updatedUserData, apartments: userApartments }
        }
        case 'ADD_TENANT_SUCCESS': {
            const apartment = [...state.userData.apartments].find(apartment => apartment.apartmentId.toString() === action.obj.apartment.apartmentId.toString())
            const removeExistingTenant = apartment.testtenants.filter(tenant => tenant.tenantId.toString() !== action.obj.tenantId.toString())
            const newTenants = [...removeExistingTenant, action.obj]
            const updatedApartment = { ...apartment, testtenants: newTenants }
            const tempApartments = [...state.userData.apartments].filter(apartment => apartment.apartmentId.toString() !== action.obj.apartment.apartmentId.toString())
            const updatedUserApartmentsUnderUser = [...tempApartments, updatedApartment]
            const updatedUserData = { ...state.userData, apartments: updatedUserApartmentsUnderUser }
            return { ...state, userData: updatedUserData, apartments: updatedUserApartmentsUnderUser }
            // return {...state.userData,aprartments:updatedUserApartmentsUnderUser} 
            // return state
        }
        case 'DELETE_TENANT_SUCCESS': {
            const apartment = [...state.userData.apartments].find(apartment => apartment.apartmentId.toString() === action.apartmentId.toString())
            const deleteExistingTenant = apartment.testtenants.filter(tenant => tenant.email !== action.email)
            const updatedApartment = { ...apartment, testtenants: deleteExistingTenant }
            const tempApartments = [...state.userData.apartments].filter(apartment => apartment.apartmentId.toString() !== action.apartmentId.toString())
            const updatedUserApartmentsUnderUser = [...tempApartments, updatedApartment]
            const updatedUserData = { ...state.userData, apartments: updatedUserApartmentsUnderUser }
            return { ...state, userData: updatedUserData, apartments: updatedUserApartmentsUnderUser }
            // return {...state.userData,aprartments:updatedUserApartmentsUnderUser} 
            // return state
        }
        case 'LOGOUT_ACTION': {
            return { ...state, authenicatedUser: false }
        }
        default:
            return state;
    }
}

export default reducer;

