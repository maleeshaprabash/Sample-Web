import { useState } from "react"
import SvgIcon from "./SvgIcons"

function NavBar() {

    const [IsOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!IsOpen);
    }

    return (
        <div className="relative w-full z-10">
            <SvgIcon />
            <div className="relative flex items-center justify-between md:px-20 px-10 h-25">

                <div className="xl:hidden flex cursor-pointer" onClick={toggleMenu}>
                    <svg className="size-5"><use xlinkHref="#menu" /></svg>
                </div>

                <div className="text-[min(4vw,35px)] font-Aclonica text-[#6E4826] tracking-wider">
                    Kamelia
                </div>

                <div className="flex gap-5">
                    <div className="flex group gap-2 items-center text centerjustify-center cursor-pointer">
                        <svg className="size-5 group-hover:scale-110"><use xlinkHref="#shopping-bag" /></svg>
                        <p className="text-[13px] capitalize md:flex hidden">shopping cart</p>
                    </div>

                    <div className="flex group gap-2 items-center text centerjustify-center cursor-pointer">
                        <svg className="size-5 group-hover:scale-110"><use xlinkHref="#heart" /></svg>
                        <p className="text-[13px] capitalize md:flex hidden">my wish list</p>
                    </div>

                    <div className="flex h-8 w-24 bg-none justify-center items-center border rounded-md cursor-pointer">
                        <p className="capitalize text-[14px]">Sign In</p>
                    </div>
                </div>
            </div>

            <div className="relative h-12 w-full items-center justify-around bg-[#F0EADC] xl:flex hidden">
                <ul className="flex text-[min(0.9vw,14px)] gap-10 font-SNPro font-semibold tracking-widest text-[#6E4826] uppercase">
                    <li>New Arrivals</li>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids & Baby</li>
                    <li>Health & Beauty</li>
                    <li>Home and Lifestyle</li>
                    <li>gift vouchers</li>
                    <li>sale</li>
                    <li>Buy 1 get 1</li>
                    <li>gift packs</li>
                </ul>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-opacity-50 transition-opacity duration-300 md:hidden ${IsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={toggleMenu}
            />

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-[#F0EADC] shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${IsOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center px-6 py-5 border-b border-[#6E4826]/20">
                    <p className="text-[20px] font-Aclonica text-[#6E4826]">Menu</p>
                    <button onClick={toggleMenu} className="cursor-pointer">
                        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="px-6 py-5 font-SNPro font-semibold text-[14px] tracking-widest text-[#6E4826] uppercase space-y-7">
                    <li className="hover:text-[#8B5A3C] transition-colors cursor-pointer">New Arrivals</li>
                    <li className="hover:text-[#8B5A3C] transition-colors cursor-pointer">Women</li>
                    <li className="hover:text-[#8B5A3C] transition-colors cursor-pointer">Men</li>
                    <li className="hover:text-[#8B5A3C] transition-colors cursor-pointer">Kids & Baby</li>
                    <li className="hover:text-[#8B5A3C] transition-colors cursor-pointer">Health & Beauty</li>
                    <li className="hover:text-[#8B5A3C] transition-colors cursor-pointer">Home and Lifestyle</li>
                    <li className="hover:text-[#8B5A3C] transition-colors cursor-pointer">Gift Vouchers</li>
                    <li className="hover:text-[#8B5A3C] transition-colors cursor-pointer">Sale</li>
                    <li className="hover:text-[#8B5A3C] transition-colors cursor-pointer">Buy 1 Get 1</li>
                    <li className="hover:text-[#8B5A3C] transition-colors cursor-pointer">Gift Packs</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar