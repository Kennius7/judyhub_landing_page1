
import React, { useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import getSymbolFromCurrency from "currency-symbol-map";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const WhatsAppContact = ({ onClose }: { onClose: () => void }) => {
    const { cartData } = useContext(MainContext);
    const NGN = getSymbolFromCurrency("NGN");
    const sellerPhoneNumber = "2347066936304";
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name || !email) {
            alert("Please fill in your name and email.");
            return;
        }

        const cartMessageBody = cartData.map(item => {
            const price = parseInt(item.price.replace(/,/g, "")) || 0;
            const quantity = parseInt(item.no_of_items.toString()) || 0;
            const totalPrice = price * quantity;
            // const totalPrice = Number(item.price) * item.no_of_items;
            return `Name: ${item.p_name}\nQuantity: ${item.no_of_items}\nTotal Product Price: ${NGN}${totalPrice}\n\n\n`
        })

        const fullMessage = `I'm interested in buying these products: \n\n${cartMessageBody}\n` + message ;

        const text = `Hello, my name is ${name}.\nMy email is:(${email}).\n${fullMessage || "I'm interested in your product."}`;
        const encodedText = encodeURIComponent(text);

        const whatsappUrl = `https://wa.me/${sellerPhoneNumber}?text=${encodedText}`;
        window.open(whatsappUrl, "_blank");
        setTimeout(() => { onClose() }, 1000);
    };

    return (
        <div style={{ width: "80%", margin: "0 auto", padding: "1rem" }}>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="name">Name:</label><br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "0.5rem", backgroundColor: "rgba(255, 255, 180, 0.3)" }}
                    />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="email">Email:</label><br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "0.5rem", backgroundColor: "rgba(255, 255, 180, 0.4)" }}
                    />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="message">Message (optional):</label><br />
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        style={{ width: "100%", padding: "0.5rem", backgroundColor: "rgba(255, 255, 180, 0.4)" }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: "0.7rem 1.5rem",
                        backgroundColor: "#25D366",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Message Seller on WhatsApp
                </button>
            </form>
        </div>
    );
};

export default WhatsAppContact;

