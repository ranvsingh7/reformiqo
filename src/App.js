
import './App.css';

import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import Sidebar from './components/Sidebar/Sidebar';
import Customers from "./components/Customers/Customer"
import {Routes ,Route } from 'react-router-dom'

function App() {
  return (
    
      <div className="App">

          
          <Sidebar/>
          <SearchBar />
          <Footer />
          <Routes>
            <Route path='customers' element={<Customers/>} />
          </Routes>
      </div>    
  );
}

export default App;
