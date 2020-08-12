import React from 'react'
import { Dropdown } from 'react-bootstrap'

const SearchResult = (props) => {
    let outputString = null

    if (props.isForTenant) {
        outputString = props.tempTenants.map((tenant, index) => (
            < Dropdown.Item eventKey={index} > {tenant.tenantName}</Dropdown.Item >
        ))
    }
    return (
        outputString
    )
}
export default SearchResult