import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Carousel from './components/Carousel';
import Cart from './components/Cart';
import { BrowserRouter,Route} from "react-router-dom";
import CarDetails from './components/CarDetails';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route path="/" exact>
        <Header/>
        <Carousel/>
        <Products/>
      </Route>    
      <Route path="/cart">
        <Header/>
        <Cart/>
      </Route>
      <Route path="/details/:id">
        <Header/>
        <CarDetails/>
      </Route>
    
    </BrowserRouter>    
    
    

    
    </div>
  );
}

export default App;
