import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Carousel from './components/Carousel';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
    <Header/>
    <Carousel/>
    <Products/>
    <Cart/>
    
    </div>
  );
}

export default App;
