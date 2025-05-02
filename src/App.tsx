import { useEffect, useState, useRef } from 'react';
import { MainContext, Product, Cart } from "./context/mainContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { AllProducts } from './data';


function App() {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [fetchedData, setFetchedData] = useState<Product[]>([]);
  const [cartData, setCartData] = useState<Cart[]>([]);
  const [animateOut, setAnimateOut] = useState(false);
  const [animateOutPics, setAnimateOutPics] = useState(false);
  const [animateOutCart, setAnimateOutCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const primaryGreen = "#0db915";
  const secondaryBrown = "#613207";
  const [oneDayTime] = useState<number>(24 * 60 * 60 * 1000);
  const allProductsRef = useRef<HTMLDivElement>(null);

  const simulateFetchProductData = () => { setTimeout(() => { setFetchedData(AllProducts) }, 1000) }

  // useEffect(() => {
  //   // localStorage.setItem("user-cart", JSON.stringify(cartData));
  //   const localStorageCart = JSON.parse(localStorage.getItem("user-cart") || "[]") as Cart[];
  //   console.log("Logging Local Storage Cart Data:", localStorageCart);
  //   setCartCount(localStorageCart.length) 
  // }, [cartData])
  
  useEffect(() => { setTimeout(() => { simulateFetchProductData() }, 2000) }, [])

  useEffect(() => {
    const setupStorage = () => {
      const storedTime = localStorage.getItem("storage_timestamp");

      if (storedTime) {
        const formatTime = (ms: number) => {
          const totalSeconds = Math.floor(ms / 1000);
          const hours = Math.floor(totalSeconds / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = Math.floor(totalSeconds % 60);
          return `
            ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}
          `
        }
        const now = Date.now();
        const timeDiff = now - parseInt(storedTime, 10);
        const timeLeft = oneDayTime - timeDiff;
        console.log("Local Storage timer running...", "Time Left:>>>", formatTime(timeLeft));
        if (timeDiff > oneDayTime) {
          localStorage.clear();
          localStorage.setItem("storage_timestamp", Date.now().toString());
          console.log("Local Storage cleared after a day...");
        }
      } else {
        localStorage.setItem("storage_timestamp", Date.now().toString());
        console.log("Local Storage timer started...");
      }
    }

    setupStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const localStorageCart = JSON.parse(localStorage.getItem("user-cart") || "[]") as Cart[];
    if (localStorageCart.length > 0) {
      setCartData(localStorageCart);
      setCartCount(localStorageCart.length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user-cart", JSON.stringify(cartData));
  }, [cartData]);



  return (
    <>
      <MainContext.Provider 
        value={{ 
          active, setActive, fetchedData, setFetchedData, menuOpened, 
          setMenuOpened, primaryGreen, secondaryBrown, cartData, setCartData, 
          animateOut, setAnimateOut, animateOutPics, setAnimateOutPics, 
          cartCount, setCartCount, animateOutCart, setAnimateOutCart, allProductsRef
        }}
      >
        <ToastContainer 
          position='top-left' 
          autoClose={2000} 
          hideProgressBar={false} 
          newestOnTop={true} 
          closeOnClick
          draggable
          pauseOnHover
          theme='light'
        />
          <BrowserRouter>
            <Navbar/>
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
