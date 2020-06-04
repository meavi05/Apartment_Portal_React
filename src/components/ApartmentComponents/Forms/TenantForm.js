import React from 'react'
// import {Button} from 'react-bootstrap'
import { Input, Button } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

const validate = values => {
  const errors = {}
  if (!values.tenantName) {
    errors.tenantName = 'Required'
  } else if (values.tenantName.length > 15) {
    errors.tenantName = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  if (!(values.apartmentName)) {
    errors.apartmentName = 'Required'
  } else if (values.apartmentName.length > 15) {
    errors.apartmentName = 'Must be 15 characters or less'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderField = ({
  input,
  label,
  type,
  disabled,
  hidden,
  meta: { touched, error, warning }
}) => (
    <div hidden={hidden}>
      <label><b>{label}</b></label>
      <div>
        <Input {...input} placeholder={label} type={type} disabled={disabled} />
        {touched &&
          ((error && <span style={{ color: 'black' }}>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

const select = ({
  input,
  apartments,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <label><b>{label}</b></label>
      <div>
        <Input {...input} placeholder={label} type={type}>
          <option value="">Select Apartment</option>
          {apartments.map((apartment, index) => {
            return (<option key={index} value={apartment.apartmentId}>{apartment.apartmentName}</option>)
          })}
        </Input>
        {touched &&
          ((error && <span style={{ color: 'black' }}>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

let TenantForm = props => {
  const { handleSubmit, pristine, reset, submitting, isAddForm } = props
  return (
    props.show ?
      <form onSubmit={handleSubmit}>
        <Field
          name="tenantId"
          type="number"
          component={renderField}
          label="TenantId"
          hidden
        />
        <Field
          name="tenantName"
          type="text"
          component={renderField}
          label="TenantName"
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
          disabled={!isAddForm ? true : false}
        />
        <Field
          name="age"
          type="number"
          component={renderField}
          label="Age"
        />
        <Field
          name="mobile"
          type="number"
          component={renderField}
          label="Mobile"
        />
        {isAddForm ?
          <Field name="apartmentName" component={select} type="select" apartments={props.apartments}
            label="Apartment Name">
          </Field> : null}
        <br></br>
        <div>

          <Button type="submit" color="primary" size="md" disabled={submitting}>
            {isAddForm ? 'Add Tenant' : 'Update'}
          </Button>
          <Button type="button" color="danger" disabled={pristine || submitting} onClick={reset}>
            Clear Values
        </Button>
        </div>
      </form> : null
  )
}
TenantForm = reduxForm({
  form: 'Tenant', // a unique identifier for this form
  validate,
  warn,
  enableReinitialize: true,
  // destroyOnUnmount: false,
})(TenantForm)

TenantForm = connect(
  state => ({
    initialValues: state.app.tenant
    // pull initial values from account reducer
  })
)(TenantForm)

export default TenantForm
