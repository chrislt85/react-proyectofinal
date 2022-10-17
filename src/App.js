import './styles/App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  
  return (
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
      </Routes>
    </Router>
  );
}

export default App;
