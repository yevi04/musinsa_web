import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './screen/LoginScreen';
import MainScreen from './screen/MainScreen';

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;