
import { actions } from './../../ImportComponents'
export default function SubmitForm(props, identifier, values, dispatch) {
    switch (identifier) {
        case 'AddApartment': {
            let user = {
                userId: props.userDetail.userId,
                userName: props.userDetail.userName,
                email: props.userDetail.email
            }
            let updatedObj = { ...values, user }
            console.log(updatedObj)
            dispatch(actions.addApartmentAction(updatedObj))
            break;
        }
        case 'AddTenant': {
            let apartment = { apartmentId: values.apartmentName }
            let updatedObj = { ...values, apartment }
            dispatch(actions.addTenantAction(updatedObj))
            dispatch(actions.updateTenant({}))
            break;
        }
        default: break;
    }
}
