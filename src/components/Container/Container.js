import React, { Component } from "react";
import Gallery from "../Gallery/Gallery";
import Navbar from "../Navbar/Navbar";
import './Container.css'
import { getPhotos } from "../../services/Nasa.service";

export default class Container extends Component {

  constructor(){
    super();

    this.state = {
      nasa: [],
      filters:{},
    }

    this.updateFilters = this.updateFilters.bind(this);
  }

  updateFilters(rover, camera, sol, earthDay){
    const appliedFilters = {'rover' : rover, 'camera': camera, 'sol' :sol, 'earth':earthDay}; 
    this.setState({filters : appliedFilters});
  }
  
  componentDidMount(){
    const fotos = getPhotos({});
    this.setState({nasa : fotos})
    console.log(this.state.nasa, 'nasa')
  }

// toDo: add Load More button component, which will add the parameter "page"
  render() {
    return(
      <div className='container'>
      <Navbar updateFilters={this.updateFilters}/>
      <Gallery photos = {this.state.nasa}/>
    </div>
  )}
}

