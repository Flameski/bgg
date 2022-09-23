import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Homepage,
  Catalog,
  About,
  Contact,
  Donate,
  Login,
  ErrorPage,
  SharedLayout,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='donate' element={<Donate />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
