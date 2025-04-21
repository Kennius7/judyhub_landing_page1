import { useEffect, useState } from 'react';
import { MainContext } from "./context/mainContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import MuiNavbar from "./components/MuiNavbar";
import Footer from './components/Footer';
import { AllProducts } from './data';
import Product from "./context/mainContext";


function App() {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [fetchedData, setFetchedData] = useState<Product[]>([]);
  const primaryGreen = "#0db915";
  const secondaryBrown = "#613207";

  const simulateFetchProductData = () => {
    console.log("Fetching...");
    setTimeout(() => {
      setFetchedData(prev => [ ...prev, ...AllProducts ]);
    }, 1000);
  }
  
  useEffect(() => {
    setTimeout(() => {
      simulateFetchProductData();
    }, 3000);
  }, [])

  return (
    <>
      <MainContext.Provider 
        value={{ 
          active, setActive, fetchedData, setFetchedData, menuOpened, 
          setMenuOpened, primaryGreen, secondaryBrown, 
        }}
      >
        <ToastContainer 
          position='top-right' 
          autoClose={1000} 
          hideProgressBar={false} 
          newestOnTop={true} 
          closeOnClick
          draggable
          pauseOnHover
          theme='light'
        />
          <BrowserRouter>
            <MuiNavbar/>
            <Routes>
              <Route path={"/"} element={<Home/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>


      </MainContext.Provider>
    </>
  )
}

export default App
