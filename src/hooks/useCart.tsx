
import { useEffect, useContext } from 'react';
import { MainContext } from '../context/mainContext';
import { toast } from 'react-toastify';

// export interface CartItem {
//     p_id: number;
//     p_name: string;
//     price: number;
//     no_of_items: number;
// }

type Cart = {
    p_id: number;
    p_name: string;
    price: string;
    no_of_items: number;
};

export const useCart = () => {
    // const [cart, setCart] = useState<Cart[]>([]);
    const { cartData, setCartData } = useContext(MainContext);

    useEffect(() => {
        const localStorageCart = JSON.parse(localStorage.getItem("user-cart") || "[]") as Cart[];
        if (localStorageCart) {
            setCartData(localStorageCart);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        localStorage.setItem("user-cart", JSON.stringify(cartData));
    }, [cartData]);

    const addItem = (newItem: Cart) => {
        setCartData(prevCart => {
            const existingItem = prevCart.find(item => item.p_id === newItem.p_id);

            if (existingItem) {
                return prevCart.map(item =>
                item.p_id === newItem.p_id
                    ? { ...item, no_of_items: item.no_of_items + 1 }
                    : item
                );
            } else {
                return [...prevCart, { ...newItem, no_of_items: 1 }];
            }
        });
    };

    const removeItem = (id: number) => {
        setCartData(prevCart => prevCart.filter(item => item.p_id !== id));
    };

  // Increase quantity
    const increaseItem = (id: number) => {
        setCartData(prevCart =>
            prevCart
                .map(item =>
                    item.p_id === id
                        ? { ...item, no_of_items: item.no_of_items + 1 }
                        : item
                    )
                .filter(item => item.no_of_items > 0)
        );
        toast("Added one item more...", { type: "success" });
    };

    // Decrease quantity or remove if quantity reaches 0
    const decreaseItem = (id: number) => {
        setCartData(prevCart =>
            prevCart
                .map(item =>
                    item.p_id === id
                        ? { ...item, no_of_items: item.no_of_items - 1 }
                        : item
                    )
                .filter(item => item.no_of_items > 0)
        );
    };


    const clearCart = () => { setCartData([]) };

    return { addItem, removeItem, increaseItem, decreaseItem, clearCart };
};

