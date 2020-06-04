import Info from './ApartmentComponents/Info/Info'
import ApartmentForm from './ApartmentComponents/Forms/ApartmentForm'
import TenantForm from './ApartmentComponents/Forms/TenantForm'
import SubmitFormUtility from './ApartmentComponents/Forms/SubmitForm'
import Apartments from './ApartmentComponents/Home/Apartments'
import Tenants from './ApartmentComponents/Home/Tenants'
import ApartmentDetails from './ApartmentComponents/Home/ApartmentDetails/ApartmentDetails'
// import Main from '../Main/main'
import HomePage from './ApartmentComponents/Home/HomePage'
import Login from './FrontController/Login/Login'
import SignUp from './FrontController/SignUp/SignUp'
import FindItem from './IngredientComponents/Ingredients/FindItem/FindItem'
import * as  actions from '../store/action'

export {
    Info,HomePage,Login,SignUp,FindItem,actions,ApartmentForm,TenantForm,Apartments,Tenants,ApartmentDetails,SubmitFormUtility
}
