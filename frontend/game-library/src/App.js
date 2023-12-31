import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import Welcome from './pages/welcome'
import Library from './pages/library';
import Plataform from './pages/plataform';

import NavbarContainer from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarContainer/>
        <Routes>
          <Route exact path='/' element={<Welcome/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/plataforms' element={<Plataform/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
