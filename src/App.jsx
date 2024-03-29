import Accordion from './components/accordion';
import RandomColour from './components/random-color';
import StarRating from './components/star-rating';
import UnsplashAPICall from './components/image-slider/UnsplashAPICall';
import APICall from './components/image-slider-with-style/APICall';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/custom-scroll-indicator';

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
      {/* <LoadMoreData  /> */}
      {/* Tree View */}
      {/* <TreeView  menus={menus} />*/}
      {/* QR code generate */}
      {/* <QRCode /> */}
      {/* <QRCodeGenerator /> */}
      {/* Ligth Dark Mode */}
      {/* <LightDarkMode /> */}
      {/* Custom Scroll Indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
