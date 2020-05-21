import React from 'react'
// import {Button} from 'react-bootstrap'
import { Input, Button } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.apartmentName) {
    errors.apartmentName = 'Required'
  } else if (values.apartmentName.length > 15) {
    errors.apartmentName = 'Must be 15 characters or less'
  }
  if (!values.location) {
    errors.location = 'Required'
  } 
  if (!values.apartmentNumber) {
    errors.apartmentNumber = 'Required'
  } else if (isNaN(Number(values.apartmentNumber))) {
    errors.age = 'Must be a number'
  } 
  return errors
}

const warn = values => {
  const warnings = {}
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

const AddApartmentForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    props.show ?
      <form onSubmit={handleSubmit}>
          <Field
          name="apartmentNumber"
          type="number"
          component={renderField}
          label="ApartmentNumber"
        />
        <Field
          name="apartmentName"
          type="text"
          component={renderField}
          label="Apartment Name"
        />
        <Field
          name="location"
          type="text"
          component={renderField}
          label="Location"
        />
            
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
  form: 'Apartment', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(AddApartmentForm)
