import { NavLink } from "react-router-dom";
import { FaPlus, FaShoppingCart, FaTasks, FaReceipt } from "react-icons/fa";

const SideSection = () => {
  return (
    <div className="w-3/12 bg-slate-100 pt-32 h-screen flex flex-col gap-10 justify-start">
      <NavLink
        to="/add"
        className={({ isActive }) =>
          `h-14 text-3xl flex items-center gap-4 pl-10 ${
            isActive ? "bg-blue-400 text-white" : "text-black"
          }`
        }
      >
        <FaPlus className="w-6 h-6" />
        Add
      </NavLink>
      <NavLink
        to="/buy"
        className={({ isActive }) =>
          `h-14 text-3xl flex items-center gap-4 pl-10 ${
            isActive ? "bg-blue-400 text-white" : "text-black"
          }`
        }
      >
        <FaShoppingCart className="w-6 h-6" />
        Buy
      </NavLink>
      <NavLink
        to="/inventory"
        className={({ isActive }) =>
          `h-14 text-3xl flex items-center gap-4 pl-10 ${
            isActive ? "bg-blue-400 text-white" : "text-black"
          }`
        }
      >
        <FaTasks className="w-6 h-6" />
        Inventory Reports
      </NavLink>
      <NavLink
        to="/sales"
        className={({ isActive }) =>
          `h-14 text-3xl flex items-center gap-4 pl-10 ${
            isActive ? "bg-blue-400 text-white" : "text-black"
          }`
        }
      >
        <FaReceipt className="w-6 h-6" />
        Sales Report
      </NavLink>
    </div>
  );
};

export default SideSection;
