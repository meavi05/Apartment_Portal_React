import Authenticator from './ApartmentComponents/Authenticator/Authenticator'
import ApartmentForm from './ApartmentComponents/Forms/ApartmentForm'
import TenantForm from './ApartmentComponents/Forms/TenantForm'
import SubmitFormUtility from './ApartmentComponents/Forms/SubmitForm'
import Apartments from './ApartmentComponents/Home/Apartments'
import Tenants from './ApartmentComponents/Home/Tenants'
import ApartmentDetails from './ApartmentComponents/Home/ApartmentDetails/ApartmentDetails'
import TenantDetails from './ApartmentComponents/Home/TenantDetails/TenantDetails'
// import Main from '../Main/main'
import HomePage from './ApartmentComponents/Home/HomePage'
import Login from './FrontController/Login/Login'
import Register from './FrontController/Register/Register'
import FindItem from './IngredientComponents/Ingredients/FindItem/FindItem'
import * as  actions from '../store/action'
import FindSearch from './ApartmentComponents/FindSearch/FindSearch'
import MovingCarousel from '../components/UI/MovingCarousel'

export {
    Authenticator,
    HomePage,
    Login,
    Register,
    FindItem,
    actions,
    ApartmentForm,
    TenantForm,
    Apartments,
    Tenants,
    ApartmentDetails,
    SubmitFormUtility,
    FindSearch,
    TenantDetails,
    MovingCarousel
}
