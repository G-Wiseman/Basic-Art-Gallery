import React from 'react'
import Photo from './Photo';
import HorizontalScroller from 'react-horizontal-scroll-container'
import './Gallery.css'

// A gallery will be a collection of Photo Components, rendered
// with a Horizontal Scroll. 
export default function Gallery({ photoList }) {
  if (photoList === undefined){
    // If there are no photos loaded yet, it shouldn't try to access
    // anything.
    return(
    <div>Loading</div>);
  }
  else{
    // Map out all the photos in JSX tags so that it can 
    // all be rendered when returning. Passing url, title 
    // and making sure to give each photo a key, so React 
    // can re-render more efficiently  
    const photosRender = photoList.map( photo => 
      <Photo key={photo.id} 
        url={photo.url}
        name={photo.title}/>)
   return (
     <div className="Gallery">
      <HorizontalScroller>
        {photosRender}
      </HorizontalScroller>
     </div>
   );
  }
 }
 
