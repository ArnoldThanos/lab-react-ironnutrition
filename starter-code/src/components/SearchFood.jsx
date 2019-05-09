import React, { Component } from 'react';

class SearchFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',    
    }
    this.handlerChange = this.handlerChange.bind(this);
    
  }  

  handlerChange(event) {
    let { name, value } = event.target;  
    this.setState({[name]: value}, () => {
      this.props.SearchFood(this.state); 
    })        
    // console.log(this.state)
  }

 

  
  render() {
    return (
      <div className="searchFood-container">        
          <label>Search</label>
          <input type="text" name="name" value={this.state.name} onChange={(e)=>this.handlerChange(e)}></input>      
      </div>
    )  
  }
}

export default SearchFood;