import { createContext, Dispatch, SetStateAction } from "react";


export type Product = {
    id: number;
    name: string;
    category: string;
    tags: string;
    image: string;
    newPrice: string;
    oldPrice: string;
    description: string;
};

export type Cart = {
    p_id: number;
    p_name: string;
    price: string;
    no_of_items: number;
};


type MainContextType = {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    fetchedData: Product[];
    setFetchedData: Dispatch<SetStateAction<Product[]>>;
    menuOpened: boolean;
    setMenuOpened: Dispatch<SetStateAction<boolean>>;
    primaryGreen: string;
    secondaryBrown: string;
    cartData: Cart[];
    setCartData: Dispatch<SetStateAction<Cart[]>>;
    animateOut: boolean;
    setAnimateOut: Dispatch<SetStateAction<boolean>>;
    animateOutPics: boolean;
    setAnimateOutPics: Dispatch<SetStateAction<boolean>>;
    animateOutCart: boolean;
    setAnimateOutCart: Dispatch<SetStateAction<boolean>>;
    cartCount: number;
    setCartCount: Dispatch<SetStateAction<number>>;
};

export const MainContext = createContext<MainContextType>({
    active: false,
    setActive: () => {},
    fetchedData: [],
    setFetchedData: () => {},
    menuOpened: false,
    setMenuOpened: () => {},
    primaryGreen: "#0db915",
    secondaryBrown: "#613207",
    cartData: [],
    setCartData: () => {},
    animateOut: false, 
    setAnimateOut: () => {},
    animateOutPics: false, 
    setAnimateOutPics: () => {},
    animateOutCart: false, 
    setAnimateOutCart: () => {},
    cartCount: 0,
    setCartCount: () => {},
});

