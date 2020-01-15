import React, {useState} from 'react';

import './IngredientList.css';
import ModifyIngredient from './ModifyIngredient/ModifyIngredient'

const IngredientList = props => {
  console.log('IngredientList')
  const [openIngredient,setOpenIngredient] = useState(false);
  const [editIngredient,setEditIngredient] =  useState();

  const modifyIngredient = (ingredient) =>{
   setOpenIngredient(!openIngredient);
   setEditIngredient(ingredient);
  }
  const deleteIngredient = (id) =>{
    props.deleteIngredient(id);
  }
  return (
    <React.Fragment>
   <ModifyIngredient showModal = {openIngredient} openEditIngredients = {modifyIngredient}
   ingredient = {editIngredient} ingredients = {props.ingredients} deleteIngredient={deleteIngredient}  ></ModifyIngredient>
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map(ig => (
          <li key={ig.id} data-toggle="modal" data-target="#largeModal" onClick = {() => modifyIngredient(ig)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
    </React.Fragment>
  );
};

export default IngredientList;
