// import { useNavigate } from "react-router-dom";
import { ShoppingCart, Search } from "@mui/icons-material";
import getSymbolFromCurrency from 'currency-symbol-map'
import { useState, useContext, useMemo } from "react";
import { MainContext } from "../context/mainContext";
import Modal from "../modal";
import ModalPics from "../modal/ModalPics";
import ProductDesc from "./ProductDesc";
import ProductPicsDisplay from "./ProductPicsDisplay";


type Product = { 
    id: number; 
    name: string; 
    image: string[]; 
    newPrice: string; 
    oldPrice: string; 
    category?: string;
    tags?: string;
    description: string; 
};
type ProductItemProps = { item: Product };

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
    const { id, name, image, newPrice, oldPrice, description } = item;
    const { primaryGreen, secondaryBrown } = useContext(MainContext);
    const NGN = useMemo(() => getSymbolFromCurrency('NGN'), []); 
    const stock = 20;
    const [isShow, setIsShow] = useState(false);
    const [isShowPics, setIsShowPics] = useState(false);
    const [title] = useState(`${id}. ${name}`);

    const handleClose = () => setIsShow(false);
    const handleClosePics = () => setIsShowPics(false);
    const handleClick = (id: number) => {
        console.log("Clicking product of Product ID:>>>", id);
        setIsShow(true);
    }
    const handlePicsClick = (id: number) => {
        console.log("Clicking product Image of Product ID:>>>", id);
        setIsShowPics(true);
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
                onClick={() => handlePicsClick(id)} 
                src={image[0]} 
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
                        onClick={() => handleClick(id)}
                        htmlColor={"#fff"} 
                        sx={{ 
                            width: window.innerWidth > 500 ? 22 : 18, 
                            height: window.innerWidth > 500 ? 22 : 18, 
                            borderRadius: "51%", cursor: "pointer" 
                        }} 
                    />
                    <div 
                        // onClick={() => navigate(`/product/${id}`) } 
                        className="sm:text-[14px] text-[12px] font-semibold text-left"
                    >
                        See more...
                    </div>
                </div>
            </div>
            {
                isShow && 
                    <Modal show={isShow} onClose={handleClose} title={title}>
                        <ProductDesc id={id} name={name} image={image} price={newPrice} description={description} />
                    </Modal>
            }
            {
                isShowPics && 
                    <ModalPics 
                        show={isShowPics} 
                        onClose={handleClosePics} 
                        title={title}
                        width={window.innerWidth > 768 ? "600px" : "95%"}
                        height={window.innerWidth > 768 ? "580px" : "450px"}
                    >
                        <ProductPicsDisplay image={image} name={name} onClose={handleClosePics} />
                    </ModalPics>
            }
        </div>
    )
}


export default ProductItem
