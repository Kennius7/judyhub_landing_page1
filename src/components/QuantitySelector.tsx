
import { useState } from "react";

export default function QuantitySelector({ 
    min = 1, max = 99, onChange 
}: { min: number, max: number, onChange: (qty: number) => void }) {
    const [quantity, setQuantity] = useState(min);

    const handleDecrease = () => {
        if (quantity > min) {
            const newQty = quantity - 1;
            setQuantity(newQty);
            onChange(newQty);
        }
    };

    const handleIncrease = () => {
        if (quantity < max) {
            const newQty = quantity + 1;
            setQuantity(newQty);
            onChange(newQty);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(e.target.value);
        if (isNaN(value)) value = min;
        if (value < min) value = min;
        if (value > max) value = max;
        setQuantity(value);
        onChange(value);
    };

    return (
        <div className="flex items-center gap-2">
            <button
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={handleDecrease}
            >
                -
            </button>
            <input
                type="number"
                value={quantity}
                onChange={handleInputChange}
                className="w-16 text-center border rounded px-2 py-1"
                min={min}
                max={max}
            />
            <button
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={handleIncrease}
            >
                +
            </button>
        </div>
    );
}

