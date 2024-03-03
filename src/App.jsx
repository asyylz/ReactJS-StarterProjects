import Accordion from './components/accordion';
import RandomColour from './components/random-color';
import StarRating from './components/star-rating';
import UnsplashAPICall from './components/image-slider/UnsplashAPICall';
import APICall from './components/image-slider-with-style/APICall';
import LoadMoreData from './components/load-more-data';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordion /> */}
      {/* Random Colour Generator */}
      {/* <RandomColour /> */}
      {/* Star Rating */}
      {/* <StarRating noOfStars={10} /> */}
      {/* Image Slider */}
      {/* <UnsplashAPICall query={'london'} orientation={'landscape'} /> */}
      {/* Image Slider with style */}
      {/* <APICall query={'london'} orientation={'landscape'} /> */}
      {/* Load more products components */}
      <LoadMoreData  />
      
    </div>
  );
}

export default App;
