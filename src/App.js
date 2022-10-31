import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Interview from './components/Interview';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/interview' element={<Interview/>}/>
     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
