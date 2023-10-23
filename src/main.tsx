import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search/Search.tsx';
import Favourites from './pages/Favourites/Favourites.tsx';
import Vacancies from './pages/Vacancies/Vacancies.tsx';
import Register from './pages/Auth/Register/Register.tsx';
import Login from './pages/Auth/Login/Login.tsx';
import { ThemeProvider } from '@mui/material';
import { projectTheme } from './projectTheme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={projectTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/search" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/vacancies" element={<Vacancies />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
