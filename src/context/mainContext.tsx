import { createContext } from "react";

type MainContextType = {
    active: boolean;
    setActive: (active: boolean) => void;
    fetchedData: { products: never[] };
    setFetchedData: React.Dispatch<React.SetStateAction<{products: never[]}>>
    menuOpened: boolean;
    setMenuOpened: (menuOpened: boolean) => void;
};

export const MainContext = createContext<MainContextType>({
    active: false,
    setActive: () => {},
    fetchedData: { products: [] },
    setFetchedData: () => {},
    menuOpened: false,
    setMenuOpened: () => {},
});

