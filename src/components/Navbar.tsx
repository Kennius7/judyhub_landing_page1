import { useState, useContext } from "react";
import { AppBar, Toolbar, Typography, Avatar, Drawer, List, ListItem } from "@mui/material";
// import { Menu } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import { logoSvg } from "../assets";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/mainContext";
import ModalCart from "../modal/ModalCart";
import Cart from "../components/Cart";
// import { NavLink } from "react-router-dom";
// import { navLinks } from "../constants/data";
// import { capitalize } from "lodash";



const Navbar = () => {
    const navigate = useNavigate();
    const { menuOpened, setMenuOpened, cartCount } = useContext(MainContext);
    const [showCart, setShowCart] = useState(false);
    const [cartHeader] = useState("Shopping Cart");

    // const { name, image, cartData } = profileFormData;

    const handleDrawerToggle = () => { setMenuOpened(!menuOpened) };
    const handleLoginNavigator = () => navigate("/login");
    const handleCart = () => {
        // localStorage.setItem("user-cart", JSON.stringify(cartData));
        setShowCart(true);
    }
    const handleCloseCart = () => setShowCart(false);

    const drawer = (
        <List sx={{ 
                width: 200, 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center" 
            }}
        >
            <ListItem 
                component="div" 
                sx={{ 
                    width: "100%", 
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                }}
            >
                <Typography variant="h6" sx={{ fontStyle: "italic", fontSize: 15 }}>
                    Hi, and welcome to Judyhub!
                </Typography>

                {/* Profile Avatar */}
                {/* <Avatar
                    alt="Guest"
                    src={image}
                    onClick={profPicsNavigator}
                    sx={{
                        display: { xs: "flex", sm: "none" },
                        flexDirection:  "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 38,
                        height: 38, 
                        cursor: "pointer",
                        border: "2px solid #0db915",
                    }}
                /> */}
            </ListItem>

            {/* Mobile Navigation Section */}
            {/* <ListItem 
                component="div" 
                sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}
            >
                {
                    navLinks.map((nav, index) => (
                        <NavLink 
                            key={index} 
                            to={pathAccess ? nav.link : "/"} 
                            onClick={() => setActive(capitalize(nav.name))} 
                            onFocus={() => setMenuOpened(!menuOpened)}
                            className={`flex justify-start items-center cursor-pointer font-EncodeSans
                                duration-500 transition-all focus:outline-none focus:ring-0 my-2
                                ${active === capitalize(nav.name) 
                                ? "text-primaryGreen font-semibold" 
                                : "text-secondaryBrown font-normal title-text-shadow4"}`}
                        >
                            <Typography variant="h6" sx={{ fontSize: 18 }}>
                                { capitalize(nav.name) }
                            </Typography>
                        </NavLink>
                    ))
                }
            </ListItem> */}

            {/* Login Button */}
            <ListItem 
                component="div" 
                tabIndex={0}
                onClick={handleLoginNavigator} 
                onFocus={() => setMenuOpened(!menuOpened)}
                sx={{ width: "96%" }}
                className='xs:hidden block font-semibold text-secondaryBrown bg-primaryGreen/50 rounded-md'
            >
                <Typography variant="h6" sx={{ fontSize: 18 }} onFocus={() => setMenuOpened(!menuOpened)}>
                    Sign in
                </Typography>
            </ListItem>

            {/* <ListItem 
                component="div" 
                onClick={() => navigate("/cart")}
                sx={{ top: 310, right: 10 }}
            >
                <IconButton color="inherit">
                    <Badge badgeContent={cartData.length} color="error">
                        <ShoppingCart 
                            className="animate-pulseBorder1 !important" 
                            sx={{ width: 30, height: 30, borderRadius: "51%" }} 
                        />
                    </Badge>
                </IconButton>
            </ListItem> */}

        </List>
    );

    return (
        <>
            <AppBar 
                position="fixed" 
                sx={{ background: "#0db915", zIndex: 10, opacity: 1, width: "100%", paddingX: 2 }} 
                className="backdrop-blur-md !important"
            >
                <Toolbar sx={{ 
                        width: "100%",
                        display: "flex", 
                        flexDirection: "row", 
                        justifyContent: "space-between", 
                        alignItems: "center" 
                    }}
                >

                     {/* Logo Block */}
                    <Avatar
                        alt="Judyhub logo"
                        src={logoSvg}
                        sx={{ 
                            width: window.innerWidth > 768 ? 55 : 
                            window.innerWidth < 768 && window.innerWidth > 480 ? 45 : 40,
                            height: window.innerWidth > 768 ? 55 : 
                            window.innerWidth < 768 && window.innerWidth > 480 ? 45 : 40, 
                            cursor: "pointer", padding: "4px"
                        }}
                    />

                     {/* Navigation Links */}
                    {/* <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
                        {
                            navLinks.map((nav, index) => (
                                <NavLink 
                                    key={index} 
                                    to={pathAccess ? nav.link : "/"} 
                                    onClick={() => setActive(capitalize(nav.name))} 
                                    className={`flex justify-center items-center px-2 cursor-pointer 
                                        hover:text-secondaryBrown duration-500 transition-all 
                                        xs:hover:border-b-4 hover:border-b-0 hover:border-secondaryBrown 
                                        focus:outline-none focus:ring-0
                                        ${active === capitalize(nav.name) 
                                        ? "text-secondaryBrown font-semibold" 
                                        : "text-white font-normal title-text-shadow4"}`}
                                >
                                    <Typography variant="h6">
                                        { capitalize(nav.name) }
                                    </Typography>
                                </NavLink>
                            ))
                        }
                    </Box> */}

                    <div className="flex flex-row justify-around item-center">
                        <div 
                            style={{ fontFamily: "sans-serif", fontSize: window.innerWidth > 768 ? "24px" : "17px" }} 
                            className="w-full text-[#00040f] py-1"
                        >
                            Welcome to Judyhub!
                        </div>

                        <div onClick={handleCart} className="w-fit h-fit rounded-full ml-3 pulseBorder">
                            <IconButton aria-label="cart">
                                <Badge badgeContent={cartCount} color="error" showZero={false}>
                                    <ShoppingCartIcon
                                        // onClick={() => addCartData(id, name, newPrice, productQuantity, setProfileFormData)}
                                        htmlColor={"white"}
                                        sx={{ 
                                            width: window.innerWidth > 500 ? 35 : 18, 
                                            height: window.innerWidth > 500 ? 35 : 18, 
                                            borderRadius: 9999, cursor: "pointer", 
                                        }} 
                                    />
                                </Badge>
                            </IconButton>
                        </div>

                        {/* Mobile Menu Button */}
                        {/* <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { sm: "none" }, width: 35, height: 35, marginLeft: "1px" }}
                            onClick={handleDrawerToggle}
                        >
                            <Menu sx={{ width: 35, height: 35 }} />
                        </IconButton> */}
                    </div>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={menuOpened} onClose={handleDrawerToggle}>
                {drawer}
            </Drawer>

            {
                showCart && (
                    <ModalCart 
                        show={showCart} 
                        onClose={handleCloseCart} 
                        title={cartHeader}
                        width="600px"
                        height="500px"
                    >
                        <Cart/>
                    </ModalCart>
                )
            }
        </>
    );
};

export default Navbar;
