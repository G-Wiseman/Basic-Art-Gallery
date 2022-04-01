import React from 'react'
import Photo from './Photo';
import HorizontalScroller from 'react-horizontal-scroll-container'
import './Gallery.css'
 export default function Gallery({ photoList }) {
  if (photoList[0] == undefined){
    return(
    <div>Loading</div>);
  }
  else{
    const photos = photoList.map( photo => 
      <Photo key={photo.id} 
        url={photo.url}
        name={photo.title}/>)
   return (
     <div className="Gallery">
      <HorizontalScroller>
        {photos}
      </HorizontalScroller>
     </div>
   );
  }
 }
 
