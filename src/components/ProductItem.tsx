import { useNavigate } from "react-router-dom";
import { ShoppingCart, Search } from "@mui/icons-material";
import getSymbolFromCurrency from 'currency-symbol-map'
import { useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import Modal from "../modal";
import ProductDesc from "./ProductDesc";


type Product = { 
    id: number; 
    name: string; 
    image: string; 
    newPrice: string; 
    oldPrice: string; 
    category?: string;
    tags?: string;
    description?: string; 
};
type ProductItemProps = { item: Product };

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
    const { id, name, image, newPrice, oldPrice } = item;
    const navigate = useNavigate();
    const { primaryGreen, secondaryBrown } = useContext(MainContext);
    const NGN = getSymbolFromCurrency('NGN');
    const stock = 20;
    const [isShow, setIsShow] = useState(false);
    const [title] = useState("Product Purchase");
    const handleClose = () => setIsShow(false);

    const handleClick = (id: number) => {
        console.log("Clicking product of number:>>>", id);
        setIsShow(true);
    }

    // const tags = ['New', 'Popular', 'Limited Edition'] 
    // const itemQuantity = profileFormData.cartData.find(item => item.id === id);
    // const productQuantity = itemQuantity ? itemQuantity.quantity : 1;
    // console.log("Filtered Data:>>>", productQuantity);

    return (
        <div 
            style={{ backgroundColor: primaryGreen, color: "#000" }}
            className={
                `md:w-[250px] sm:w-[${window.innerWidth * 0.25}px] w-[${window.innerWidth * 0.35}px]
                rounded-[8px] flex flex-col justify-start items-center overflow-hidden relative`
            }
        >
            <img 
                onClick={() => handleClick(id)} 
                src={image} 
                alt={name} 
                className="w-full sm:h-[220px] h-[160px] object-cover cursor-pointer"
            />
            <Search 
                htmlColor={"#fff"} 
                sx={{ 
                    width: 30, 
                    height: 30,
                    position: "absolute",
                    zIndex: 4,
                    top: "25%",
                    left: "42%",
                }} 
            />
            <div className="w-full flex flex-col justify-start items-start py-1 px-[6px]">
                <div className="sm:text-[16px] text-[14px] font-bold text-left">
                    {name}
                </div>
                <div className="flex justify-start items-center">
                    <div className="sm:text-[14px] text-[12px] font-semibold text-left">
                        {NGN}{newPrice}
                    </div>
                    <div 
                        style={{ color: secondaryBrown }} 
                        className="sm:text-[14px] text-[12px] font-semibold text-left italic line-through ml-2"
                    >
                        {NGN}{oldPrice}
                    </div>
                </div>
                <div className="sm:text-[14px] text-[12px] font-semibold text-left">
                    Stock: {stock}
                </div>

                <div className="w-full flex justify-between items-center mt-2">
                    <ShoppingCart 
                        // onClick={() => addCartData(id, name, newPrice, productQuantity, setProfileFormData)}
                        htmlColor={"#fff"} 
                        sx={{ 
                            width: window.innerWidth > 500 ? 22 : 18, 
                            height: window.innerWidth > 500 ? 22 : 18, 
                            borderRadius: "51%", cursor: "pointer" 
                        }} 
                    />
                    <div 
                        onClick={() => navigate(`/product/${id}`) } 
                        className="sm:text-[14px] text-[12px] font-semibold text-left"
                    >
                        See more...
                    </div>
                </div>
            </div>
            {
                isShow && 
                    <Modal show={isShow} onClose={handleClose} title={title}>
                        <ProductDesc/>
                    </Modal>
            }
        </div>
    )
}


export default ProductItem
