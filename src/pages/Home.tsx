import { useContext } from "react";
import { MainContext } from "../context/mainContext.tsx";
// import { Hero, Popular, Offers, NewCollection, NewsLetter } from "../components";
// import ScrollToTop from "../../ScrollToTop";
import Spinner from "../components/Spinner2";
import Hero from "../components/Hero";
import NewCollection from "../components/NewCollection";



const Home = () => {
  const { fetchedData } = useContext(MainContext);

  return (
    <div style={{ width: "100%", backgroundColor: "#200500" }}>
      {
        fetchedData.length === 0
        ?
          <div className="flex flex-col justify-center items-center">
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
        <section>
          {/* <ScrollToTop/> */}
          <Hero/>
          <NewCollection/>
          {/* <Popular/>
          <Offers/>
          <NewsLetter/> */}
        </section>
      }
    </div>
  )
}

export default Home
