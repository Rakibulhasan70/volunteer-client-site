import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';
import VolenteerRegister from './component/VolenteerRegister/VolenteerRegister';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/VolenteerRegister/:volenteerId' element={
          <RequireAuth>
            <VolenteerRegister></VolenteerRegister>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
