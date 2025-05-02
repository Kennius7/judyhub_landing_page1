import React, { useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import getSymbolFromCurrency from "currency-symbol-map";
import axios from "axios";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const WhatsAppContact = ({ onClose }: { onClose: () => void }) => {
    const { cartData } = useContext(MainContext);
    const NGN = getSymbolFromCurrency("NGN");
    const emailURL = import.meta.env.VITE_API_EMAIL_URL;
    const sellerPhoneNumber = "2347066936304";
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const totalCartPrice = cartData.reduce((acc, item) => {
        const price = parseInt(item.price.replace(/,/g, '')) || 0;
        const quantity = item.no_of_items || 0;
        return acc + (price * quantity);
    }, 0);

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

        const emailMessageBody = cartData.map(item => {
            const price = parseInt(item.price.replace(/,/g, "")) || 0;
            const quantity = parseInt(item.no_of_items.toString()) || 0;
            const totalPrice = price * quantity;
            // const totalPrice = Number(item.price) * item.no_of_items;
            return `Name: ${item.p_name} \n<br> Quantity: ${item.no_of_items} \n<br> Total Product Price: ${NGN}${totalPrice}\n\n\n<br><br>`
        })
        .join('');

        const whatsappMessageBody = cartData.map(item => {
            const price = parseInt(item.price.replace(/,/g, "")) || 0;
            const quantity = parseInt(item.no_of_items.toString()) || 0;
            const totalPrice = price * quantity;
            // const totalPrice = Number(item.price) * item.no_of_items;
            return `Name: ${item.p_name}\nQuantity: ${item.no_of_items} \nTotal Product Price: ${NGN}${totalPrice}\n\n\n`
        })
        .join('');

        const fullMessage = `I'm interested in buying these products: \n\n${emailMessageBody}\n` + message ;
        const whatsappMessage = `I'm interested in buying these products: \n\n${whatsappMessageBody}\n` + message ;
        const text = `Hello, my name is ${name}.\nMy email is: (${email}).\n${whatsappMessage || "I'm interested in your product."}\nTotal Price: ${NGN}${totalCartPrice.toString()}`;
        const encodedText = encodeURIComponent(text);

        const sendEmail = async () => {
            try {
                console.log("Sending...");
                const apiType = "LANDING";
                const response = await axios.post(emailURL, { name, email, fullMessage, totalCartPrice, apiType });
                console.log("Response Data:>>>>", response);
            } catch (error) {
                console.error("Error:", error);
            }
        }

        const whatsappUrl = `https://wa.me/${sellerPhoneNumber}?text=${encodedText}`;
        sendEmail();
        window.open(whatsappUrl, "_blank");
        setTimeout(() => { onClose() }, 1000);
    };

    return (
        <div className="w-full m-1 p-1">
            <form onSubmit={handleSubmit}>
                <div className="mb-2 mt-4">
                    <label 
                        htmlFor="name" 
                        className="sm:text-[18px] text-[17px] font-sans font-semibold"
                    >
                        Name:
                    </label>
                    <br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-1 bg-[#e9e5e5]"
                    />
                </div>

                <div className="mb-2">
                    <label 
                        htmlFor="email" 
                        className="sm:text-[18px] text-[17px] font-sans font-semibold"
                    >
                        Email:
                    </label>
                    <br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-1 bg-[#e9e5e5]"
                    />
                </div>

                <div className="mb-8">
                    <label 
                        htmlFor="message" 
                        className="sm:text-[18px] text-[17px] font-sans font-semibold"
                    >
                        Message (optional):
                    </label>
                    <br />
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-1 bg-[#e9e5e5]"
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

