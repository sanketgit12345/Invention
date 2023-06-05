import './App.css';
// import LoginPage from './components/login_page_1/LoginPage_1';
import LoginPage from './components/LoginPage2/LoginPagesecond';
import RestoLandingpage from './components/LandingPages/RestoLandingpage';
import ArshLandingPage from './components/LandingPage1/ArshaLandingPage';
import ListingPage from './components/ListingPage/ListingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path={"/"} element={<ListingPage />}></Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>

  );
}

export default App;
