import { useEffect } from 'react'
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWRlb2xhb25hZHMiLCJhIjoiY2s0dTVoNGNkMXE4NDNkcDFnNjNveGRidCJ9.Od3e8VJC-_Y5KxLZEkapRw";

const Map = () => {
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
        center: [-99.29011, 39.39172],
        zoom: 3,
      });
    });

    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
    flex-1
`
