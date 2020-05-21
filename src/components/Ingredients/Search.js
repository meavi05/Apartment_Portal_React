import React,{useState, useEffect, useRef} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  console.log("REDNERING Search")
  const [searchString,setSearchString] =  useState('');
  const {Change} = props
  const inputRef=  useRef();
  useEffect(()=>{
    console.log("RENDERING SEARCH UseEffect")
    const timer = setTimeout(()=>{
      console.dir(searchString +' and '+inputRef.current.value)
      if(searchString === inputRef.current.value){
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
        Change(recievedIngredients);
       })}
    },500);
    return ()=>clearTimeout(timer);
  },[searchString,Change])
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" ref= {inputRef} onChange={(event)=>setSearchString(event.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
