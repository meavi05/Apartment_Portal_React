import React from 'react'
import { useDispatch, connect } from 'react-redux'
import { Button, Table } from 'react-bootstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { actions } from './../../ImportComponents'
const Tenants = (props) => {
  const dispatch = useDispatch()
  const editTenant = (email) => {
    const currentTenant = props.tenants.find(tenant => tenant.email === email)
    dispatch(actions.updateTenant({ ...currentTenant, apartmentName: props.apartment.apartmentId }))
    props.showTenantForm('update')
  }
  const deleteTenant = (email) => {
    if (props.editTenant.email === email)
      dispatch(actions.updateTenant({}))
    dispatch(actions.deleteTenant(email, props.apartment.apartmentId))
  }
  return (
    <div>
      <div>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>Tenant Name</th>
              <th>Tenant Email</th>
              <th>Tenant Mobile</th>
            </tr>
          </thead>
          <tbody>{
            props.tenants.map((tenant, index) => {
              return (
                <tr style={{ color: 'white' }} key={index}>
                  <td>{tenant.tenantName}</td>
                  <td>{tenant.email}</td>
                  <td>{tenant.mobile}</td>
                  <td>
                    <span style={{ float: 'left' }}>
                      <Button onClick={() => { editTenant(tenant.email) }}>
                        <FaEdit />
                      </Button>
                    </span>
                    <span style={{ float: 'right' }}>
                      <Button onClick={() => { deleteTenant(tenant.email) }}>
                        <FaTrash />
                      </Button>
                    </span>
                  </td>
                </tr>)
            })
          }
          </tbody>
        </Table>
      </div>
    </div >)
}
const mapStateToProps = (state) => {
  return {
    editTenant: state.app.tenant
  }
}
export default connect(mapStateToProps, null)(Tenants)