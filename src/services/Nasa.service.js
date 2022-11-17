import axios from "axios";

const API_KEY = "UoHQUDCvRBuTNdXQjQLYdkKEw6mkm3rK6mSzUN2Q";
const LATEST_ENDPOINT =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=";
const BASE_ENDPOINT = "https://api.nasa.gov/mars-photos/api/v1/rovers/";

export function getPhotos(filters) {
  const parsedData = [];

  if (!filters.rover) {
    axios
      .get(LATEST_ENDPOINT + API_KEY)
      .then((res) => {
        res.data.latest_photos.slice(0, 25).forEach((photo) => {
          parsedData.push({
            img_src: photo.img_src,
            rover: photo.rover.name,
            camera: photo.camera.full_name,
          });
        });
      })
      .catch((err) => {
        console.log(err, "There was an error connecting to NASA");
        return;
      });
  } else {
    // toDo: check filters not working, data not available on updateFilters
    let endpoint = BASE_ENDPOINT + filters.rover + "/photos?";

    if (filters.earthDay) {
      endpoint += "earth_date=" + filters.earthDay + "&camera=";
    }

    if (filters.sol) {
      endpoint += "sol=" + filters.sol + "&camera=";
    }

    endpoint += filters.camera ? filters.camera : "all&api_key=";

    axios
      .get(endpoint + API_KEY)
      .then((res) => {
        res.data.latest_photos.slice.forEach((photo) => {
          parsedData.push({
            img_src: photo.img_src,
            rover: photo.rover.name,
            camera: photo.camera.full_name,
          });
        });
      })
      .catch((err) => {
        console.log(err, "There was an error connecting to NASA");
        return;
      });
  }

  return parsedData;
}
