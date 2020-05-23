import React, { useState } from 'react'
import { TenantForm, ApartmentForm, Apartments, Tenants, actions } from './../../ImportComponents'
import { Button, Row, Col, Card } from 'react-bootstrap'
import { ButtonGroup, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { connect, useDispatch } from 'react-redux'

const HomePage = (props) => {
    console.log('RENDERING HOMEPAGE..')
    const [rSelected, setRSelected] = useState(null);
    const [showTenants, setShowTenants] = useState(false)
    const [showApartment, setShowApartment] = useState(true)
    const [tenants, setTenants] = useState([])
    const [apartment, setApartment] = useState()

    const dispatch = useDispatch()
    const submitForm = (identifier, values) => {
        switch (identifier) {
            case 'AddApartment': {
                console.log(values)
                let user = {
                    userId: props.userDetail.userId,
                    userName: props.userDetail.userName,
                    email: props.userDetail.email
                }
                let updatedObj = { ...values, user }
                console.log(updatedObj)
                setRSelected(null) //If I put this after dispatch it is not working
                dispatch(actions.addApartmentAction(updatedObj))
                break;
            }
            case 'AddTenant': {
                let apartment = { apartmentId: values.apartmentName }
                let updatedObj = { ...values, apartment }
                setRSelected(null)
                dispatch(actions.addTenantAction(updatedObj))
                setTenants([...tenants, values])
                break;
            }
            default: break;
        }
    }

    const onClickHandler = (element) => {
        switch (element) {
            case 'showAddApartment': {
                // setShowAddApartment(true)
                setRSelected(1)
                break;
            }
            case 'showAddTenant': {
                // setShowAddTenant(true)
                setRSelected(2)
                break;
            }
            default:
                console.log('ere')
                break;
        }
    }
    const loadTenants = (apartmentId) => {
        let apartment = props.userDetail.apartments.find(apartment => apartment.apartmentId === apartmentId)
        setShowTenants(true)
        setShowApartment(false)
        setApartment(apartment)
        setTenants(apartment.testtenants)
        console.log(tenants)
    }
    return (
        <Row style={{ height: '35rem' }}>
            <Col md="3">
                <Card style={{ width: '5rem', height: '5rem' }}>
                    <Card.Img variant="top" width={50} height={50} />
                </Card>
                <h3>Welcome {props.userDetail.userName}..!</h3>
                <ButtonGroup>
                    <Button variant="outline-warning" onClick={() => onClickHandler('showAddApartment')} active={rSelected === 1}>Add Apartment </Button >
                    <Button variant="outline-warning" onClick={() => onClickHandler('showAddTenant')} active={rSelected === 2}>Add Tenant  </Button >
                </ButtonGroup>
                <ApartmentForm
                    show={rSelected === 1}
                    onSubmit={(values) => submitForm('AddApartment', values)}>
                </ApartmentForm>
                <TenantForm
                    apartments={props.userDetail.apartments}
                    show={rSelected === 2}
                    onSubmit={(values) => submitForm('AddTenant', values)}>
                </TenantForm>
            </Col>
            <Col style={{ backgroundColor: 'darkorange' }}>
                <div className="d-flex flex-row" style={{ backgroundColor: 'darkorange' }}>
                    <div style={{ backgroundColor: 'darkorange' }} >
                        <h2>Your Data : </h2>
                        <label><b>Your Email : {props.userDetail.email}</b></label><br></br>
                        <label><b>Your Mobile : {props.userDetail.mobile}</b></label><br></br>
                        <label><b>Your DOB : {props.userDetail.dob}</b></label><br></br>
                    </div>
                </div>

                <Breadcrumb tag="nav" className="relay-breadcrumb">
                    <BreadcrumbItem tag="a" href="#"
                        onClick={() => { setShowApartment(true); setShowTenants(false) }}>Apartments</BreadcrumbItem>
                    {showTenants ? <BreadcrumbItem tag="a" href="#">Tenants</BreadcrumbItem> : null}
                    <BreadcrumbItem active ></BreadcrumbItem>
                </Breadcrumb>

                <Apartments
                    show={showApartment}
                    apartments={props.userDetail.apartments}
                    loadTenants={loadTenants}>
                </Apartments>
                <Tenants
                    show={showTenants}
                    tenants={tenants}
                    apartmentName={apartment && apartment.apartmentName}>
                </Tenants>
            </Col>
        </Row>
    )
}
const mapStateToProps = (state) => {
    return {
        userDetail: state.app.userData
    }
}
const mapDispatchToProps = () => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);