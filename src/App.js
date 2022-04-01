import Gallery from './Gallery.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'

var shuffleArr = require('shuffle-array')


const LOCAL_KEY = "photos_key";

function App() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Load the photos in for the first time? Or check if they are already in local storage?
    const localPhotos = JSON.parse(localStorage.getItem(LOCAL_KEY))
    if(localPhotos===undefined || 
        localPhotos.length != 0) {
      console.log("Local Storage found")
      console.log(localPhotos)
      setPhotos(localPhotos)
    }
    else{
      console.log("fetching")
      axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(resp => setPhotos(resp.data.slice(1,20)))
    }
  }, [])

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
    <div className="App">
      <Gallery photoList={photos}/>
      <button onClick={arrangeClick}>
        Rearange Photo Gallery
      </button>
    </div>
  );
}

export default App;
