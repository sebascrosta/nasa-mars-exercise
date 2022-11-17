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
      console.log(this.props.photos, 'props fotos')
      const info = this.state.nasa.latest_photos.slice(0,25);

      return <div className="mars-wrapper">{
      info.map((item,i) => <MarsPhoto img_src = {item.img_src}
          rover = {item.rover.name}
          camera = {item.camera.full_name}
          key = {i} />)
      }
          </div>
    }

  }
}

