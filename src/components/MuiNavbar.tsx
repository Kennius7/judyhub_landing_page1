import { useContext } from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Drawer, List, ListItem } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { logoSvg } from "../assets";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/mainContext";
// import { NavLink } from "react-router-dom";
// import { navLinks } from "../constants/data";
// import { capitalize } from "lodash";



const Navbar = () => {
    const navigate = useNavigate();
    const { menuOpened, setMenuOpened } = useContext(MainContext);

    // const { name, image, cartData } = profileFormData;

    const handleDrawerToggle = () => { setMenuOpened(!menuOpened) };
    const handleLoginNavigator = () => navigate("/login");
    
    // const profPicsNavigator = () => {
    //     if (isLoggedIn && !isTokenExpired) { navigate("/profile") } else { navigate("/login") }
    // }

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
                sx={{ background: "#0db915", zIndex: 10, opacity: 0.9 }} 
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
                        onClick={()=>navigate("/")}
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


                    {/* From Login to Mobile Menu Button Section */}
                    <div className="flexCenter xs:gap-x-4 gap-x-1">
                        {/* Login Button */}
                        {/* <button 
                            onClick={()=>navigate("/login")} 
                            className='xs:block hidden text-white bg-secondaryBrown px-5 py-[6px] rounded-md shadow-md 
                            hover:bg-gray-200'>
                            Sign in
                        </button> */}

                        {/* Welcome Text */}
                        <Typography variant="h6" sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
                            "Hi, and welcome to Judyhub!"
                        </Typography>

                        {/* Profile Avatar */}
                        {/* <Avatar
                            alt="Guest"
                            src={image}
                            onClick={profPicsNavigator}
                            sx={{ 
                                width: window.innerWidth > 768 ? 40 : 
                                window.innerWidth < 768 && window.innerWidth > 480 ? 40 : 35,
                                height: window.innerWidth > 768 ? 40 : 
                                window.innerWidth < 768 && window.innerWidth > 480 ? 40 : 35, 
                                cursor: "pointer", 
                                border: "2px solid #fff",
                            }}
                        /> */}

                        {/* Cart Icon */}
                        {/* <IconButton
                            color="inherit"
                            onClick={() => navigate("/cart")}
                            // sx={{ display: { xs: "none", sm: "inline-flex" } }}
                        >
                            <Badge 
                                badgeContent={cartData.length} 
                                color="error"
                                sx={{ 
                                    width: window.innerWidth > 500 ? 30 : 26, 
                                    height: window.innerWidth > 500 ? 30 : 26, 
                                }}
                            >
                                <ShoppingCart 
                                    className="xs:animate-pulseBorder animate-none !important" 
                                    sx={{ 
                                        width: window.innerWidth > 500 ? 35 : 30, 
                                        height: window.innerWidth > 500 ? 35 : 30, 
                                        borderRadius: "51%" 
                                    }} 
                                />
                            </Badge>
                        </IconButton> */}

                        {/* Mobile Menu Button */}
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { sm: "none" }, width: 35, height: 35, marginLeft: "1px" }}
                            onClick={handleDrawerToggle}
                        >
                            <Menu sx={{ width: 35, height: 35 }} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={menuOpened} onClose={handleDrawerToggle}>
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
