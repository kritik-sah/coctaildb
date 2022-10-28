import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Homepage';
import Searchpage from './pages/Searchpage';
import SharedLayout from './pages/SharedLayout';
import SingleDrink from './pages/SingleDrink';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='search/:drink' element={<Searchpage />} />
          <Route path='drink/:id' element={<SingleDrink />} />
          

          
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
