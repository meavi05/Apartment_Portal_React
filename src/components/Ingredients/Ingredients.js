import React, { useState,useEffect } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorModal from '../UI/ErrorModal';

const Ingredients = (props) => {
  const [userIngredients, setUserIngredients] = useState([]);
  const [loading, setLoading] =useState(false);
  const [error, setError] =useState();

  useEffect(()=>{
    //console.log('rendering again');
  })

   
  const removeIngredientHandler = id => {
    setLoading(true);
    fetch(`https://react-hooks-62633.firebaseio.com/ingredients/${id}.json`,{
      method:'DELETE'
    }).then(response=>{
      setLoading(false);
      setUserIngredients(prevIngredients => 
        prevIngredients.filter(ingredient =>{
          return (ingredient.id !== id)
           //return  ingredient;
        })
      );
    }).catch(error => {
      setError(error.message);
    })
  };
  const addIngredientHandler = ingredient => {
    setLoading(true);
    fetch('https://react-hooks-62633.firebaseio.com/ingredients.json  ',{
      method:'POST',
      body:JSON.stringify(ingredient),
      headers: {'Content-Type':'application/json'}
    }).then(response => response.json()).then(responseData =>{
      setLoading(false);
      setUserIngredients(prevIngredients => [
        ...prevIngredients, 
        { id: responseData.name, ...ingredient }
      ]);
    }).catch(error =>{
      setError(error.message);
    })
  };
  

  const searchIngredientHandler = (recievedIngredients) =>{
    console.log('In search Handler')
    setUserIngredients(recievedIngredients);
    props.ingredients(recievedIngredients);
  }
  const closeError=()=>{
    setError(null);
    setLoading(false)
  }

  return (
    <div className="App">
      {error?<ErrorModal onClose={closeError}>{error}</ErrorModal>:null}
      <IngredientForm click={addIngredientHandler}  loading = {loading ? <LoadingIndicator/>:null}/>
      <section>
        <Search Change ={searchIngredientHandler}></Search>
        <IngredientList ingredients={userIngredients}  deleteIngredient = {removeIngredientHandler}/>
      </section>
    </div>
  );
};

export default Ingredients;
