import './App.css';
import data from "./data/photos.json";
import { useState } from 'react';
import PhotoButtons from './PhotoButtons/PhotoButtons.js';
import ImageList from './ImageList/ImageList.js';

function App() {

  const [images, setPhotos] = useState(data.map(i => {
    return {
      ...i
      
    }
  }));
  
 const deleteImage = (x) => {
    let n = [...images];
    n.splice(x, 1)
    setPhotos(n)
  }

  return (
    <div>
      <ImageList images={images} deleteImage={deleteImage}/>
      <PhotoButtons photos={images} setPhotos={setPhotos}/>
    </div>
  );
}

export default App;
