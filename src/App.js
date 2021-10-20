
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Components/About/About';
import Doctors from './Components/Doctors/Doctors';
import Services from './Components/Services/Services';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Login from './Components/Forms/Login/Login';
import Register from './Components/Forms/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import Covid from './Components/Covid-19/Covid';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/details/:idDetails">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/covid-19">
              <Covid></Covid>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/cotact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
