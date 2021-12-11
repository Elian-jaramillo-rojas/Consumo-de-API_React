import React, { useState } from 'react';


export const Card = (data) => {

    const { name, image,species } = data.data;
  
    return (
      <div className='contenedor1'>

      
        <div className="card">
        <img  src={image}  />
        <h2>{name}</h2>
        <hr />
        <p>{species}</p>
      </div>
    </div>
    )
  }