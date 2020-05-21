import React, { useState } from 'react';

import Card from '../../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  console.log('RENDERING IngredientForm')
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const submitHandler = event => {
    event.preventDefault();
    // ..
    props.click({title: enteredTitle, amount: enteredAmount});
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            
            <input type="text" id="title" placeholder="Name" value={enteredTitle}
              onChange={event =>{
              setEnteredTitle(event.target.value);
                }
               } />
          </div>
          <div className="form-control">
            
            <input placeholder='Amount' type="number" id="amount" value={enteredAmount}
              onChange={event => {
                setEnteredAmount(event.target.value);
                }
              } />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
