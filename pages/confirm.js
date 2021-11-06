import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { data } from "autoprefixer";
import  router, { useRouter } from 'next/router'

const Confirm = () => {

    const router = useRouter()

  const {pickup, dropoff}  = router.query
  console.log("Pickup", pickup)
  console.log("Dropoff", dropoff)

  const [ pickupCoordinates, setpickupCoordinates ] = useState()
  const [ dropoffCoordinates, setdropoffCoordinates ] = useState()

  const getPickCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
      new URLSearchParams({
          access_token: "pk.eyJ1IjoiYWRlb2xhb25hZHMiLCJhIjoiY2s0dTVoNGNkMXE4NDNkcDFnNjNveGRidCJ9.Od3e8VJC-_Y5KxLZEkapRw", 
          limit: 1
      })
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.features[0].center);
        setpickupCoordinates(data.features[0].center);
      });
  };     // 🚀 


  const getDropoffCoordinates = (dropoff) => {
        fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
              access_token:
                "pk.eyJ1IjoiYWRlb2xhb25hZHMiLCJhIjoiY2s0dTVoNGNkMXE4NDNkcDFnNjNveGRidCJ9.Od3e8VJC-_Y5KxLZEkapRw",
              limit: 1,
            })
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log("Dropoff")
            // console.log(data.features[0].center);
            setdropoffCoordinates(data.features[0].center);
          });
  }

   useEffect(() => {
     getPickCoordinates(pickup);
     getDropoffCoordinates(dropoff);
   }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map 
          pickupCoordinates = {pickupCoordinates}
          dropoffCoordinates = {dropoffCoordinates}
      />
      <RideContainer>
          <RideSelector>
              <ConfirmButtonContainer>

              </ConfirmButtonContainer>
          </RideSelector>
      </RideContainer>

    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
    flex flex-col h-screen
`

const RideContainer = tw.div`
  flex-1 
`

const RideSelector = tw.div`

`
 const ConfirmButtonContainer = tw.div`
 
 `