/* import logo from './logo.svg';
import './App.css';
*/
import {BrowserRouter as Router} from'react-router-dom';
import Rautes from "./routes";
import Navbar from './components/navbar';
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Rautes></Rautes>
    </Router>     
  );
}

export default App;
