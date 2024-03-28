import logo from './logo.svg';
import './App.css';
import Navbarr from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Card';
function App() {
  return (
    <div className="App">
    <h1>React</h1>
    <Navbarr/>
    <Cards/>
    
    </div>
  );
}

export default App;
