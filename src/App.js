
import './App.css';
import Header from "./components/header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePages from './home/HomePages';
import Footer from './components/footer/Footer';
import SinglePage from './components/watch/SinglePage';
import SecondPage from './components/watch/SecondPage';
import ThirdPage from './components/watch/ThirdPage';

function App() {
  return (
    <Router>
        <Header />
          <Switch>
            <Route exact path='/' component={HomePages} /> 
            <Route exact path='/singlePage/:id' component={SinglePage} /> 
            <Route exact path='/secondPage/:id' component={SecondPage} /> 
            <Route exact path='/thirdPage/:id' component={ThirdPage} /> 
          </Switch>
        <Footer />
    </Router>
  );
}

export default App;
