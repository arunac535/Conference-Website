import { Carousel } from 'flowbite-react';
import {Typography, Button } from "@material-tailwind/react";

 
export default function CarouselWithContent() {
  return (
    <div className=" h-100 sm:h-80 ">
      <Carousel>
        
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
        src="https://pedes2024.org/static/img/4_reduced.jpg"
        alt="image 1"
        className='height="338px" width="960px"'
        
      />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
        src="https://pedes2024.org/static/img/10_reduced.jpg"
        alt="image 1"
        className='height="338px" width="960px"'
      />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
        src="https://pedes2024.org/static/img/DJI_0012_reduced.jpg"
        alt="image 1"
        className='height="338px" width="960px"'
      />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
        src="https://pedes2024.org/static/img/main_building_reduced.jpg"
        alt="image 1"
        className='height="338px" width="960px"'
      />
        </div>
      </Carousel>

    </div>
  );
}