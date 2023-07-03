import './App.css';
// import LoginPage from './components/login_page_1/LoginPage_1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import Userref from './components/Hooks/Userref';
import Usememo from './components/Hooks/Usememo';
import Taskforcount from './components/Buttonusestate/Taskforcount';
import ArshLandingPage from './components/LandingPage1/ArshaLandingPage';
import RestoLandingpage from './components/LandingPages/RestoLandingpage';


function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path={"/"} element={<ArshLandingPage />}></Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>

  );
}

export default App;
