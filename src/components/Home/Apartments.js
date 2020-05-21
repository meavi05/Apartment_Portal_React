import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {Button,Table} from 'react-bootstrap'
import * as actions from './../../store/action'
const Apartments = (props) => {
    const onClickHandler = (element,apartmentId) => {
        switch (element) {
            case 'showTenants': {
                props.loadTenants(apartmentId)
                break;
            }
            default:
                console.log('ere')
                break;
        }
    }
    return (
    props.show ? <><h3 style={{color:'white'}}>Your Apartments:</h3><br></br>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Apartment Name</th>
      <th>Apartment Number</th>
      <th>Apartment Location</th>
    </tr>
  </thead>
  <tbody>
    {
        props.apartments.map(apartment =>{
            return  (          
            <tr style={{color:'white'}}>
                <td>{apartment.apartmentName}</td>
                <td>{apartment.apartmentNumber}</td>
                <td>{apartment.location}</td>
                <td><Button  variant="light">Edit</Button></td>
                <td><Button onClick={() => onClickHandler('showTenants',apartment.apartmentId)}>View Tenents</Button></td>
                </tr>)
        })
    }
  </tbody>
</Table>
    </>:null
    )}
export default Apartments