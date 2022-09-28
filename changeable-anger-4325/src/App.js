import logo from './logo.svg';
import './App.css';
// import FormData from './Pages/FormData';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';

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
