import React, { useState,useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} =useFetchGifs(category);
    
    return (
        <>
            <h3 class='card animate__animated animate__fadeIn'>{ category }</h3>
            {loading&& <p class='card animate__animated animate__flash'>Loading...</p>}
            <div className='cardGrid '>
                {
                    images.map((img)=>(
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
