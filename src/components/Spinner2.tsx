import { useContext } from "react";
import { MainContext } from "../context/mainContext";

const Spinner = () => {
    const { primaryGreen, secondaryBrown } = useContext(MainContext);
    const SCDim = 25;
    const LCDim = 100;
    const XtremDim = SCDim * 0.5;
    const halfDim = (LCDim * 0.5) - XtremDim;

    return (
        <div style={{ position: "relative", width: LCDim, height: LCDim }}>
            <div 
                style={{ 
                    width: "100%", 
                    height: "100%", 
                    borderTopColor: "transparent",
                    borderRadius: 100,
                    backgroundColor: "transparent",
                    border: `1px solid ${primaryGreen}`,
                }} 
                className="flex-center animate-spin1"
            >
                {/* Right part of the smaller circles ======================================>> */}
                <div 
                    style={{ 
                        position: "absolute", 
                        zIndex: 2, top: 0, right: 0, 
                        backgroundColor: primaryGreen, 
                        width: SCDim, height: SCDim, 
                        borderRadius: 100,
                    }}
                    className="flex-center animate-spin2"
                >
                    <div 
                        style={{
                            textAlign: "center",
                            color: secondaryBrown,
                            fontWeight: "600",
                            paddingBottom: 8,
                        }}>
                        ...
                    </div>
                </div>

                <div 
                    style={{ 
                        position: "absolute", 
                        zIndex: 2, top: halfDim, right: -XtremDim, 
                        backgroundColor: primaryGreen, 
                        width: SCDim, height: SCDim, 
                        borderRadius: 100,
                    }}
                    className="flex-center animate-spin2"
                >
                    <div 
                        style={{
                            textAlign: "center",
                            color: secondaryBrown,
                            fontWeight: "600",
                            paddingBottom: 8,
                        }}>
                        ...
                    </div>
                </div>

                <div 
                    style={{ 
                        position: "absolute", 
                        zIndex: 2, bottom: 0, right: 0, 
                        backgroundColor: primaryGreen, 
                        width: SCDim, height: SCDim, 
                        borderRadius: 100,
                    }}
                    className="flex-center animate-spin2"
                >
                    <div 
                        style={{
                            textAlign: "center",
                            color: secondaryBrown,
                            fontWeight: "600",
                            paddingBottom: 8,
                        }}>
                        ...
                    </div>
                </div>

                {/* Left part of the smaller circles ======================================>> */}
                <div 
                    style={{ 
                        position: "absolute", 
                        zIndex: 2, top: 0, left: 0, 
                        backgroundColor: primaryGreen, 
                        width: SCDim, height: SCDim, 
                        borderRadius: 100,
                    }}
                    className="flex-center animate-spin2"
                >
                    <div 
                        style={{
                            textAlign: "center",
                            color: secondaryBrown,
                            fontWeight: "600",
                            paddingBottom: 8,
                        }}>
                        ...
                    </div>
                </div>

                <div 
                    style={{ 
                        position: "absolute", 
                        zIndex: 2, top: halfDim, left: -XtremDim, 
                        backgroundColor: primaryGreen, 
                        width: SCDim, height: SCDim, 
                        borderRadius: 100,
                    }}
                    className="flex-center animate-spin2"
                >
                    <div 
                        style={{
                            textAlign: "center",
                            color: secondaryBrown,
                            fontWeight: "600",
                            paddingBottom: 8,
                        }}>
                        ...
                    </div>
                </div>

                <div 
                    style={{ 
                        position: "absolute", 
                        zIndex: 2, bottom: 0, left: 0, 
                        backgroundColor: primaryGreen, 
                        width: SCDim, height: SCDim, 
                        borderRadius: 100,
                    }}
                    className="flex-center animate-spin2"
                >
                    <div 
                        style={{
                            textAlign: "center",
                            color: secondaryBrown,
                            fontWeight: "600",
                            paddingBottom: 8,
                        }}>
                        ...
                    </div>
                </div>

                {/* Top and Bottom part of the smaller circles ======================================>> */}
                <div 
                    style={{ 
                        position: "absolute", 
                        zIndex: 2, top: -XtremDim, left: halfDim, 
                        backgroundColor: primaryGreen, 
                        width: SCDim, height: SCDim, 
                        borderRadius: 100,
                    }}
                    className="flex-center animate-spin2"
                >
                    <div 
                        style={{
                            textAlign: "center",
                            color: secondaryBrown,
                            fontWeight: "600",
                            paddingBottom: 8,
                        }}>
                        ...
                    </div>
                </div>

                <div 
                    style={{ 
                        position: "absolute", 
                        zIndex: 2, bottom: -XtremDim, left: halfDim, 
                        backgroundColor: primaryGreen, 
                        width: SCDim, height: SCDim, 
                        borderRadius: 100,
                    }}
                    className="flex-center animate-spin2"
                >
                    <div 
                        style={{
                            textAlign: "center",
                            color: secondaryBrown,
                            fontWeight: "600",
                            paddingBottom: 8,
                        }}>
                        ...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spinner
