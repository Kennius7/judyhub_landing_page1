import { useNavigate } from "react-router-dom";
import { ShoppingCart, Search } from "@mui/icons-material";
import getSymbolFromCurrency from 'currency-symbol-map'
import { useContext } from "react";
import { MainContext } from "../context/mainContext";


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

    const handleClick = (id: number) => {
        console.log("Clicking product of number:>>>", id);
    }

    // const tags = ['New', 'Popular', 'Limited Edition'] 
    // const itemQuantity = profileFormData.cartData.find(item => item.id === id);
    // const productQuantity = itemQuantity ? itemQuantity.quantity : 1;
    // console.log("Filtered Data:>>>", productQuantity);


    return (
        // <Card
        //     sx={{ 
        //         width: window.innerWidth > 768 ? 195 : (window.innerWidth * 0.333) - 10, 
        //         boxShadow: 5, 
        //         borderRadius: 2,
        //         padding: 0,
        //         margin: 0, 
        //         display: "flex", 
        //         flexDirection: "column", 
        //         justifyContent: "center", 
        //         alignItems: "flex-start",
        //         position: "relative",
        //     }}
        // >
        //     <CardMedia
        //         onClick={() => navigate(`/product/${id}`) }
        //         component="img"
        //         height="100"
        //         image={image}
        //         alt={name}
        //     />
        //     <Search 
        //         htmlColor={"#fff"} 
        //         sx={{ 
        //             width: 30, 
        //             height: 30,
        //             position: "absolute",
        //             zIndex: 4,
        //             top: "25%",
        //             left: "40%",
        //         }} 
        //     />

        //     {/* Product Details */}
        //     <CardContent 
        //         sx={{ 
        //             padding: 1,
        //             marginTop: -1,
        //             height: 100, 
        //             display: "flex", 
        //             flexDirection: "column", 
        //             justifyContent: "center", 
        //             alignItems: "flex-start",
        //         }}
        //     >
        //         {/* Product Name */}
        //         <Typography 
        //             variant="h6" 
        //             component="div" 
        //             color={secondaryBrown}
        //             sx={{ 
        //                 mt: -3,
        //                 fontSize: window.innerWidth > 500 ? 14 : 12
        //             }}
        //         >
        //             {name}
        //         </Typography>
        
        //         {/* Price Section */}
        //         <Box sx={{ display: 'flex', alignItems: 'center', mt: 0 }}>
        //             <Typography 
        //                 variant="body1" 
        //                 color={primaryGreen} 
        //                 sx={{ 
        //                     mr: 1, 
        //                     fontSize: window.innerWidth > 500 ? 14 : 11 
        //                 }}
        //             >
        //                 {NGN}{newPrice}
        //             </Typography>
        //             {
        //                 oldPrice && (
        //                     <Typography
        //                         variant="body2"
        //                         color="text.secondary"
        //                         sx={{ 
        //                             textDecoration: 'line-through', 
        //                             fontSize: window.innerWidth > 500 ? 14 : 10
        //                         }}
        //                     >
        //                         {NGN}{oldPrice}
        //                     </Typography>
        //                 )
        //             }
        //         </Box>

        //         <Typography 
        //             variant="body2" 
        //             color="text.secondary" 
        //             sx={{ 
        //                 mt: window.innerWidth > 500 ? 0 : 0.5, 
        //                 fontSize: window.innerWidth > 500 ? 14 : 9 
        //             }}
        //         >
        //             Stock: {stock || 1} pieces.
        //         </Typography>
        //     </CardContent>

        //     {/* Actions */}
        //     <CardActions className="w-full h-[25px] flexBetween xs:-mt-6 -mt-8 !important">
        //         <ShoppingCart 
        //             // onClick={() => addCartData(id, name, newPrice, productQuantity, setProfileFormData)}
        //             htmlColor={primaryGreen} 
        //             sx={{ 
        //                 width: window.innerWidth > 500 ? 22 : 15, 
        //                 height: window.innerWidth > 500 ? 22 : 15, 
        //                 borderRadius: "51%" 
        //             }} 
        //         />
        //         <Typography 
        //             onClick={() => navigate(`/product/${id}`) }
        //             variant="body2" 
        //             color={secondaryBrown} 
        //             sx={{ mt: 0, fontSize: window.innerWidth > 500 ? 14 : 9 }}>
        //             See more
        //         </Typography>
        //     </CardActions>
        // </Card>

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
                className="w-[99%] sm:h-[220px] h-[160px] object-cover mt-[2px] rounded-[8px]"
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
                            borderRadius: "51%" 
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
        </div>
    )
}


export default ProductItem
