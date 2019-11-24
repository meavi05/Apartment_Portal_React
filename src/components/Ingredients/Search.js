import React,{useState, useEffect} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [searchString,setSearchString] =  useState('');
  useEffect(()=>{
    console.log("RENDERING SEARCH")
    fetch('https://react-hooks-62633.firebaseio.com/ingredients.json')
    .then(response=>response.json())
    .then(responseData =>{
      let recievedIngredients =[];
      for(let key in responseData){
        recievedIngredients.push({
          id : key,
          title : responseData[key].title,
          amount: responseData[key].amount
        });
      }
      recievedIngredients = recievedIngredients.filter(ingredient=>
      ingredient.title.toLowerCase().indexOf(searchString.toLowerCase())!==-1) 
      props.Change(recievedIngredients);
     })
  },[searchString])
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" onChange={(event)=>setSearchString(event.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
