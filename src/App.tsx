import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marketplace from './components/Marketplace';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path='/' element={
            <Marketplace />
          }></Route>
          <Route path='*' element={
            <p>404 not found</p>
          }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
