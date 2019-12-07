import React, { useState,useEffect } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);


  useEffect(()=>{
    //console.log('rendering again');
  })

  const addIngredientHandler = ingredient => {
    fetch('https://react-hooks-62633.firebaseio.com/ingredients.json',{
      method:'POST',
      body:JSON.stringify(ingredient),
      headers: {'Content-Type':'application/json'}
    }).then(response => response.json()).then(responseData =>{
      setUserIngredients(prevIngredients => [
        ...prevIngredients,
        { id: responseData.name, ...ingredient }
      ]);
    });
  };
  const removeIngredientHandler = id => {
    setUserIngredients(prevIngredients => 
      prevIngredients.filter(ingredient =>{
        return (ingredient.id !== id)
         //return  ingredient;
      })
    );
  };

  const searchIngredientHandler = (recievedIngredients) =>{
    console.log('In search Handler')
    setUserIngredients(recievedIngredients);
  }

  return (
    <div className="App">
      <IngredientForm click={addIngredientHandler} />

      <section>
        <Search Change ={searchIngredientHandler}></Search>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
};

export default Ingredients;
