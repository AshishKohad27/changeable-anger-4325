import logo from './logo.svg';
import './App.css';
// import FormData from './Pages/FormData';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
     {/* <FormData/> */}
    </div>
  );
}

export default App;
