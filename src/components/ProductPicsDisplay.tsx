// import getSymbolFromCurrency from 'currency-symbol-map'
// import QuantitySelector from './QuantitySelector';
// import { useState, useContext } from 'react';
// import { MainContext } from '../context/mainContext';


const ProductPicsDisplay = ({ image, onClose }: { image: string, onClose: () => void }) => {

    return (
        <div className="bg-white p-4 rounded-lg w-full h-full mt-2">
            <div className="flex flex-col justify-center items-center mb-4">
                <img
                    src={image}
                    alt={"Product pics"}
                    className="w-[100%] h-[350px] object-cover rounded"
                />
            </div>
            <button 
                onClick={onClose} 
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
                Back
            </button>
        </div>
    )
}

export default ProductPicsDisplay