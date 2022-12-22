import React, { useState } from "react";
import IndividualImage from "./IndividualImages";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import 'react-icons/fa'

export const Images = ({images}) => {
 const [current,setCurrent] = useState(0)
 const lenght = images.length;

const nextSlide = () => {
    setCurrent(current=== lenght -1 ? 0 : current +1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? lenght-1 : current -1)
}
console.log(current)

 if(!Array.isArray(images)||images.length<=0){
    return null
 }
    console.log(images)
    return(
        <section>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {
                  images.map((image,index) => (
                    (
                        <div 
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                        >
                            {index === current && (

                           <IndividualImage key={image.id} image={image}  className="image"/>
                            )}
                        </div>
                    )
                   ))
            }
        </section>

    )
   
}