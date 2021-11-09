import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl";
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";


mapboxgl.accessToken =
  "pk.eyJ1IjoiYWRlb2xhb25hZHMiLCJhIjoiY2s0dTVoNGNkMXE4NDNkcDFnNjNveGRidCJ9.Od3e8VJC-_Y5KxLZEkapRw";

const Map = (props) => {
    console.log(props)

    useEffect(() => {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
        center: [-99.29011, 39.39172], //3.4, 6.45(Lagos) //-99.29011, 39.39172
        zoom: 3,
      });

      //  const directions = new MapboxDirections({
      //    accessToken: mapboxgl.accessToken,
      //    unit: "metric",
      //    profile: "mapbox/driving",
      //  });

      if(props.pickupCoordinates){

        addToMap(map, props.pickupCoordinates)
      }

      if(props.dropoffCoordinates){
        addToMap(map, props.dropoffCoordinates)
      }

      if(props.pickupCoordinates && props.dropoffCoordinates){
        map.fitBounds([
          props.dropoffCoordinates, 
          props.pickupCoordinates
        ], {
          padding:60
        })

      }

      // if(props.pickupCoordinates && props.dropoffCoordinates){
      //   addToMap(directions)
      // }
       
      // map.addControl(directions, "top-left"); 

    }, [props.pickupCoordinates, props.dropoffCoordinates]);



    const addToMap = (map, coordinates) => {   // add directions variable from useEffect as parameter
      const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        // .addControl(directions, "top-left") 
        .addTo(map);
        
    }

    

    return (
        <Wrapper id="map"></Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
    flex-1 h-1/2
`


// map.addControl(directions, "top-left"); 