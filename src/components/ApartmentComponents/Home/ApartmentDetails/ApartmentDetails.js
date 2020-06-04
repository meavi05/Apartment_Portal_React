import React, { useState } from 'react'
import Tenants from './../Tenants'
import TenantForm from './../../Forms/TenantForm'
import { Button, Row, Col } from 'react-bootstrap'
import { SubmitFormUtility } from './../../../ImportComponents'
import { useDispatch } from 'react-redux'
const ApartmentDetails = function (props) {
    const [show, setShow] = useState(true)
    const [isAddForm, setIsAddForm] = useState(true)
    const dispatch = useDispatch()
    const showTenantForm = (type) => {
        switch (type) {
            case 'add': {
                setShow(!show)
                setIsAddForm(true)
                break;
            }
            case 'update': {
                setShow(true)
                setIsAddForm(false)
                break;
            }
            default: break;
        }

    }
    const apartmentDetails = props.userDetail.apartments.map((apartment, index) => {
        if (apartment.apartmentId.toString() === props.match.params.apartmentId) {
            return <div key={index}>
                <h2>ApartmentName : {apartment.apartmentName}</h2>
                <Tenants tenants={apartment.testtenants} apartment={apartment} showTenantForm={showTenantForm}></Tenants>
            </div>
        }
        else return null
    })
    const submitForm = (identifier, values) => {
        SubmitFormUtility(props, identifier, values, dispatch)
    }

    return <div style={{ color: 'white' }}>
        <Row>
            <Col md="3">
                {!show ?
                    <Button variant="primary" onClick={() => showTenantForm('add')}>Add Tenants</Button> : null}
                <TenantForm
                    isAddForm={isAddForm}
                    show={show}
                    apartments={props.userDetail.apartments}
                    onSubmit={(values) => submitForm('AddTenant', values)}>
                </TenantForm>
            </Col>
            <Col>
                {apartmentDetails}
            </Col>
        </Row>
    </div>
}
export default ApartmentDetails