import React from 'react'
import {withRouter} from 'react-router-dom'
import {Button,Table} from 'react-bootstrap'
const Apartments = (props) => {
    const onClickHandler = (apartmentId) => {
       props.history.push(`/apartment/${apartmentId}`)
    }
    return (
    props.show ? <><h3 style={{color:'white'}}>Your Apartments:</h3><br></br>
    <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Apartment Name</th>
            <th>Apartment Number</th>
            <th>Apartment Location</th>
          </tr>
        </thead>
                <tbody>
                  {
                      props.apartments.map((apartment,index) =>{
                          return  (          
                          <tr style={{color:'white'}} key = {index}>
                              <td>{apartment.apartmentName}</td>
                              <td>{apartment.apartmentNumber}</td>
                              <td>{apartment.location}</td>
                              <td><Button onClick={() => onClickHandler(apartment.apartmentId)}>View Details</Button></td>
                              </tr>)
                      })
                  }
                </tbody>
  </Table>
    </>:null
    )}
export default withRouter(Apartments)