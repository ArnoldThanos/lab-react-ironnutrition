import foods from './../foods.json'
import React, { Component } from 'react';
import FoodCard from './FoodCard.jsx';
import AddFood from './AddFood'
import SearchFood from './SearchFood'

class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      arrfoods: []
    }
    this.addFoodHandler = this.addFoodHandler.bind(this);
    this.searchFoodHandler = this.searchFoodHandler.bind(this);
  }

  addFoodHandler(OneFood) {
    const foodCopy = [...this.state.arrfoods]
    foodCopy.push(OneFood);
    this.setState({
      arrfoods:foodCopy
    })
  }

  searchFoodHandler(OneFood) {
    const foodCopy = [...foods]
    
    const searchedFood = foodCopy.filter(e =>
      e.name.toLowerCase().includes(OneFood.name.toLowerCase())     
    )
    console.log(OneFood.name.length)
    if(OneFood.name.length < 1 ){
      let test = []
      this.setState({
        arrfoods: test,
      })
    }     
    this.setState({
      arrfoods:searchedFood,
    })
  }


  render() {
    return (
      <div className="foods-container">
      <SearchFood SearchFood={this.searchFoodHandler}/>
      <AddFood AddFood={this.addFoodHandler}/>
        {
        this.state.arrfoods.map((OneFood, index) => {
          return <FoodCard key={index} {...OneFood}/>
        })
      }
      </div>
    )  
  }
}

export default FoodBox;
