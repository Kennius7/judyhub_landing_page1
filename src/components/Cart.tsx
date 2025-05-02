import { Button, Card, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useContext, useState } from 'react';
import { MainContext } from '../context/mainContext.js';
import getSymbolFromCurrency from 'currency-symbol-map';
import { calculateTotal, formatNumber } from '../data';
import { useCart } from '../hooks/useCart';
import ModalWhatsapp from '../modal/ModalWhatsapp';
import WhatsAppContact from './WhatsappLink';
// import ScrollToTop from '../../ScrollToTop.jsx';



type Cart = {
    p_id: number;
    p_name: string;
    price: string;
    no_of_items: number;
};

const Cart = () => {
    const { primaryGreen, secondaryBrown } = useContext(MainContext);
    const NGN = getSymbolFromCurrency('NGN');
    const localStorageCart = JSON.parse(localStorage.getItem("user-cart") || "[]") as Cart[];
    const { increaseItem, decreaseItem, removeItem } = useCart();
    const [isShowWhatsapp, setIsShowWhatsapp] = useState(false);
    const [checkoutHeader] = useState("Checkout Form");

    const handleCheckout = () => {
        setIsShowWhatsapp(true);
    }
    const handleCloseWhatsapp = () => {
        setIsShowWhatsapp(false);
    }

    // const handleItemAdd = (id: number) => {
    //     // const newCartItem = { p_id: id, p_name: name, price: price, no_of_items: productQuantity }
    //     // const newCartItem = localStorageCart.filter(item => item.p_id === id).map(item => item.no_of_items++);
    //     // setCartData(prevCart => [...prevCart, no_of_items: newCartItem.no_of_items]);
    //     const existingItem = localStorageCart.find(item => item.p_id === id);

    //     if (existingItem) {
    //         const updatedCart = localStorageCart.map(item => {
    //             if (item.p_id === id) {
    //                 return { ...item, no_of_items: item.no_of_items + 1 };
    //             }
    //             return item;
    //         });
    //         setCartData(updatedCart);
    //         localStorage.setItem("user-cart", JSON.stringify(updatedCart));
    //     }
    //     toast("Added one product item to your cart", { type: "success" });
    //     console.log("Cart Data:>>>", localStorageCart);
    // }

    const handleClearCart = () => {
        localStorage.clear();
    }


    return (
        <div className="w-full h-[400px] flex flex-col justify-between items-center mt-4">
            {/* <ScrollToTop/> */}
            {
                localStorageCart.length === 0 
                    ? 
                        (
                            <div className="w-full flex flex-row justify-center items-center">
                                <Typography variant="h6">Your cart is empty.</Typography>
                            </div>
                        ) 
                    : 
                        (
                            <div className='w-full h-[400px] flex flex-col justify-between items-center'>
                                <div className="w-full max-h-[350px] flex flex-col justify-start items-center 
                                    overflow-y-auto">
                                    {
                                        localStorageCart.map((item) => (
                                            <Card 
                                                key={item.p_id} 
                                                style={{ 
                                                    width: "100%", 
                                                    height: "70px",
                                                    marginBottom: '10px',
                                                    backgroundColor: "#dae9da",
                                                    display: 'flex', 
                                                    flexDirection: "column",
                                                    justifyContent: 'center', 
                                                    alignItems: 'center' 
                                                }}
                                            >
                                                <CardContent 
                                                    style={{ 
                                                        width: "100%",
                                                        display: 'flex', 
                                                        justifyContent: 'space-between', 
                                                        alignItems: 'center' 
                                                    }}
                                                >
                                                    <div className="sm:w-[70%] w-[100%] flex sm:flex-row flex-col 
                                                        sm:justify-start justify-center sm:items-center items-start">
                                                        <div className="sm:text-[22px] text-[18px] sm:font-semibold 
                                                            font-normal">
                                                            {item.p_name}:
                                                        </div>
                                                        <Typography 
                                                            variant="body1" 
                                                            sx={{ 
                                                                fontSize: window.innerWidth > 500 ? 18 : 13, 
                                                                marginLeft: window.innerWidth > 500 ? 1 : 0,
                                                                display: "flex",
                                                                flexDirection: "row",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            (&nbsp;{NGN}{item.price} &nbsp;X&nbsp; {item.no_of_items}&nbsp;)
                                                        </Typography>
                                                    </div>
                                                    <div className="sm:w-[160px] w-[200px] flex justify-around 
                                                        items-center">
                                                        <div 
                                                            style={{ backgroundColor: primaryGreen }} 
                                                            className="sm:w-8 sm:h-8 w-7 h-7 rounded-full flexCenter"
                                                            onClick={() => increaseItem(item.p_id)}
                                                        >
                                                            <AddIcon sx={{ color: "white", fontWeight: "bold" }}/>
                                                        </div>
                                                        <button 
                                                            style={{ 
                                                                backgroundColor: item.no_of_items === 1 
                                                                ? "#747463" : secondaryBrown 
                                                            }} 
                                                            className="sm:w-8 sm:h-8 w-7 h-7 rounded-full flexCenter"
                                                            onClick={() => decreaseItem(item.p_id)} 
                                                            disabled={item.no_of_items === 1}
                                                        >
                                                            <RemoveIcon sx={{ color: "white", fontWeight: "bold" }}/>
                                                        </button>
                                                        <div className="bg-black sm:w-8 sm:h-8 w-7 h-7 
                                                            rounded-full flexCenter"
                                                            onClick={() => removeItem(item.p_id)}
                                                        >
                                                            <DeleteIcon sx={{ color: "white", fontWeight: "bold" }} />
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))
                                    }
                                </div>
                                <div className="w-full">
                                    <div className="w-full flex justify-start items-center mb-1">
                                        <Typography variant="h6">
                                            Total: {NGN}{formatNumber(Number(calculateTotal(localStorageCart)))}
                                        </Typography>
                                    </div>
                                    <div className="w-full flex justify-between items-center">
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            onClick={handleCheckout}
                                        >
                                            Go to Checkout
                                        </Button>
                                        <Button 
                                            variant="contained" 
                                            color="secondary" 
                                            onClick={handleClearCart}
                                        >
                                            Clear Cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )
            }
            {
                isShowWhatsapp && (
                    <ModalWhatsapp 
                        show={isShowWhatsapp} 
                        onClose={handleCloseWhatsapp} 
                        title={checkoutHeader}
                        width="600px"
                        height="500px"
                    >
                        <WhatsAppContact onClose={handleCloseWhatsapp} />
                    </ModalWhatsapp>
                )
            }
        </div>
    );
};

export default Cart;

