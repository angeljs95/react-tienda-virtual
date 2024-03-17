
import './App.css';
import { Footer } from './components/public/Footer';
import { Navbar } from './components/public/Navbar';
import { Main } from './components/public/Main';
import { Route, Routes } from 'react-router-dom';
import { Details } from './components/public/Details';
import { Categorias } from './components/public/Categorias';
import { CategoryMostrar } from './components/public/CategoryMostrar';
import { CartasCategory } from './components/public/CartasCategory';
import { IngresoForm } from './components/public/IngresoForm';

function App() {
  return (
    <div>

      <Navbar/>
      
     <Routes>
      <Route exact path={"/"} Component={Main}/>
      <Route  path={"/products/:id"} Component={Details}/>
      <Route path={"/products/categories"} Component={Categorias}/>
      <Route path={"/products/category/:category"} Component={CategoryMostrar}/>
      <Route path= {"/carts"} Component={CartasCategory}/>
      <Route path={"/ingreso-form"} Component={IngresoForm}/>
     </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


*/