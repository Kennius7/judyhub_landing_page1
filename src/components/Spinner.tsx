
const Spinner = ({ 
    dim1="80px", dim2="70px", dim3="60px", 
    borWidth="4px", borColor1="#613207", 
    borColor2="#613207", borColor3="#613207" 
}) => {

    return (
        <div className="flex flex-row justify-center item-center">
            <div 
                style={{ 
                    width: dim1, 
                    height: dim1, 
                    borderWidth: borWidth, 
                    borderColor: borColor1,
                    borderTopColor: "transparent",
                    borderRadius: "100%",
                    backgroundColor: "#fed000",
                }} 
                className="animate-spin flex flex-row justify-center item-center"
            >spinner text
                <div 
                    style={{ 
                        width: dim2, 
                        height: dim2, 
                        borderWidth: borWidth, 
                        borderColor: borColor2,
                        borderTopColor: "transparent",
                        borderRadius: "100%",
                        backgroundColor: "#aab000",
                    }}
                    // style={{ width: dim2, height: dim2, borderWidth: borWidth, borderColor: borColor2 }} 
                    className="animate-spin flex flex-row justify-center item-center"
                >Checking...
                    <div 
                        style={{ 
                            width: dim3, 
                            height: dim3, 
                            borderWidth: borWidth, 
                            borderColor: borColor3,
                            borderTopColor: "transparent",
                            borderRadius: "100%",
                        }} 
                        className="animate-spin flex flex-row justify-center item-center">
                    </div>
                </div>
            </div>
        </div>
    )

    // return (
    //     <div className="flexCenter">
    //         <div 
    //             style={{ width: dim1, height: dim1, borderWidth: borWidth, borderColor: borColor1 }} 
    //             className="!border-t-transparent rounded-full animate-spin flexCenter">Spinner words!
    //             <div 
    //                 style={{ width: dim2, height: dim2, borderWidth: borWidth, borderColor: borColor2 }} 
    //                 className="!border-t-transparent rounded-full animate-spin flexCenter">
    //                 <div 
    //                     style={{ width: dim3, height: dim3, borderWidth: borWidth, borderColor: borColor3 }} 
    //                     className="!border-t-transparent rounded-full animate-spin flexCenter">
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Spinner
