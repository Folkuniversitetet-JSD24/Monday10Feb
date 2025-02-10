// 1. Import *useState and * useEffect
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  //Detta är JS eller TS land
  // 2. Skapa vår *dogImage* variabel och även *setDogImage*
  // Där sätter vi default värdet till null.
  // Detta för att vänta in våran fetch till att får sin responce

  let [dogImage, setDogImage] = useState(null);

  // 3. Skapa en useEffect function. Detta hanterar vår sidEffekt,
  // i detta fallet fetching data från våert API.
  useEffect(() => {
    //Fetching one dogImage
    //fetch("https://dog.ceo/api/breeds/image/random")
      //Fetching many dogs
      fetch("https://dog.ceo/api/breeds/image/random/15")
        .then((Response) => Response.json())
        // 4. Setting *dogIMage* to the url that we recived from the response above
        .then((data) => setDogImage(data.message));
  }, []);
  // END JS/TS-land

  
  return (
    // Detta är JSX-land
    <div className='App'>
      {/* 5. Using *dogImage* as the src for our image */}
      {/*<img width={"200px"} height={"200px"} src={dogImage}></img>*/}


      {/** 6. Using dogImage as the src for our image and 
       * map() our dogs into img-tagg  */}
      {
        dogImage && dogImage.map((dog) => (
          <img width={"200px"} height={"200px"} src={dog}></img>
        ))
      }

    </div>
  );
  

}

export default App
