import React, { useEffect, useState } from 'react';
import ImageSlider from './index';
import { createApi } from 'unsplash-js';

export default function UnsplashAPICall({ query, orientation }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const api = createApi({
      accessKey: '1qOxZCGH50PEJ_x5DgQFk4qMgNm6C3lLN1nQqYbZPOU',
    });

    api.search
      .getPhotos({ query, orientation })
      .then(result => {
        setImages(result.response.results);
      })
      .catch(() => {
        console.log('Something went wrong!');
      });
  }, [query, orientation]);
  console.log(images);
  return <ImageSlider images={images} />; // Render the ImageSlider with fetched images
}
