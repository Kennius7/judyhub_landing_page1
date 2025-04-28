import { ReactNode, useState, useEffect, useContext } from "react";
import { X_Icon } from "../assets";
import { MainContext } from "../context/mainContext";


const ModalPics = ({ 
    show, 
    onClose, 
    title, 
    children, 
    width="500px", 
    height="300px" 
}: { 
    show: boolean, 
    onClose: () => void, 
    title: string, 
    children: ReactNode, 
    width?: string, 
    height?: string 
}) => {

    const [shouldRender, setShouldRender] = useState(show);
    const { animateOutPics, setAnimateOutPics } = useContext(MainContext);

    useEffect(() => {
        if (show) {
            setShouldRender(true);
            setAnimateOutPics(false);
        } else {
            setAnimateOutPics(true);
        }
    }, [show, setAnimateOutPics]);

    const handleAnimationEnd = () => {
        if (animateOutPics) {
            setShouldRender(false);
            onClose();
        }
    };

    const handleOverlayAnimationEnd = () => {
        if (animateOutPics) {
            setShouldRender(false);
            onClose();
        }
    };

    const handleCloseEnd = () => {
        if (animateOutPics) { onClose() }
    }

    if (!shouldRender) return null;


    return (
        <div 
            onClick={() => setAnimateOutPics(true)} 
            onTransitionEnd={handleOverlayAnimationEnd}
            onAnimationEnd={handleCloseEnd}
            className={`fixed top-0 left-0 z-[10] w-full h-full bg-slate-800/60 
                flexCenter ${animateOutPics ? "overlayFadeOut" : "overlayFadeIn"}`}
        >
            <div 
                onClick={ e => e.stopPropagation() } 
                style={{ width: width, height: height }}
                onTransitionEnd={ handleAnimationEnd }
                className={`bg-white xs:p-[20px] p-[12px] rounded-lg shadow-[0px_0px_5px_0px_#faf5aac2] 
                ${animateOutPics ? "fadeOutAnimate" : "fadeInAnimate"}`}
            >
                <div className="w-full flexBetween">
                    <h2 className="xs:text-[22px] text-[17px] font-medium font-EncodeSans">
                        {title}
                    </h2>
                    <button 
                        onClick={() => setAnimateOutPics(true)} 
                        className="flexCenter cursor-pointer"
                    >
                        <img src={ X_Icon } alt="x icon" className="w-4 h-4 object-cover"/>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <hr className="xs:w-[60%] w-[70%] border-[1px] border-slate-600"/>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default ModalPics
