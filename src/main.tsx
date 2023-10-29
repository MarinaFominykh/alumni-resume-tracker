import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search/Search.tsx';
import Favourites from './pages/Favourites/Favourites.tsx';
import Vacancies from './pages/Vacancies/Vacancies.tsx';
import Login from './pages/Auth/Login/Login.tsx';
import { ThemeProvider } from '@mui/material';
import { projectTheme } from './projectTheme.tsx';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword.tsx';
import StudentPage from './pages/StudentPage/StudentPage.tsx';
import NewVacancy from './pages/Vacancies/NewVacancy/NewVacancy.tsx';
import AllVacancies from './pages/AllVacancies/AllVacancies.tsx';
import Error404 from './pages/Error404/Error404.tsx';
import { Provider } from 'react-redux';
import { setupStore } from './store/store.ts';

const store = setupStore()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={projectTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="search" element={<Search />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="vacancies" element={<Vacancies />} />
          <Route path="all-vacancies" element={<AllVacancies />} />
          <Route path="vacancies/new" element={<NewVacancy />} />
          <Route path="student" element={<StudentPage />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>

  </Provider>
  
);
