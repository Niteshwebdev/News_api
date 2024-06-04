import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Api from './pages/Api';
import ErrorBoundary from './pages/Error';
import Search from './pages/search';


function App() {
  return (
    <div>
      


          <ErrorBoundary>
        
       <Routes>
    
        <Route path="/" element={<Home />}/>
        
          <Route path="/National" element={<Api props="national"/>} />
         <Route path='/sport' element={<Api props="sports"/>}/>
        <Route path="/business" element={<Api props="business"/>}/>
        <Route path='/world' element={<Api props="world"/>}/>
        <Route path="/politics" element={<Api props="politics"/>}/>
        <Route path='/technology' element={<Api props="technology"/>}/>
        <Route path="/startup" element={<Api props="startup"/>}/>
        <Route path='/entertainment' element={<Api props="entertainment"/>}/>
        <Route path="miscellaneous" element={<Api props="miscellaneous"/>}/>
        <Route path='/Unconventional' element={<Api props="Unconventional"/>}/>
        <Route path="/science" element={<Api props="science"/>}/>
        <Route path='/automobile' element={<Api props="automobile"/>}/>
       
      </Routes>

      </ErrorBoundary>
      

       
       <Footer/>
       
    </div>
  );
}

export default App;
