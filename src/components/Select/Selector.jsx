import React, { useState } from 'react';

export const Selector = (data,onchange) => {

    const datas = data.data;
    const [count, setCount] = React.useState(0)
    
    return (
        <select 
        onChange={e => onchange(e.target.value)}>
            <option value="-1">Todos</option>
            {datas.map((item) => (
            <option value={item.id}>{item.name}</option>
      ))}
        </select>
    )
  }