import React from 'react'
import {Button,Table} from 'react-bootstrap'
const Tenants = (props) =>{
    return(
        props.show ? <><h3 style={{color:'white'}}>For {props.apartmentName} Apartments:</h3><br></br>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Tenant Name</th>
      <th>Tenant Email</th>
      <th>Tenant Mobile</th>
    </tr>
  </thead>
  <tbody>{
    props.tenants.map(tenant => {
    {
            return  (          
            <tr style={{color:'white'}}>
                <td>{tenant.tenantName}</td>
                <td>{tenant.email}</td>
                <td>{tenant.mobile}</td>
                <td><Button  variant="light">Edit</Button></td>
                </tr>)
    }
})
}
  </tbody>
</Table></>: null)
}

export default Tenants