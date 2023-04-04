import { BrowserRouter,Routes,Route } from "react-router-dom";
import {LoginPage} from './Routes.jsx';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>}>

      </Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App