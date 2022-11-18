import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Homepage,
  Games,
  About,
  Contact,
  Donate,
  Login,
  Profile,
  ErrorPage,
  SharedLayout,
  SingleGame,
  ProtectedRoute,
} from './pages';
import { AppProvider } from './stores/context';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Homepage />} />{' '}
            {/* <-- index is important */}
            <Route path='games' element={<Games />} />
            <Route path='games/:gameId' element={<SingleGame />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='donate' element={<Donate />} />
            <Route path='login' element={<Login />} />
            <Route
              path='profile'
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
