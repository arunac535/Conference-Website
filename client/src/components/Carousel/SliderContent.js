import React from 'react'

export default function SliderContent({activeIndex,imageSlider}) {
  return (
    <section>
        {imageSlider.map((slide,index)=> (
            <div key={index} 
            className={index=== activeIndex ? "slides active" : "inactive"}
                >
            <img className="slide-image" src={slide.urls} alt=""/>
            <h2 className="slide-title">International Conference on Advancements in Smart Sustainable Energy Sources, Technologies and Systems</h2> 
            <h3 className="slide-sub-title"> March 11th-12th, 2024</h3>  
            <h3 className="slide-sub-title"> National Institute of Technology Karnataka, Surathkal</h3>  
        </div>
        ))}
    </section>
  );
}
