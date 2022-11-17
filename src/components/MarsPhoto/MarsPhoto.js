import React from "react";
import './MarsPhoto.css'

export default function MarsPhoto (props) {

  const {img_src, rover, camera} = props;
  return( <div className="mars-photo">
      {props && (
          <img src = {img_src} alt={rover + ' ' + camera} /> 
        )
      }
    </div>
  )
}