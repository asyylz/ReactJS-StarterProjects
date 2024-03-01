import React, { useEffect, useState } from 'react';
import ImageSlider from './ImageSlider.jsx';
import { createApi } from 'unsplash-js';

export default function UnsplashAPICall({ query, orientation }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const api = createApi({
        accessKey: '***************************', //  API key
      });

      try {
        const result = await api.search.getPhotos({ query, orientation });
        setImages(result.response.results);
      } catch (error) {
        console.log('Something went wrong!', error);
      }
    };

    fetchImages();
  }, [query, orientation]);

  return <ImageSlider images={images} />; // Render the ImageSlider with fetched images
}
