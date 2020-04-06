// eslint-disable-next-line
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, withLeaflet } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { popupContent } from "../popup";
import './MapComponent.css'
import axios from 'axios';




delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


class MapComponent extends Component {
  constructor(){
    super();
    this.state = {
      phData:{},
      Markerposition:[]
     }
  }

  componentDidMount(){
    axios.get('https://coronavirus-ph-api.herokuapp.com/facilities')
        .then(res => res)
        .then((data) => {
          this.setState({Markerposition: data.data})
        }) 
  }



  render() {
    const position = [ "14.599512", "120.984222"]
    const zoom = 5;

    const marker = (
        <div>
          {
                this.state.Markerposition.map((pos, index) => {
                const markPosition = [pos.latitude, pos.longitude];
                return <Marker position={markPosition} key={index}>
                          <Popup className="request-popup">
                              <div style={popupContent}>
                                <p>Hospital: {pos.facility}</p>
                                <p>Confirmed Cases: {pos.confirmed_cases}</p>
                                <p>Person Under Investigation {pos.puis}</p>
                              </div>
                          </Popup>
                        </Marker>
                })
          }
        </div>

    )

    return (
      <div>
        <Map className="map-container" center={position} zoom={zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {marker}  
        </Map>      
      </div>
    )
  }
}

export default withLeaflet(MapComponent)


// import React, { Component } from 'react'
// import { Map, TileLayer, Marker, Popup, withLeaflet } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import { popupContent } from "../popup";
// import './MapComponent.css'
// import axios from 'axios';




// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });


// class MapComponent extends Component {
//   constructor(){
//     super();
//     this.state = {
//       Markerposition:[]
//      }
//   }

//   componentDidMount(){
//     axios.get('https://coronavirus-ph-api.herokuapp.com/cases')
//         .then(res => res)
//         .then((data) => {
//           this.setState({Markerposition: data.data})
//           console.log(data);
//         })
//   }



//   render() {
//     const position = [ "14.599512", "120.984222"]
//     const zoom = 6;

//     const marker = (
//         <div>
//           {
//                 this.state.Markerposition.map((pos, index) => {
//                   // console.log(pos);
//                 const markPosition = [pos.latitude, pos.longitude];
//                 console.log(markPosition);
//                 return <Marker position={position} key={index}>
//                           <Popup className="request-popup">
//                               <div style={popupContent}>
//                                 {/* <p>Hospital: {pos.attributes.hf}</p>
//                                 <p>Person Under Investigation: {pos.attributes.PUIs} </p> */}
//                               </div>
//                           </Popup>
//                         </Marker>
//                 })
//           }
//         </div>

//     )

//     return (
//       <div>
//         <Map className="map-container" center={position} zoom={zoom}>
//           <TileLayer
//             attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           {/* {marker}   */}
//         </Map>      
//       </div>
//     )
//   }
// }

// export default withLeaflet(MapComponent)