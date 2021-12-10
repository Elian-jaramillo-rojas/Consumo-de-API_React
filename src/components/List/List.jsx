import React, { useState } from 'react';
import { Card } from '../card/Card';

export const List = (data) => {
    return (
      <div>
      {data.data.map((item) => (
        <Card data={item} />
      ))}
    </div>
    )
  }