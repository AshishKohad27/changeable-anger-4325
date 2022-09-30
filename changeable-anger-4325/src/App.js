import logo from './logo.svg';
import './App.css';
// import FormData from './Pages/FormData';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';
import PluralsightNavbar from './Components/PluralsightNvabar';
function App() {
  return (
    <div className="App">
      <PluralsightNavbar/>
      {/* <Navbar/> */}
      <AllRoutes/>
     {/* <FormData/> */}
    </div>
  );
}

export default App;
