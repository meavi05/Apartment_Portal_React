import React, { useState } from 'react'
import ApartmentOwner from './../../../static/Avinash.jpg'
import { TenantForm, ApartmentForm, Apartments, SubmitFormUtility } from './../../ImportComponents'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { ButtonGroup } from 'reactstrap'
import { connect, useDispatch } from 'react-redux'

const HomePage = (props) => {
    console.log('RENDERING HOMEPAGE')
    const [rSelected, setRSelected] = useState(null);

    const dispatch = useDispatch()
    const submitForm = (identifier, values) => SubmitFormUtility(props, identifier, values, dispatch)
    const onClickHandler = (element) => {
        switch (element) {
            case 'showAddApartment': {
                if (!rSelected || rSelected === 2)
                    setRSelected(1)
                else
                    setRSelected(null)
                break;
            }
            case 'showAddTenant': {
                if (!rSelected || rSelected === 1)
                    setRSelected(2)
                else
                    setRSelected(null)
                break;
            }
            default:
                console.log('ere')
                break;
        }
    }
    return (
        <Container fluid>
            <Row>
                <Col md="3">
                    <img src={ApartmentOwner} alt="ApartmentOwner" width="50" height="50" style={{ borderRadius: '100%', padding: '2px', background: 'white' }} />

                    <h3 style={{ color: 'white' }}>Welcome {props.userDetail.userName}..!</h3>
                    <ButtonGroup>
                        <Button variant="outline-warning" onClick={() => onClickHandler('showAddApartment')} active={rSelected === 1}>Add Apartment </Button >
                        <Button variant="outline-warning" onClick={() => onClickHandler('showAddTenant')} active={rSelected === 2}>Add Tenant  </Button >
                    </ButtonGroup>
                    <ApartmentForm
                        show={rSelected === 1}
                        onSubmit={(values) => submitForm('AddApartment', values)}>
                    </ApartmentForm>
                    <TenantForm
                        isAddForm={true}
                        apartments={props.userDetail.apartments}
                        show={rSelected === 2}
                        onSubmit={(values) => submitForm('AddTenant', values)}>
                    </TenantForm>
                </Col>
                <Col style={{ backgroundColor: 'darkorange' }}>
                    <Card style={{ backgroundColor: 'darkorange', width: '25rem', height: '11rem' }}>
                        <Card.Body>
                            <Card.Title>Your Data</Card.Title>
                            <Card.Text>
                                <label><b>Your Email : {props.userDetail.email}</b></label><br></br>
                                <label><b>Your Mobile : {props.userDetail.mobile}</b></label><br></br>
                                <label><b>Your DOB : {props.userDetail.dob}</b></label><br></br>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Apartments
                        show={true}
                        apartments={props.userDetail.apartments}>
                    </Apartments>
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