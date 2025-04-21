import { createContext,Dispatch, SetStateAction } from "react";



type Product = {
    id: number;
    name: string;
    category: string;
    tags: string;
    image: string;
    newPrice: string;
    oldPrice: string;
    description: string;
};

export default Product;

type MainContextType = {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    fetchedData: Product[];
    setFetchedData: Dispatch<SetStateAction<Product[]>>;
    menuOpened: boolean;
    setMenuOpened: Dispatch<SetStateAction<boolean>>;
    primaryGreen: string;
    secondaryBrown: string;
};


// eslint-disable-next-line react-refresh/only-export-components
export const MainContext = createContext<MainContextType>({
    active: false,
    setActive: () => {},
    fetchedData: [],
    setFetchedData: () => {},
    menuOpened: false,
    setMenuOpened: () => {},
    primaryGreen: "#0db915",
    secondaryBrown: "#613207",
});

