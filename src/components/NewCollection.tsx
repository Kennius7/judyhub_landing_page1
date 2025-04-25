// import { PopularProducts } from "../constants/data";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";



const NewCollection = () => {
    const { fetchedData } = useContext(MainContext);
    // const LatestProducts = fetchedData.products;
    const LatestProducts = Array.isArray(fetchedData) ? fetchedData : [];
    // console.log("PopularProducts:>>>>", LatestProducts, Array.isArray(LatestProducts));

    return (
        <section className="w-full bg-slate-200 md:py-6 sm:py-4 py-12 sm:px-5 px-0">
            <div className="w-full sm:text-[30px] text-[22px] font-bold text-center py-[10px]">
                Latest Products
            </div>
            <hr 
                className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent 
                via-black to-transparent sm:mb-[80px] mb-[30px]"
            />
            <div className="w-full mt-[10px] grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:gap-x-1 
                gap-x-[8px] sm:gap-y-2 gap-y-[6px] px-2">
                {
                    LatestProducts
                    .filter(product => product.tags === "latest")
                    .map(product => <ProductItem item={product} key={product.id} />)
                }
            </div>
        </section>
    )
}


export default NewCollection