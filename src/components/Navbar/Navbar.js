import React, { Component } from "react";
import './Navbar.css'

export default class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {};
    this.handleFilter = this.handleFilter.bind(this);
  }
  
  handleFilter(e){
    e.preventDefault();
    console.log(this, 'handlefilter')
    
    if (this.filterSol && this.filterEarthDay){
      alert("You can't filter by Earth Day and Martian Sol at the same time, please delete one of the filters");
      return;
    }
    this.props.updateFilters(this.filterRover, this.filterCamera, this.filterSol, this.filterEarthDay);
    
  }

  render() {
    return(
    <div className="navbar">
        <form onSubmit={this.handleFilter}>
          <label>
            Choose a Rover
            <input
              name="filterRover"
              type="text"
              placeholder="Curiosity"
              value={this.state.filterRover}
              onChange={(e)=> this.filterRover = e.target.value}/></label>
          <label>
            Choose a Camera
            <input
              name="filterCamera"
              type="text"
              placeholder="NAVCAM"
              value={this.state.filterCamera}
              onChange={(e)=> this.filterCamera = e.target.value}/></label>
          <label>
            Filter by Sol
            <input
              name="filterSol"
              type="number"
              placeholder="0"
              value={this.state.filterSol}
              onChange={(e)=> this.filterSol = e.target.value}/></label>
          <label>
            Filter by Earth Day
            <input 
              type="date" 
              name="filterEarthDay"
              value={this.state.filterEarthDay}
              onChange={(e)=> this.filterEarthDay = e.target.value}/></label>

          <input className="btn-submit" value="Filter" type="submit"></input>
        </form>
      </div>
    )
  }
}

