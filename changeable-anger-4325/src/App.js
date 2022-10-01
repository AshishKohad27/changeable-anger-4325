import logo from './logo.svg';
import './App.css';
// import FormData from './Pages/FormData';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';
import PluralsightNavbar from './Components/PluralsightNvabar';
import { AuthContext } from './Context/AuthContext/AuthContextProvider';
import { useContext } from 'react';

function App() {

  const { isAuth, toggleAuth, isUsers } = useContext(AuthContext)
  // console.log('isUsers Navbar:', isUsers)


  return (
    <div className="App">
      <PluralsightNavbar />
      {/* <Navbar/> */}
      <AllRoutes />
      {/* <FormData/> */}
    </div>
  );
}

export default App;
