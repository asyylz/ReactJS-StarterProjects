import './App.css';
import Accordion from './components/accordion';
import RandomColour from './components/random-color';
import StarRating from './components/star-rating';
function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordion /> */}
      {/* Random Colour Generator */}
      {/* <RandomColour /> */}
      {/* Star Rating */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
