import { useState } from 'react';
import { MainContext } from "./context/mainContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import MuiNavbar from "./components/MuiNavbar";


function App() {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [fetchedData, setFetchedData] = useState({ products: [] });

  return (
    <>
      <MainContext.Provider value={{ active, setActive, fetchedData, setFetchedData, menuOpened, setMenuOpened }}>
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
          </BrowserRouter>


      </MainContext.Provider>
    </>
  )
}

export default App
