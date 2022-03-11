import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Results from './components/Results/Results';
import Services from './components/Services/Services';
import About from './components/About/About';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Header from './components/reusable/Header/Header';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <>
      <Router>
        <Header />
        <GlobalStyle />
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/servicios' element={<Services/>} />
              <Route exact path='/resultados' element={<Results/>} />
              <Route exact path='/sobre-nosotros' element={<About/>} />
              <Route exact path='/login' element={<SignIn/>} />
              <Route exact path='/register' element={<SignUp/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
