import axios from "axios";

const API_KEY = 'UoHQUDCvRBuTNdXQjQLYdkKEw6mkm3rK6mSzUN2Q';
const LATEST_ENDPOINT = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=';


export function getPhotos(filters){
  const parsedData = [];

  if(!filters.rover){
    axios.get(LATEST_ENDPOINT+API_KEY)
    .then(res => {
      res.data.latest_photos.slice(0,25).forEach(photo => {
        parsedData.push({
          'img_src' : photo.img_src,
          'rover': photo.rover.name,
          'camera' : photo.camera.full_name
        });
      });
      return parsedData;
    })
    .catch(err => {
      console.log(err, 'There was an error connecting to NASA');
      return;
      })
  }
}