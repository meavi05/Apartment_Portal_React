import React, { useState } from 'react'
import TenantForm from './../Forms/TenantForm'
import AddApartmentForm from './../Forms/AddApartmentForm'
import Apartments from './Apartments'
import Tenants from './Tenants'
import { Button, Row, Col, Container } from 'react-bootstrap'
import { ButtonGroup,Breadcrumb,BreadcrumbItem } from 'reactstrap'
import { connect,useDispatch } from 'react-redux'
import * as actions from '../../../store/action'
const HomePage = (props) => {
    console.log('RENDERING HOMEPAGE..')
    const [rSelected, setRSelected] = useState(null);
    const [showAddTenant, setShowAddTenant] = useState(false)
    const [showAddApartment, setShowAddApartment] = useState(false)
    const [showTenants, setShowTenants] = useState(false)
    const [showApartment,setShowApartment] =  useState(true)
    const [tenants,setTenants] = useState([])
    const [apartment,setApartment] = useState()

    const dispatch = useDispatch()
    const submitForm = (identifier,values) => {
        switch(identifier){
            case 'AddApartment' : {
                console.log(values)
                let user = { 
                    userId : props.userDetail.userId,
                    userName : props.userDetail.userName,
                    email : props.userDetail.email
                }
                let updatedObj = {...values,user}
                console.log(updatedObj)
                dispatch(actions.addApartmentAction(updatedObj))
                setShowAddApartment(false)
                break;
            }
            case 'AddTenant' : {
                let apartment = {apartmentId : values.apartmentName}
                let updatedObj = {...values,apartment}
                dispatch(actions.addTenantAction(updatedObj))
                setTenants([...tenants,values])
                setShowAddTenant(false)
                break;
            }
            default : break;
        }
    }

    const onClickHandler = (element) => {
        switch (element) {
            case 'showAddApartment': {
                setShowAddApartment(true)
                setRSelected(1)
                break;
            }
            case 'showAddTenant': {
                setShowAddTenant(true)
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
        <Container fluid>
            <Row style={{ height: '35rem' }}>
                <Col sm="3">
                    <h1>Welcome {props.userDetail.userName}..!</h1>
                    <ButtonGroup>
                        <Button variant="outline-warning" onClick={() => onClickHandler('showAddApartment')} active={rSelected === 1}>Add Apartment </Button >
                        <Button variant="outline-warning" onClick={() => onClickHandler('showAddTenant')} active={rSelected === 2}>Add Tenant  </Button >
                        {/* <Button variant="outline-warning" onClick={() => onClickHandler('showViewApartment')} active={rSelected === 3}>View Apartments </Button > */}
                    </ButtonGroup>
                    <AddApartmentForm 
                        show={showAddApartment && rSelected === 1} 
                        onSubmit={(values)=> submitForm('AddApartment',values)}>
                    </AddApartmentForm>
                    <TenantForm
                        apartments = {props.userDetail.apartments} 
                        show={showAddTenant && (rSelected === 2)}
                        onSubmit={(values)=> submitForm('AddTenant',values)}>
                    </TenantForm>
                </Col>
                <Col style={{ backgroundColor: 'darkorange' }}>
                    <h2>Your Data : </h2>
                    <label><b>Your Email : {props.userDetail.email}</b></label><br></br>
                    <label><b>Your Mobile : {props.userDetail.mobile}</b></label><br></br>
                    <label><b>Your DOB : {props.userDetail.dob}</b></label><br></br>
                    <Breadcrumb tag="nav" className="relay-breadcrumb">
                        <BreadcrumbItem tag="a" href="#" 
                        onClick={()=>{setShowApartment(true);setShowTenants(false)}}>Apartments</BreadcrumbItem>
                        {showTenants ?<BreadcrumbItem tag="a" href="#">Tenants</BreadcrumbItem>:null}
                        <BreadcrumbItem active ></BreadcrumbItem>
                    </Breadcrumb>
                    <Apartments 
                        show = {showApartment} 
                        apartments = {props.userDetail.apartments}
                        loadTenants = {loadTenants}>
                    </Apartments>
                    <Tenants show = {showTenants} tenants = {tenants} apartmentName = {apartment && apartment.apartmentName}></Tenants>
                </Col>
            </Row>
        </Container>
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