import './styles/App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/presentation/NavBar';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import Cart from './components/containers/Cart';
import CartContext from './components/providers/CartContext';

function App() {
  
  return (
    <CartContext>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={
            <ItemListContainer greeting="Lo último en tendencia para decorar y armonizar tus espacios" />
          }/>
          <Route exact path='/category/:id' element={
            <ItemListContainer greeting="Aquí podrá encontrar el producto de la categoría seleccionada" />
          }/>
          <Route exact path='/items/:id' element={
            <ItemDetailContainer />
          }/>
          <Route exact path='/cart' element={
            <Cart />
          }/>
        </Routes>
      </Router>
    </CartContext>
  );
}

export default App;
