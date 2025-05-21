
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
const App = () => {

  return (
    <BrowserRouter>
   
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login send={() => {}} answer={() => {}} />}></Route>
        <Route path='/register' element={<Register send1={() => {}} answer={() => {}} />}></Route>
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;
