import "../src/assets/styles/global.css";
import FoodGallery from "./components/foodGallery/FoodGallery";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FoodGallery />
    </div>
  );
}

export default App;
