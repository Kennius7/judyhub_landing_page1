import { Link } from "react-router-dom";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS, navLinks } from "../data";
import logo from "../assets/judyhub-logo02.png";


type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
};

const Footer = () => {
    const margTop = "xs:mt-[12px] mt-[8px]";

    const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
        return (
            <div className={`flex justify-center items-start ${title === "Socials" ? "flex-row" : "flex-col"}`}>
                <h4 
                    className={`sm:text-[20px] text-[16px] font-sans font-semibold 
                    ${title === "Socials" ? "hidden" : "block"}`}
                >
                    {title}
                </h4>
                {children}
            </div>
        );
    }


    return (
        <footer>
            <div className="sm:px-4 px-1">
                <Link to={'/'}>
                    <div className="md:w-[150px] md:h-[50px] sm:w-[130px] sm:h-[40px] w-[110px] h-[40px] 
                        mb-[20px] sm:m-1 m-2">
                        <img src={logo} alt="logo" className="w-full h-full" />
                    </div>
                </Link>
                <div className="flex justify-between items-start">
                    {
                        FOOTER_LINKS.map((col) => (
                            <FooterColumn key={col.title} title={col.title}>
                                <ul className={`${margTop}`}>
                                    {
                                        col.links.map((link, index) => (
                                            <Link to={navLinks[1].link} key={index}>
                                                <li className="text-slate-500 sm:text-[14px] text-[12px] 
                                                    md:mb-[16px] sm:mb-[8px] mb-[4px]">
                                                    {link}
                                                </li>
                                            </Link>
                                        ))
                                    }    
                                </ul>
                            </FooterColumn>
                        ))
                    }
                    <div>
                        <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                            {
                                FOOTER_CONTACT_INFO.links.map((link) => (
                                    <Link to={'/'} key={link.label}>
                                        <div 
                                            className="flex sm:flex-row flex-col justify-center items-start 
                                            md:mt-[16px] sm:mt-[8px] mt-[4px]"
                                        >
                                            <p className="text-slate-500 text-[14px]">
                                                {link.label}:&nbsp;&nbsp;
                                            </p> 
                                            <div className="text-slate-500 text-[14px] flex flex-col 
                                                justify-center items-start">
                                                {
                                                    link.value.map((value, index) => (
                                                        <p 
                                                            key={index} 
                                                            className="sm:text-[16px] text-[11px]"
                                                        >
                                                            {value}
                                                        </p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </FooterColumn>
                    </div>
                
                </div>
                <div className="sm:mt-0 mt-[30px]">
                        <FooterColumn title={SOCIALS.title}>
                            {
                                SOCIALS.links.map((link, index) => (
                                    <Link to={'/'} key={index}>
                                        <div className="sm:w-7 sm:h-7 w-5 h-5 sm:mx-4 mx-2">
                                            <img src={link} alt="social media icons" className="w-full h-full" />
                                        </div>
                                    </Link>
                                ))
                            }
                        </FooterColumn>
                </div>
                <div className="w-full border bg-gray-20 sm:my-[30px] my-[10px]"></div>
                <div className="w-full flex justify-center items-center">
                    <p className="text-slate-400 text-[13px] text-center sm:mb-2 mb-1">
                        2024 Judyhub | All rights reserved &copy;
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer