import React, { useState } from 'react';

export function Content() {
  const [imageSrc, setImageSrc] = useState('../img/days/monday.png');
  const [imageAlt, setImageAlt] = useState('image of dates of a week');

  return (
    <div className="image-box">
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
}