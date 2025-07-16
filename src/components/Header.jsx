import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import SearchIcon from "../icons/header/SearchIcon";
import CartIcon from "../icons/header/CartIcon";
import Notification from "../icons/header/Notification";
import SMSIcon from "../icons/header/SMSIcon";
import ToolsIcon from "../icons/header/ToolsIcon";
const Header = () => {
  return (
    <div className="flex justify-between items-center bg-primary px-6 py-4">
      <div className="w-[18%]">
        <Link>
          <img src="images/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-x-18 w-[55%]">
        <ul className="flex items-center gap-x-12 font-poppins font-bold text-sm text-[#FFFFFF]">
          <li className="text-xl">
            <Link to={"#"}>
              <FaBars />
            </Link>
          </li>
          <li>
            <Link to={"#"}>Careers</Link>
          </li>
          <li>
            <Link to={"#"}>Store</Link>
          </li>
          <li>
            <Link to={"#"}>FAQ</Link>
          </li>
          <li>
            <Link to={"#"}>
              <HiDotsHorizontal />
            </Link>
          </li>
        </ul>
        <div className="w-[50%] flex items-center">
          <input
            className="p-4 pr-15 font-poppins font-normal text-sm text-[#6965E0] bg-secondary  w-full rounded-[11px] focus:bg-white focus:outline-none "
            type="text"
            placeholder="Search here ...."
          />
          <div className={"ml-[-32px]"}>
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="w-[27%] flex justify-end items-center  gap-x-12">
        <div>
          <div className="font-poppins font-normal text-xs text-[#FFFFFF] ">
            <span className="mr-11.5">Next</span>
            <span>35 EXP</span>
          </div>
          <div className="w-[111px] h-[3px] bg-secondary rounded-[7px] mt-[3px]">
            <div className="w-[75%] h-full bg-[#41EFFF] rounded-[7px]"></div>
          </div>
        </div>
        <div className="flex items-center gap-x-16.5 relative after:absolute after:content-[''] after:bg-[#7A77FD] after:w-[1px] after:h-[32px] after:left-[-25px] after:top-[50%] after:-translate-y-1/2 before:absolute before:content-[''] before:bg-[#7A77FD] before:w-[1px] before:h-[32px] before:right-[50px] before:top-[50%] before:-translate-y-1/2">
          <div className="flex items-center gap-x-[32px]">
            <CartIcon />
            <SMSIcon />
            <Notification />
          </div>
          <div>
            <Link>
              <ToolsIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
