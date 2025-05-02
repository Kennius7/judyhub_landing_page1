import { useContext } from "react";
import { MainContext } from "../context/mainContext.tsx";
// import { Hero, Popular, Offers, NewCollection, NewsLetter } from "../components";
// import ScrollToTop from "../../ScrollToTop";
import Spinner from "../components/Spinner2";
import Hero from "../components/Hero";
import NewCollection from "../components/NewCollection";
import AllCollection from "../components/AllCollection.tsx";



const Home = () => {
  const { fetchedData } = useContext(MainContext);

  return (
    <div className="w-full flex-center">
      {
        fetchedData.length === 0
        ?
          <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <div 
              style={{ 
                marginBottom: 24, 
                fontFamily: "sans-serif", 
                textAlign: "center", 
                fontWeight: "600",
                fontSize: "20px",
                color: "black",
              }}
            >
              Loading, please wait...
            </div>
            <Spinner />
          </div>
        :
        <section className="w-full">
          {/* <ScrollToTop/> */}
          <Hero/>
          <NewCollection/>
          <AllCollection/>
        </section>
      }
    </div>
  )
}

export default Home
