import getSymbolFromCurrency from 'currency-symbol-map'
import QuantitySelector from './QuantitySelector';
import { useState, useContext, useMemo, useCallback } from 'react';
import { MainContext } from '../context/mainContext';
import { toast } from 'react-toastify';


const ProductDesc = ({ 
    id, image, name, price, description 
}: { id: number, image: string[], name: string, price: string, description: string }) => {
    
    const NGN = useMemo(() => getSymbolFromCurrency('NGN'), []);
    const [productQuantity, setProductQuantity] = useState(1);
    const { cartData, setCartData, setAnimateOut, setCartCount } = useContext(MainContext);

    const handleQuantityChange = (qty: number) => {
        console.log("Quantity selected:", qty);
        setProductQuantity(qty);
    };

    const handleAddToCart = useCallback(() => {
        console.log("Adding to cart...");
        if (!cartData.find(item => item.p_name === name)) {
            const newCartItem = { p_id: id, p_name: name, price: price, no_of_items: productQuantity }
            setCartData((prevCart) => [...prevCart, newCartItem]);
            setAnimateOut(true);
            setCartCount(prev => prev + 1);
            toast("Added to your cart", { type: "success" });
            console.log("Cart Data:>>>", cartData);
        } else {
            toast("Item already in cart", { type: "info" });
            setAnimateOut(true);
            console.log("Cart Data:>>>", cartData);
        }
    }, [cartData, id, name, price, productQuantity, setAnimateOut, setCartCount, setCartData])


    return (
        <div className="bg-white p-4 rounded-lg shadow-lg w-full h-[240px] relative overflow-y-auto mt-2">
            {
                Array(1).fill(0).map((_, index) => (
                    <div key={index} className="flex flex-col justify-center items-center mb-4">
                        <img
                            src={image[0]}
                            alt={name}
                            className="w-[100%] h-[200px] object-cover rounded"
                        />
                        <div>
                            {/* <p className="font-semibold">{id}. {name}</p> */}
                            <p className="text-gray-600">Price: {NGN}{price}</p>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">No. of items to purchase:</p>
                                <QuantitySelector min={1} max={20} onChange={handleQuantityChange}/>
                            </div>
                            <p className="text-slate-900 font-semibold text-[22px]">
                                Product Description:
                            </p>
                            <p className="text-gray-600">{description}</p>
                        </div>
                    </div>
                ))
            }
            <button 
                onClick={handleAddToCart} 
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
                Add to Cart
            </button>
        </div>
    )
}

export default ProductDesc