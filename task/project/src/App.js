import './App.css';
import { Images } from './components/Images';
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [images,setImages] =useState([]);
  const fetchAPI = async()=>{
    const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1")
    const data = await response.data
  
    setImages(data)
  }

  return (
      <>
       <button className='button' onClick={fetchAPI}>
        fetch unsplash API
      </button>
     <div className="App">
       <br></br>
     
          <div className='photos'>
            {images.length>0&&(
             <Images images={images}/>
          )}
      </div>
    </div> 
      </>
      
  );
}

export default App;
