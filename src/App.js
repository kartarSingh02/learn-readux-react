import './App.css';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container my-3">
      <Shop/>
    </div>
    </>
  );
}

export default App;
