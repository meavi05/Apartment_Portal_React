import React from 'react'
import { Table } from 'react-bootstrap'
import "./TenantDetails.css"
const TenantDetails = function (props) {
    console.log(props)
    return (
        <Table>
            <tr>
                <td>
                    <img alt='Profile' className="tenantDetails" src={require(`../../../../static/${props.tenantName}.jpg`)} ></img>
                </td>
            </tr>
            <tr>
                <td> {props.tenantName}</td>
                <td> {props.email}</td>
                <td> {props.mobile}</td>
            </tr>
        </Table>

    )
}
export default TenantDetails