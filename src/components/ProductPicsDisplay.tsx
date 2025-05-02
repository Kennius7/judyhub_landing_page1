// import getSymbolFromCurrency from 'currency-symbol-map'
// import QuantitySelector from './QuantitySelector';
// import { useState, useContext } from 'react';
// import { MainContext } from '../context/mainContext';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { splideOptions } from "../data";


const ProductPicsDisplay = ({ image, name, onClose }: { image: string[], name: string, onClose: () => void }) => {

    return (
        <div className="p-4 rounded-lg w-full h-full mt-2">
            <div className="w-full flex flex-col justify-center items-center mb-4 overflow-hidden">
                {/* <img
                    src={image[0]}
                    alt={"Product pics"}
                    className="w-[100%] sm:h-[350px] h-[250px] object-cover rounded"
                /> */}

                <Splide options={splideOptions}>
                    {
                        image.map((img, index) => (
                            <SplideSlide key={index}>
                                <div className="w-full sm:h-[400px] h-[300px] flex flex-col justify-center items-center">

                                    <div className="w-full h-[85%] flex flex-col justify-center items-center 
                                        relative">
                                        <img src={img} alt={"Product Name"} 
                                            className="bg-center object-cover w-full h-full"
                                        />
                                        {/* <div className="flex justify-center items-center text-center font-bold 
                                            absolute z-2 rounded-[50%] border-yellow-500 border-[2px] bg-white 
                                            text-slate-900 bottom-[3%] left-[3%] sm:text-[15px] text-[14px] 
                                            sm:w-[25px] sm:h-[25px] w-[24px] h-[24px]"
                                        >
                                            { index + 1 }
                                        </div> */}
                                    </div>

                                    <div className="w-full h-[18%] flex flex-col justify-center items-center py-1">
                                        <div className="font-sans font-semibold text-center md:text-[25px] 
                                            sm:text-[22px] text-[18px]">
                                            { name }
                                        </div>
                                        <div className="w-full font-sans italic text-center sm:text-[22px] text-[18px]">
                                            Shirt-1
                                        </div>
                                    </div>

                                </div>
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </div>
            <button 
                onClick={onClose} 
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 
                    sm:text-[22px] text-[18px]">
                Back
            </button>
        </div>
    )
}

export default ProductPicsDisplay