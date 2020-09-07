import React from 'react'
import { TenantDetails } from './../../ImportComponents'


const SearchResult = (props) => {
    let outputString = null

    if (props.isForTenant && props.tempTenants.length > 0) {
        outputString = props.tempTenants.map((tenant, index) => (
            <div style={{ color: 'black' }}>
                <TenantDetails {...tenant}></TenantDetails>
            </div>
        ))
    }
    return (
        outputString
    )
}
export default SearchResult