import Gallery from './Gallery.js' 
import React, { useState, useEffect } from 'react'; 
import axios from 'axios' // Fetching
import './App.css' // Styling

// An imported function, for easy shuffling an array
var shuffleArr = require('shuffle-array')

// Where to store the local data for the photos list
const LOCAL_KEY = "photos_key";

function App() {

  //photos will be a list of objects containing titles
  //urls and ids. Whenever this state changes, this will 
  // cause react to render the components that need to be
  // changed. 
  const [photos, setPhotos] = useState([]);


  useEffect(() => {
    /*
    This use effect will trigger on startup and only once
    It should try to read from local storage to see if there
    is a list of photos there. If there is,
    it will set the new state of photos to what was retrieved from local
    storage. 
    Otherise, it should fetch a list of 2 photos from JSON-placeholder
    and set the state of photos to this list. 
     */
    const localPhotos = JSON.parse(localStorage.getItem(LOCAL_KEY))
    console.log(localPhotos);
    if(localPhotos!==null) {
      console.log("Local Storage found")
      console.log(localPhotos)
      setPhotos(localPhotos)
    }
    else{
      console.log("fetching")
      // Only fetch keep a small number of the photos 
      // 500+ didn't look good on the app
      axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(resp => setPhotos(resp.data.slice(1,20)))
    }
  }, [])


  // This use effect will trigger every time the photos state changes
  // and will cause the photos list to be stored into local storage
  // so that fetching is not required on a refresh of the page.
  useEffect( () => {
    console.log("Storing state in local")
    localStorage.setItem(LOCAL_KEY, JSON.stringify(photos));
  }, [photos])


  function arrangeClick(){
    // This just shuffles the photos array, and the
    // changes the state of photos to the shuffled
    // array, so that it re-renders
    var shuffleThis = [...photos];
    shuffleThis = shuffleArr(shuffleThis);
    setPhotos(shuffleThis);
  }

  return (
    // Now render the app, with a Gallery and a button.
    // Gallery should be passed the state-variable photos
    // as its propery 
    <div className="App">
      Art Gallery: By George Wiseman
      <Gallery photoList={photos}/>
      <button 
      className='button'
      onClick={arrangeClick}>
        Rearange Gallery
      </button>
    </div>
  );
}

export default App;
