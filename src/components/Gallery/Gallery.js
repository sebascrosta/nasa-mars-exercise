import React, { Component } from "react";
import MarsPhoto from "../MarsPhoto/MarsPhoto";
import axios from "axios";
import './Gallery.css'

export default class Gallery extends Component {

  constructor(){
    super();

    this.state = {
      nasa: []

    }
  }

  componentDidMount(){
    const API_KEY = 'UoHQUDCvRBuTNdXQjQLYdkKEw6mkm3rK6mSzUN2Q';
    const NASA_ENDPOINT = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=';

    axios.get(NASA_ENDPOINT+API_KEY)
      .then(res => {
        this.setState({
          nasa: res.data
        })
      })
      .catch(err => {
        console.log(err, 'There was an error connecting to NASA');
      })
  }

  render() {
    if(this.state.nasa.latest_photos){
      return <div className="mars-wrapper">{
      this.props.photos.slice(0,25).map((item,i) => <MarsPhoto img_src = {item.img_src}
          rover = {item.rover}
          camera = {item.camera}
          key = {i} />)
      }
          </div>
    }

  }
}

