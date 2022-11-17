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
      filters:{}
    }

    this.updateFilters = this.updateFilters.bind(this);
  }

  updateFilters(rover, camera, sol, earthDay){
    const appliedFilters = {'rover' : rover, 'camera': camera, 'sol' :sol, 'earth':earthDay}; 
    this.setState({filters : appliedFilters});
    console.log(this.state, 'llega algo acá')
  }
  
  componentDidMount(){
    const fotos = getPhotos({});
    console.log(fotos, 'fotos')
    this.setState({nasa : fotos})
  }


  render() {
    return(
      <div className='container'>
      <Navbar updateFilters={this.updateFilters}/>
      <Gallery photos = {this.state.nasa}/>
    </div>
  )}
}

