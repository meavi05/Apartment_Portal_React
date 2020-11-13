import React from 'react'
import { Table, Card } from 'react-bootstrap'
import "./TenantDetails.css"
const TenantDetails = function (props) {
    console.log(props)
    return (
        <Table>
            <tr>
                <td>
                    <img alt='Profile' className="tenantDetails" src={require(`../../../../static/${props.tenantName}.jpg`)} ></img>
                </td>
                <td>
                    <Card>
                        <b>
                            {props.tenantName}<br></br>
                            {props.email}<br></br>
                        </b>
                        <i> {props.mobile}</i>
                    </Card>
                </td>
            </tr>
        </Table>

    )
}
export default TenantDetails