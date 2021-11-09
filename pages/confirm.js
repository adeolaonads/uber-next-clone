import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import  { useRouter } from 'next/router'
import RideSelector from "./components/RideSelector";
import Link from "next/link";


const Confirm = () => {

    const router = useRouter()

  const {pickup, dropoff}  = router.query
  // console.log("Pickup", pickup)
  // console.log("Dropoff", dropoff)

  const [ pickupCoordinates, setpickupCoordinates ] = useState(0, 0)
  const [ dropoffCoordinates, setdropoffCoordinates ] = useState(0, 0)
  const [ directions, setDirections ] = useState(0, 0)

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
            setdropoffCoordinates(data.features[0].center);
          });
  }

  const getDirections = (pickup, dropoff) => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickup};${dropoff}?geometries=geojson&access_token=pk.eyJ1IjoiYWRlb2xhb25hZHMiLCJhIjoiY2s0dTVoNGNkMXE4NDNkcDFnNjNveGRidCJ9.Od3e8VJC-_Y5KxLZEkapRw`
    );
  }

   useEffect(() => {
     getPickCoordinates(pickup);
     getDropoffCoordinates(dropoff);
     getDirections(pickup, dropoff);
   }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Link href="/search">
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </ButtonContainer>
      </Link>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
}
 
export default Confirm;

const Wrapper = tw.div`
    flex h-screen flex-col 
`

const RideContainer = tw.div`
  flex-1 flex flex-col h-1/2 
`;

 const ConfirmButtonContainer = tw.div`
    border-t-2
 `

 const ConfirmButton = tw.div`
   bg-black text-white my-4 mx-4 py-4 text-center text-xl
 `

 const BackButton = tw.img`
    h-full object-contain
`


const ButtonContainer = tw.div`
    rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`