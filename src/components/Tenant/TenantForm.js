import React from 'react'
// import {Button} from 'react-bootstrap'
import { Input, Button } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

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
  meta: { touched, error, warning }
}) => (
    <div>
      <label><b>{label}</b></label>
      <div>
        <Input {...input} placeholder={label} type={type} />
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
            {apartments.map(apartment=>{
             return( <option value = {apartment.apartmentId}>{apartment.apartmentName}</option>)
            })}
          </Input>
          {touched &&
            ((error && <span style={{ color: 'black' }}>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    )

const TenantForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    props.show ?
      <form onSubmit={handleSubmit}>
        <Field
          name="tenantName"
          type="text"
          component={renderField}
          label="tenantName"
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />
        <Field
          name="age"
          type="number"
          component={renderField}
          label="Age"
        />
                <Field name="apartmentName" component={select} type = "select" apartments = {props.apartments}
                label="Apartment Name">
          </Field>
        <br></br>
        <div>

          <Button type="submit" color="primary" size="md" disabled={submitting}>
            Submit
        </Button>
          <Button type="button" color="danger" disabled={pristine || submitting} onClick={reset}>
            Clear Values
        </Button>
        </div>
      </form> : null
  )
}

export default reduxForm({
  form: 'Tenant', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(TenantForm)
