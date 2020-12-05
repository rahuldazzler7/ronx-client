import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Text_Speech, Speech_Text } from "./Components/speech_recognition/speech_recognition";
import Ronxindex from "./Components/ronxindex/Ronxindex";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/test" component={Speech_Text}></Route>  
          <Route path="/" component={Ronxindex}></Route>
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
